import React, { useRef, useState } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { hero, profile } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Hero() {
  const root = useRef(null);
  const [photoOk, setPhotoOk] = useState(true);
  const { BadgeIcon } = hero;

  useGsap(root, () => {
    // ---- Intro timeline (on load) ----
    gsap
      .timeline({ defaults: { ease: "power4.out" }, delay: 0.25 })
      .from(".hero-shape", { xPercent: 30, opacity: 0, duration: 1.4 })
      .from(
        ".hero-blob",
        { scale: 0, opacity: 0, duration: 1.6, ease: "elastic.out(1,0.7)" },
        "<0.1"
      )
      .from(".hero-tag", { yPercent: 115, duration: 1, stagger: 0.15 }, "<0.2")
      .from(
        ".hero-rule",
        { scaleX: 0, transformOrigin: "left center", duration: 0.9 },
        "-=0.6"
      )
      .from(
        ".hero-char",
        { yPercent: 120, rotate: 8, opacity: 0, duration: 0.9, stagger: 0.04 },
        "-=0.6"
      )
      .from(
        ".hero-fade",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          clearProps: "transform,opacity",
        },
        "-=0.5"
      )
      .from(
        ".hero-photo",
        {
          y: 120,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.4,
          ease: "power3.out",
        },
        0.6
      )
      .from(".hero-badge", { x: 60, opacity: 0, duration: 1 }, "-=0.9");

    // ---- Idle floating ----
    gsap.to(".hero-float", {
      y: -14,
      duration: 2.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to(".hero-scroll", {
      y: 8,
      duration: 0.9,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // ---- Scroll parallax ----
    const st = {
      trigger: root.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    };
    gsap.to(".hero-parallax-photo", { yPercent: 12, ease: "none", scrollTrigger: st });
    gsap.to(".hero-parallax-text", {
      yPercent: -14,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: st,
    });
    gsap.to(".hero-shape", { yPercent: -8, ease: "none", scrollTrigger: st });
  });

  const nameWords = profile.name.split(" ");

  return (
    <section
      id="home"
      ref={root}
      className="relative overflow-hidden bg-gradient-to-br from-cream via-peach/60 to-cream"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-0">
        {/* Text */}
        <div className="hero-parallax-text relative z-10 lg:py-20">
          <p className="font-serif text-2xl italic leading-snug text-navy sm:text-3xl">
            {hero.tagline.map((line) => (
              <span key={line} className="block overflow-hidden py-0.5">
                <span className="hero-tag block">{line}</span>
              </span>
            ))}
          </p>
          <span className="hero-rule my-4 block h-0.5 w-32 bg-peach-dark" />

          <h1 className="font-serif text-5xl font-bold text-navy sm:text-6xl lg:text-7xl">
            {nameWords.map((word, wi) => (
              <span key={wi} className="mr-[0.25em] inline-block overflow-hidden pb-2 align-top">
                {word.split("").map((ch, ci) => (
                  <span key={ci} className="hero-char inline-block">
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <h3 className="hero-fade mt-3 font-serif text-xl font-semibold text-navy sm:text-2xl">
            {hero.headline}
          </h3>
          <p className="hero-fade mt-4 max-w-md text-lg leading-relaxed text-navy/90">
            {hero.description}
          </p>

          <div className="hero-fade mt-8 flex flex-wrap gap-4">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label} <ArrowRight size={16} />
            </a>
            <a href={hero.secondaryCta.href} download className="btn-outline">
              <Download size={16} /> {hero.secondaryCta.label}
            </a>
          </div>

          <a
            href="#about"
            className="hero-fade mt-12 hidden items-center gap-2 text-sm text-navy/70 lg:inline-flex"
          >
            {hero.scrollText}
            <ChevronDown className="hero-scroll" size={18} />
          </a>
        </div>

        {/* Photo panel */}
        <div className="hero-parallax-photo relative mx-auto flex h-[420px] w-full max-w-xl items-end justify-center sm:h-[500px] lg:h-[560px] lg:max-w-none">
          <div className="hero-shape absolute inset-y-0 right-0 w-[85%] rounded-bl-[120px] bg-navy lg:w-[80%]" />
          <div className="hero-blob absolute bottom-6 left-2 h-[85%] w-[75%] rounded-full bg-navy-light/70 sm:left-6" />

          <div className="hero-badge absolute right-6 top-10 hidden text-right text-white sm:block">
            <p className="hero-float font-script text-4xl leading-tight sm:text-5xl">
              {hero.badgeText.split(" ").map((w) => (
                <span key={w} className="block">
                  {w}
                </span>
              ))}
            </p>
            <span className="ml-auto mt-2 block h-0.5 w-40 -rotate-6 rounded bg-peach-dark" />
          </div>
          <BadgeIcon
            className="hero-float absolute bottom-16 right-8 hidden h-20 w-20 text-white/40 sm:block"
            strokeWidth={1.5}
          />

          {photoOk ? (
            <img
              src={profile.photo}
              alt={profile.name}
              onError={() => setPhotoOk(false)}
              className="hero-photo relative z-10 h-full max-h-full w-auto object-contain object-bottom drop-shadow-2xl"
            />
          ) : (
            <div className="hero-photo relative z-10 mb-10 flex h-56 w-56 items-center justify-center rounded-full bg-peach font-serif text-7xl font-semibold italic text-navy shadow-2xl">
              {profile.initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
