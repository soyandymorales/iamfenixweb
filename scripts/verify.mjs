import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  process.env.LOCALAPPDATA + "\\Google\\Chrome\\Application\\chrome.exe",
];

const executablePath = CHROME_PATHS.find((p) => fs.existsSync(p));
if (!executablePath) {
  console.error("Chrome not found");
  process.exit(1);
}

const URL = "http://localhost:3000";
fs.mkdirSync("scripts/shots", { recursive: true });

const browser = await puppeteer.launch({ executablePath, headless: "new" });
const page = await browser.newPage();

const consoleMessages = [];
page.on("console", (msg) => {
  if (["error", "warning"].includes(msg.type())) {
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
  }
});
page.on("pageerror", (err) => consoleMessages.push(`[pageerror] ${err.message}`));

// Desktop
await page.setViewport({ width: 1440, height: 900 });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 3500));
await page.screenshot({ path: "scripts/shots/desktop-hero.png" });

// Scroll through the page slowly to trigger reveals, then full page shot.
await page.evaluate(async () => {
  const height = document.body.scrollHeight;
  for (let y = 0; y < height; y += 400) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: "scripts/shots/desktop-full.png", fullPage: true });

// Mid-page shot of the Three.js diagram
await page.evaluate(() => {
  document
    .querySelector(".arquitectura__canvas")
    ?.scrollIntoView({ block: "center" });
});
await new Promise((r) => setTimeout(r, 2000));
await page.screenshot({ path: "scripts/shots/desktop-diagram.png" });

// Mobile
await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 3000));
await page.screenshot({ path: "scripts/shots/mobile-hero.png" });
await page.evaluate(async () => {
  const height = document.body.scrollHeight;
  for (let y = 0; y < height; y += 300) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 100));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: "scripts/shots/mobile-full.png", fullPage: true });

console.log("Console issues:", consoleMessages.length ? consoleMessages : "none");
await browser.close();
