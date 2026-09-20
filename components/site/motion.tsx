"use client";

import { useEffect } from "react";

export function RevealMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-ready");
        observer.observe(element);
      }
    });
    function revealAll() {
      if (reducedMotion.matches) {
        elements.forEach((element) => element.classList.remove("reveal-ready"));
        observer.disconnect();
      }
    }
    reducedMotion.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", revealAll);
      elements.forEach((element) => element.classList.remove("reveal-ready"));
    };
  }, []);
  return null;
}
