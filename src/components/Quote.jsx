import React, { useRef } from "react";
import { quote } from "../data.jsx";
import Words from "./Words.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Quote() {
  const root = useRef(null);
  const { Icon } = quote;

  useGsap(root, () => {
    gsap.fromTo(
      ".quote-text .word",
      { opacity: 0.12, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".quote-text",
          start: "top 75%",
          end: "bottom 45%",
          scrub: true,
        },
      }
    );
    gsap.from(".quote-mark", {
      scale: 0,
      rotate: -30,
      duration: 1,
      ease: "back.out(2)",
      scrollTrigger: { trigger: root.current, start: "top 70%" },
    });
    gsap.to(".quote-heart", {
      scale: 1.25,
      duration: 0.7,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(".quote-blob-a", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
    });
    gsap.to(".quote-blob-b", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-peach py-28 text-center lg:py-40"
    >
      <div className="quote-blob-a pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/50 blur-3xl" />
      <div className="quote-blob-b pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-peach-dark/60 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5">
        <span className="quote-mark block font-serif text-9xl leading-none text-navy">“</span>
        <p className="quote-text -mt-6 font-serif text-3xl italic leading-snug text-navy sm:text-5xl">
          {quote.lines.map((line) => (
            <span key={line} className="block">
              <Words text={line} />
            </span>
          ))}
        </p>
        <Icon className="quote-heart mx-auto mt-10 h-10 w-10 text-navy" strokeWidth={1.5} />
      </div>
    </section>
  );
}
