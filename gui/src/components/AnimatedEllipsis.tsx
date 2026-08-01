import { useEffect, useState } from "react";

const DOT_COUNT = 3;
const CYCLE_MS = 400;

/**
 * An animated "..." that never changes the layout of its surroundings.
 *
 * All three dots are always rendered and always occupy their space; only their
 * `visibility` toggles. Because the total width is therefore constant, and the
 * container never wraps (`whiteSpace: nowrap`) or shrinks (`flexShrink: 0`),
 * this component cannot cause the horizontal reflow or vertical bounce that a
 * variable-length string of dots would. No call site needs to wrap it.
 */
export const AnimatedEllipsis = () => {
  const [visibleDots, setVisibleDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDots((prev) => (prev >= DOT_COUNT ? 0 : prev + 1));
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {Array.from({ length: DOT_COUNT }, (_, i) => (
        <span
          key={i}
          style={{ visibility: i < visibleDots ? "visible" : "hidden" }}
        >
          .
        </span>
      ))}
    </span>
  );
};

export default AnimatedEllipsis;
