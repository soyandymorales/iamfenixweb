const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
const REVALIDATE_SECONDS = 3600;
const PLAYLIST_PAGE_SIZE = 10;

function getCredentials() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const username = process.env.YOUTUBE_CHANNEL_USERNAME;
  const trimmedKey = typeof apiKey === "string" ? apiKey.trim() : "";
  const trimmedUsername = typeof username === "string" ? username.trim() : "";
  if (!trimmedKey || !trimmedUsername) {
    return null;
  }
  return { apiKey: trimmedKey, username: trimmedUsername };
}

function normalizeHandle(value) {
  return String(value)
    .trim()
    .replace(/^@+/, "");
}

function parseCount(value) {
  if (value == null || value === "") {
    return null;
  }
  const count = Number(value);
  return Number.isFinite(count) ? count : null;
}

function formatDuration(iso) {
  if (!iso || typeof iso !== "string") {
    return null;
  }

  const match = iso.match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) {
    return null;
  }

  const days = Number(match[1] || 0);
  const hours = Number(match[2] || 0) + days * 24;
  const minutes = Number(match[3] || 0);
  const seconds = Number(match[4] || 0);
  const pad = (n) => String(n).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  }

  return `${minutes}:${pad(seconds)}`;
}

function pickThumbnail(thumbnails) {
  if (!thumbnails || typeof thumbnails !== "object") {
    return null;
  }

  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default?.url ||
    null
  );
}

function isPublicPlaylistItem(item) {
  const privacy = item?.status?.privacyStatus;
  if (privacy && privacy !== "public") {
    return false;
  }

  const videoId =
    item?.contentDetails?.videoId || item?.snippet?.resourceId?.videoId;
  return Boolean(videoId);
}

function isWatchablePublicVideo(video) {
  const privacy = video?.status?.privacyStatus;
  if (privacy && privacy !== "public") {
    return false;
  }

  if (video?.status?.rejectionReason) {
    return false;
  }

  if (video?.snippet?.liveBroadcastContent === "upcoming") {
    return false;
  }

  return Boolean(video?.id);
}

async function youtubeGet(resource, params, apiKey) {
  const url = new URL(`${YOUTUBE_API_BASE_URL}/${resource}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value != null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    console.error(`YouTube ${resource} failed with HTTP ${response.status}.`);
    return null;
  }

  try {
    const json = await response.json();
    if (!json || json.error) {
      console.error(`YouTube ${resource} returned an error payload.`);
      return null;
    }
    return json;
  } catch {
    console.error(`YouTube ${resource} returned an unreadable payload.`);
    return null;
  }
}

async function resolveUploadsPlaylistId(apiKey, handle) {
  const handleVariants = [`@${handle}`, handle];

  for (const forHandle of handleVariants) {
    const channel = await youtubeGet(
      "channels",
      {
        part: "contentDetails",
        forHandle,
        maxResults: "1",
      },
      apiKey
    );

    const uploadsPlaylistId =
      channel?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (uploadsPlaylistId) {
      return uploadsPlaylistId;
    }
  }

  return null;
}

function mapVideo(video) {
  const id = video?.id;
  const title = video?.snippet?.title?.trim();
  if (!id || !title) {
    return null;
  }

  return {
    id,
    title,
    description: video.snippet?.description?.trim() || "",
    thumbnail: pickThumbnail(video.snippet?.thumbnails),
    publishedAt: video.snippet?.publishedAt || null,
    duration: formatDuration(video.contentDetails?.duration),
    views: parseCount(video.statistics?.viewCount),
    likes: parseCount(video.statistics?.likeCount),
    comments: parseCount(video.statistics?.commentCount),
    url: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
  };
}

export async function getLatestYoutubeVideo() {
  try {
    const credentials = getCredentials();
    if (!credentials) {
      console.error("YouTube credentials are not configured.");
      return null;
    }

    const handle = normalizeHandle(credentials.username);
    if (!handle) {
      console.error("YouTube channel username is empty.");
      return null;
    }

    const uploadsPlaylistId = await resolveUploadsPlaylistId(
      credentials.apiKey,
      handle
    );
    if (!uploadsPlaylistId) {
      console.error("YouTube uploads playlist was not found.");
      return null;
    }

    const playlist = await youtubeGet(
      "playlistItems",
      {
        part: "snippet,contentDetails",
        playlistId: uploadsPlaylistId,
        maxResults: String(PLAYLIST_PAGE_SIZE),
      },
      credentials.apiKey
    );

    const publicItems = (playlist?.items ?? []).filter(isPublicPlaylistItem);
    if (publicItems.length === 0) {
      return null;
    }

    const videoIds = publicItems
      .map(
        (item) =>
          item.contentDetails?.videoId || item.snippet?.resourceId?.videoId
      )
      .filter(Boolean)
      .join(",");

    const videos = await youtubeGet(
      "videos",
      {
        part: "snippet,contentDetails,statistics,status",
        id: videoIds,
      },
      credentials.apiKey
    );

    const latest = (videos?.items ?? []).find(isWatchablePublicVideo);
    if (!latest) {
      return null;
    }

    return mapVideo(latest);
  } catch {
    console.error("YouTube latest video lookup failed.");
    return null;
  }
}
