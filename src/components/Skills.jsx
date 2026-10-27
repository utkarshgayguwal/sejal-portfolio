import React, { useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { skills } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Skills() {
  const root = useRef(null);

  useGsap(root, () => {
    const trigger = { trigger: ".skill-grid", start: "top 82%" };
    gsap.from(".skill-card", {
      y: 70,
      scale: 0.88,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: { each: 0.09, from: "start" },
      clearProps: "transform,opacity",
      scrollTrigger: trigger,
    });
    gsap.from(".skill-icon", {
      scale: 0,
      rotate: -140,
      duration: 0.8,
      ease: "back.out(2.4)",
      stagger: 0.09,
      delay: 0.25,
      scrollTrigger: trigger,
    });
  });

  return (
    <section id="skills" ref={root} className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-peach/60 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle Icon={skills.Icon} title={skills.title} />

        <ul className="skill-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.items.map(({ label, Icon }) => (
            <li
              key={label}
              className="skill-card group flex flex-col items-start gap-5 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-peach/70 transition duration-300 hover:-translate-y-2 hover:bg-navy hover:shadow-xl"
            >
              <span className="skill-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:bg-gold group-hover:text-navy">
                <Icon size={26} />
              </span>
              <span className="font-serif text-xl font-semibold leading-snug text-navy transition group-hover:text-white">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
