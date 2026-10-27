import React, { useRef } from "react";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function SectionTitle({ Icon, title, dark = false }) {
  const ref = useRef(null);

  useGsap(ref, () => {
    gsap
      .timeline({ scrollTrigger: { trigger: ref.current, start: "top 85%" } })
      .from(".st-icon", {
        scale: 0,
        rotate: -180,
        duration: 0.8,
        ease: "back.out(2)",
      })
      .from(
        ".st-text",
        { yPercent: 115, duration: 0.9, ease: "power4.out" },
        "-=0.45"
      )
      .from(
        ".st-line",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.6"
      );
  });

  return (
    <div ref={ref} className="mb-12 flex items-center gap-4">
      {Icon && (
        <Icon
          className={`st-icon h-9 w-9 shrink-0 ${dark ? "text-gold" : "text-navy"}`}
          strokeWidth={2}
        />
      )}
      <div className="overflow-hidden py-1">
        <h2
          className={`st-text font-serif text-3xl font-semibold sm:text-5xl ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>
      <span
        className={`st-line h-px flex-1 ${
          dark ? "bg-peach-dark/50" : "bg-peach-dark"
        }`}
      />
    </div>
  );
}
