import { AnimatedEllipsis } from "../../../AnimatedEllipsis";

export function GeneratingIndicator({
  text = "Generating",
  testId,
}: {
  text?: string;
  testId?: string;
}) {
  return (
    <div
      className="text-description flex items-center"
      data-testid={testId}
      style={{ height: "20px", overflow: "hidden" }}
    >
      <span className="text-xs" style={{ whiteSpace: "nowrap" }}>
        {text}
      </span>
      <span
        style={{
          display: "inline-block",
          width: "20px",
          marginLeft: "2px",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <AnimatedEllipsis />
      </span>
    </div>
  );
}
