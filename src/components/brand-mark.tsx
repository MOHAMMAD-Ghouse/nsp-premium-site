import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const text = tone === "dark" ? "text-cream" : "text-ink";
  const sub = tone === "dark" ? "text-gold-soft" : "text-gold";

  return (
    <a
      href="#home"
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        className,
      )}
      aria-label={`${BUSINESS.name} home`}
    >
      <span
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gold/60 bg-ink text-[0.7rem] font-display tracking-[0.12em] text-gold"
        aria-hidden
      >
        NSP
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-display text-[0.95rem] font-semibold tracking-[0.14em] sm:text-[1.05rem]",
            text,
          )}
        >
          NEW STEAM &amp; PRESS
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-medium tracking-[0.35em] uppercase",
            sub,
          )}
        >
          Co. Ltd · Stoneleigh
        </span>
      </span>
    </a>
  );
}
