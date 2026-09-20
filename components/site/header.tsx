"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand, CampaignLink } from "@/components/site/brand";
import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    navigation.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 900px)");
    function handleResize() { if (desktop.matches) setOpen(false); }
    if (open) document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Brand />
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} aria-current={active === item.href.slice(1) ? "location" : undefined} className={cn("nav-link", active === item.href.slice(1) && "is-active")}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <CampaignLink className="header-consult">Get Free Consult</CampaignLink>
          <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={cn("mobile-menu", open && "is-open")} inert={!open}>
        <div className="mobile-menu-content">
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => { setOpen(false); setActive(item.href.slice(1)); }}>
                <span className="mobile-nav-number">0{index + 1}</span>{item.label}<ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </nav>
          <CampaignLink>Get Free Consult</CampaignLink>
          <p className="micro">INDEPENDENT THINKING. INDORE ROOTS.</p>
        </div>
      </div>
    </header>
  );
}
