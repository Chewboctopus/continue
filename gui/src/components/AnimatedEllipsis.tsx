import React, { useEffect, useState } from "react";

export const AnimatedEllipsis = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        width: "1.2em",
        textAlign: "left",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {dots}
    </span>
  );
};

export default AnimatedEllipsis;
