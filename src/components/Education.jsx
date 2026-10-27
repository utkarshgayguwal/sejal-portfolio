import React, { useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { education } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Education() {
  const root = useRef(null);
  const { Icon } = education;

  useGsap(root, () => {
    gsap.utils.toArray(".edu-card").forEach((card, i) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: card, start: "top 85%" },
      });
      tl.from(card, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          card.querySelector(".edu-badge"),
          { scale: 0, rotate: -180, duration: 0.8, ease: "back.out(2.4)" },
          "-=0.6"
        )
        .from(
          card.querySelector(".edu-bar"),
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.4,
            ease: "power3.out",
          },
          "-=0.4"
        );
    });
  });

  return (
    <section id="education" ref={root} className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle Icon={Icon} title={education.title} />

        <div className="grid gap-8 md:grid-cols-2">
          {education.items.map((edu) => (
            <article
              key={edu.degree}
              className="edu-card rounded-3xl bg-gradient-to-br from-white to-peach/40 p-8 shadow-sm ring-1 ring-peach/70"
            >
              <div className="flex items-center gap-5">
                <span className="edu-badge flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-peach font-serif text-2xl font-semibold text-navy">
                  {edu.badge}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-navy/70">{edu.period}</p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-navy/90">{edu.institute}</p>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm font-medium text-navy">
                  <span>CGPA</span>
                  <span>
                    {edu.cgpa} / {edu.outOf}
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-peach/70">
                  <div
                    className="edu-bar h-full rounded-full bg-gradient-to-r from-navy to-navy-light"
                    style={{ width: `${(edu.cgpa / edu.outOf) * 100}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
