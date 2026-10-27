import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { contact, footer, profile } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Contact() {
  const root = useRef(null);
  const { MailIcon } = contact;

  useGsap(root, () => {
    gsap
      .timeline({ scrollTrigger: { trigger: root.current, start: "top 70%" } })
      .from(".ct-icon", { scale: 0, rotate: -180, duration: 0.9, ease: "back.out(2.4)" })
      .from(".ct-head", { y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.4")
      .from(
        ".ct-card",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity",
        },
        "-=0.3"
      )
      .from(".ct-cta", { scale: 0.7, opacity: 0, duration: 0.8, ease: "elastic.out(1,0.6)", clearProps: "transform,opacity" }, "-=0.2");

    gsap.to(".ct-glow", {
      scale: 1.2,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <footer id="contact" ref={root} className="relative overflow-hidden bg-navy text-white">
      <div className="ct-glow pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-navy-light/60 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center lg:py-32">
        <MailIcon className="ct-icon mx-auto h-14 w-14 text-peach" strokeWidth={1.4} />
        <h2 className="ct-head mt-6 font-serif text-4xl font-semibold sm:text-6xl">
          {contact.title}
        </h2>
        <p className="ct-head mt-3 text-white/80">{contact.subtitle}</p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {contact.items.map(({ Icon, label, href }) => {
            const inner = (
              <>
                <Icon size={24} className="text-gold" />
                <span className="break-all text-sm">{label}</span>
              </>
            );
            const cls =
              "ct-card flex flex-col items-center gap-3 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 transition duration-300 hover:-translate-y-1 hover:bg-white/15";
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <span className={cls}>{inner}</span>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href={contact.cta.href}
          className="ct-cta mt-12 inline-flex items-center justify-center gap-2 rounded-full bg-peach px-9 py-4 font-semibold text-navy shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
        >
          {contact.cta.label} <ArrowRight size={18} />
        </a>
      </div>

      <div className="relative border-t border-white/10 py-5 text-center text-sm text-white/90">
        © {footer.year} {profile.name} | {footer.text}
      </div>
    </footer>
  );
}
