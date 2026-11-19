import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span
            className={cn(
              "hidden h-px w-8 sm:block",
              tone === "dark" ? "bg-gold/50" : "bg-gold/60",
              align === "center" && "order-1",
            )}
            aria-hidden
          />
          <p
            className={cn(
              "text-[0.7rem] font-semibold tracking-[0.28em] uppercase",
              tone === "dark" ? "text-gold-soft" : "text-gold",
              align === "center" && "order-2",
            )}
          >
            {eyebrow}
          </p>
          <span
            className={cn(
              "hidden h-px w-8 sm:block",
              tone === "dark" ? "bg-gold/50" : "bg-gold/60",
              align === "center" ? "order-3" : "hidden",
            )}
            aria-hidden
          />
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight sm:text-4xl md:text-5xl",
          tone === "dark" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
