import React, { useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import Words from "./Words.jsx";
import { about } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function About() {
  const root = useRef(null);

  useGsap(root, () => {
    // Words light up as you scroll through the paragraph
    gsap.fromTo(
      ".about-text .word",
      { opacity: 0.12, y: 12 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    // Value cards
    gsap.from(".value-card", {
      y: 90,
      rotate: -5,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.18,
      clearProps: "transform,opacity",
      scrollTrigger: { trigger: ".value-grid", start: "top 80%" },
    });
    gsap.from(".value-icon", {
      scale: 0,
      rotate: -120,
      duration: 0.9,
      ease: "back.out(2.2)",
      stagger: 0.18,
      delay: 0.3,
      scrollTrigger: { trigger: ".value-grid", start: "top 80%" },
    });
  });

  return (
    <section id="about" ref={root} className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-peach/60 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle Icon={about.Icon} title={about.title} />

        <p className="about-text max-w-4xl font-serif text-2xl leading-[1.5] text-navy sm:text-3xl lg:text-4xl">
          <Words text={about.text} />
        </p>

        <div className="value-grid mt-20 grid gap-6 md:grid-cols-3">
          {about.values.map(({ label, text, Icon }) => (
            <div
              key={label}
              className="value-card rounded-3xl bg-peach/70 p-8 shadow-sm ring-1 ring-peach-dark/40 transition-transform duration-300 hover:-translate-y-2"
            >
              <span className="value-icon mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Icon className="h-8 w-8 text-navy" strokeWidth={1.6} />
              </span>
              <h3 className="font-serif text-2xl font-semibold text-navy">{label}</h3>
              <p className="mt-2 leading-relaxed text-navy/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
