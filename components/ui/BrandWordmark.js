import Image from "next/image";
import brandIcon from "@/app/icon.svg";

export default function BrandWordmark({
  as: Comp = "span",
  className,
  priority = false,
}) {
  return (
    <Comp className={className}>
      <Image
        src={brandIcon}
        alt=""
        width={30}
        height={30}
        className="wordmark__icon"
        unoptimized
        priority={priority}
      />
      i . a m<em>   F é n i x</em>
    </Comp>
  );
}
