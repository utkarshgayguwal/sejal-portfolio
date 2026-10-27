import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Runs `setup` inside a scoped gsap.context.
 * - Selectors inside setup are limited to `scopeRef`
 * - Everything is cleaned up on unmount
 * - Skipped entirely when the visitor prefers reduced motion
 */
export function useGsap(scopeRef, setup) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        setup();
      });
    }, scopeRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
