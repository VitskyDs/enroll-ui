import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-heading font-medium text-xs leading-4 whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "h-6 rounded-full px-1.5 py-1 bg-primary text-primary-foreground",
        secondary:
          "h-6 rounded-full px-1.5 py-1 bg-secondary text-secondary-foreground",
        destructive:
          "h-6 rounded-full px-1.5 py-1 bg-destructive text-white/95",
        outline:
          "h-6 rounded-full px-1.5 py-1 border border-border text-foreground",
        loyalty:
          "h-6 rounded-md px-2 py-1 bg-background border border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {
    leading?: React.ReactNode
  }

function Badge({ className, variant, leading, children, ...props }: Props) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {leading != null && (
        <span className="shrink-0 flex items-center">{leading}</span>
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
