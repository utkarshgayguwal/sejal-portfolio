import React, { useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { experience } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Experience() {
  const root = useRef(null);

  useGsap(root, () => {
    // Timeline line draws as you scroll
    gsap.fromTo(
      ".tl-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: ".tl-list",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      }
    );

    const mm = gsap.matchMedia();
    mm.add({ desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" }, (ctx) => {
      const { desktop } = ctx.conditions;
      gsap.utils.toArray(".tl-item").forEach((item, i) => {
        const dir = desktop ? (i % 2 === 0 ? -1 : 1) : 1;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
        tl.from(item.querySelector(".tl-dot"), {
          scale: 0,
          duration: 0.6,
          ease: "back.out(3)",
        }).from(
          item.querySelector(".tl-card"),
          {
            x: 90 * dir,
            opacity: 0,
            rotate: 2 * dir,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        ).from(
          item.querySelectorAll(".tl-chip"),
          { y: 14, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.5"
        );
      });
    });
  });

  return (
    <section
      id="experience"
      ref={root}
      className="relative overflow-hidden bg-white/60 py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle Icon={experience.Icon} title={experience.title} />

        <ol className="tl-list relative">
          {/* line */}
          <span className="tl-line absolute bottom-0 left-4 top-0 w-0.5 -translate-x-1/2 bg-navy md:left-1/2" />

          {experience.items.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={job.company}
                className={`tl-item relative pb-12 pl-12 last:pb-0 md:w-1/2 md:pl-0 ${
                  left ? "md:pr-14" : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  className={`tl-dot absolute top-8 left-2 h-4 w-4 rounded-full bg-navy ring-4 ring-cream ${
                    left
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:-translate-x-1/2"
                  }`}
                />
                <div
                  className={`tl-card section-card ${left ? "md:text-right" : ""}`}
                >
                  <span
                    className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium shadow-sm ${
                      i === 0 ? "bg-navy text-white" : "bg-peach text-navy"
                    }`}
                  >
                    {job.period}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-navy">
                    {job.company}
                  </h3>
                  <p className="text-navy/80">{job.role}</p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      left ? "md:justify-end" : ""
                    }`}
                  >
                    {job.highlights.map((h) => (
                      <span
                        key={h}
                        className="tl-chip rounded-full bg-peach/70 px-3 py-1 text-xs text-navy"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
