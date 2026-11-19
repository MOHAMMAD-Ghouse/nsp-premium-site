"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/20 bg-ink/95 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "bg-gradient-to-b from-ink/80 to-transparent py-4 sm:py-5",
      )}
    >
      <div className="container-wide flex items-center justify-between gap-3 px-4 sm:gap-4 sm:px-8 lg:px-12">
        <BrandMark tone="dark" className="min-w-0" />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.filter((l) => l.href !== "#book").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-2 text-[0.65rem] font-medium tracking-[0.14em] text-cream/80 uppercase transition hover:text-gold xl:px-3 xl:text-[0.72rem] xl:tracking-[0.16em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#book"
            className="inline-flex rounded-full bg-gold-gradient px-3.5 py-2 text-[0.65rem] font-semibold tracking-[0.14em] text-ink uppercase shadow-[0_8px_24px_rgba(198,160,70,0.35)] transition hover:brightness-110 sm:px-4 sm:text-sm"
          >
            Book Now
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-9 items-center justify-center rounded-full border border-gold/40 bg-ink/40 text-cream transition hover:bg-ink hover:text-gold lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="z-[60] border-l border-gold/25 bg-ink text-cream"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-left text-cream">
                  {BUSINESS.shortName}
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      const id = link.href.replace("#", "");
                      setOpen(false);
                      window.setTimeout(() => {
                        const target = document.getElementById(id);
                        if (!target) return;
                        const headerOffset = 88;
                        const top =
                          target.getBoundingClientRect().top +
                          window.scrollY -
                          headerOffset;
                        window.scrollTo({ top, behavior: "smooth" });
                        window.history.replaceState(null, "", link.href);
                      }, 260);
                    }}
                    className="rounded-lg px-3 py-3 text-sm tracking-[0.12em] text-cream/90 uppercase transition hover:bg-cream/5 hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={BUSINESS.phone.href}
                  className="mt-4 rounded-lg border border-gold/30 px-3 py-3 text-sm text-gold"
                >
                  Call {BUSINESS.phone.display}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
