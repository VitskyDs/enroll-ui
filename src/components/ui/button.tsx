import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-1.5 border border-transparent font-heading font-medium text-sm leading-5 whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-button-primary-bg-default text-primary-foreground drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] hover:bg-button-primary-bg-hover",
        secondary:
          "bg-secondary text-secondary-foreground drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] hover:opacity-80",
        outline:
          "border-border bg-button-outline-bg-default text-foreground shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:bg-button-outline-bg-hover",
        ghost:
          "text-foreground hover:bg-button-ghost-bg-hover",
        link:
          "text-primary underline underline-offset-4",
        destructive:
          "bg-destructive text-white/95 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] hover:opacity-90",
      },
      size: {
        default:
          "h-9 rounded-lg px-3 py-2 has-data-[icon=inline-end]:pe-2.5 has-data-[icon=inline-start]:ps-2.5",
        xs:
          "h-6 rounded-lg px-2 py-0.5 text-xs gap-1 [&_svg:not([class*='size-'])]:size-3",
        sm:
          "h-8 rounded-md px-2.5 py-1.5",
        lg:
          "h-11 rounded-lg px-3.5 py-2.5 text-base leading-6",
        icon:           "size-9 rounded-lg",
        "icon-xs":      "size-6 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":      "size-8 rounded-md",
        "icon-lg":      "size-11 rounded-lg",
        "icon-rounded": "size-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
