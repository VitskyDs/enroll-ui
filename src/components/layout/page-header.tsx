import type { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'

interface PageHeaderProps {
  title: string
  onBack: () => void
  right?: ReactNode
  backLabel?: string
}

export function PageHeader({ title, onBack, right, backLabel = 'Go back' }: PageHeaderProps) {
  return (
    <div className="relative flex items-center px-4 pt-10 pb-5">
      <button
        onClick={onBack}
        aria-label={backLabel}
        className="size-8 rounded-lg flex items-center justify-center shadow-xs shrink-0 text-foreground"
      >
        <ChevronLeft className="size-4 rtl:rotate-180" strokeWidth={2} />
      </button>

      <span className="absolute left-1/2 -translate-x-1/2 text-lg font-bold font-heading text-foreground pointer-events-none whitespace-nowrap">
        {title}
      </span>

      {right != null ? (
        <div className="ms-auto shrink-0 text-sm font-medium font-heading text-foreground">
          {right}
        </div>
      ) : (
        <div className="size-8 shrink-0" />
      )}
    </div>
  )
}
