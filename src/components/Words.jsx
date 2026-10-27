import React from "react";

/**
 * Splits text into individually animatable word spans.
 * Supports **bold** markers. Animate them via the `.word` class.
 */
export default function Words({ text, className = "" }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    const bold = part.startsWith("**");
    const content = bold ? part.slice(2, -2) : part;
    return content
      .split(/\s+/)
      .filter(Boolean)
      .map((w, j) => (
        <span
          key={`${i}-${j}`}
          className={`word mr-[0.28em] inline-block ${
            bold ? "font-semibold text-navy-light" : ""
          } ${className}`}
        >
          {w}
        </span>
      ));
  });
}
