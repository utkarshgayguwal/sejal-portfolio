import React, { useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { achievements } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Achievements() {
  const root = useRef(null);
  const { Icon, CheckIcon } = achievements;

  useGsap(root, () => {
    // Count-up numbers
    gsap.utils.toArray(".stat-num").forEach((el) => {
      const target = Number(el.dataset.value);
      const suffix = el.dataset.suffix || "";
      const o = { v: 0 };
      el.textContent = `0${suffix}`;
      gsap.to(o, {
        v: target,
        duration: 2,
        ease: "power2.out",
        snap: { v: 1 },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${o.v}${suffix}`;
        },
      });
    });

    gsap.from(".stat-card", {
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: { trigger: ".stat-grid", start: "top 85%" },
    });

    gsap.utils.toArray(".ach-item").forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: item, start: "top 88%" },
      });
      tl.from(item, { x: -80, opacity: 0, duration: 0.9, ease: "power3.out" }).from(
        item.querySelector(".ach-check"),
        { scale: 0, rotate: -90, duration: 0.6, ease: "back.out(3)" },
        "-=0.4"
      );
    });

    // Soft floating glow
    gsap.to(".ach-glow", {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="achievements"
      ref={root}
      className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light py-24 text-white lg:py-32"
    >
      <div className="ach-glow pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionTitle Icon={Icon} title={achievements.title} dark />

        <div className="stat-grid mb-14 grid gap-5 sm:grid-cols-3">
          {achievements.stats.map((s) => (
            <div
              key={s.label}
              className="stat-card rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/20 backdrop-blur"
            >
              <p className="font-serif text-6xl font-bold text-gold">
                <span
                  className="stat-num"
                  data-value={s.value}
                  data-suffix={s.suffix}
                >
                  {s.value}
                  {s.suffix}
                </span>
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="space-y-4">
          {achievements.items.map((item) => (
            <li
              key={item}
              className="ach-item flex items-start gap-5 rounded-2xl bg-white/5 p-6 ring-1 ring-white/15"
            >
              <span className="ach-check flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <CheckIcon size={22} strokeWidth={3} />
              </span>
              <span className="pt-1 text-lg leading-snug sm:text-xl">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
