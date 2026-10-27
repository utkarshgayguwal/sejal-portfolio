import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { profile, navCta } from "../data.jsx";
import { useGsap, gsap } from "../hooks/useGsap.js";

export default function Navbar() {
  const ref = useRef(null);

  useGsap(ref, () => {
    gsap.from(ref.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    // Scroll progress bar
    gsap.to(".nav-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  });

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-peach/60 bg-cream/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-4">
          <span className="font-serif text-4xl font-semibold italic leading-none text-navy">
            {profile.initials}
          </span>
          <span className="hidden h-10 w-px bg-navy/70 sm:block" />
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold text-navy">
              {profile.name}
            </span>
            <span className="block text-sm text-navy/80">{profile.role}</span>
          </span>
        </a>

        <a href={navCta.href} className="btn-primary">
          {navCta.label} <ArrowRight size={16} />
        </a>
      </div>

      <span className="nav-progress absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-navy-light" />
    </header>
  );
}
