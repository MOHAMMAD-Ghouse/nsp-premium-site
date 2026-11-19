import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-28 w-full rounded-xl border border-gold/25 bg-cream/80 px-3.5 py-3 text-base text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-gold focus-visible:ring-3 focus-visible:ring-gold/25 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
