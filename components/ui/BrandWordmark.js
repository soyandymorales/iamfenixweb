import FenixMark from "@/components/ui/FenixMark";

export default function BrandWordmark({ as: Comp = "span", className }) {
  return (
    <Comp className={className}>
      <FenixMark className="wordmark__mark" />
      <span className="wordmark__name">
        i.am<em>Fénix</em>
      </span>
    </Comp>
  );
}
