import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/utils'

interface StepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
  decrementLabel?: string
  incrementLabel?: string
}

export function Stepper({
  value,
  onChange,
  min = 1,
  max,
  className,
  decrementLabel = 'Decrease',
  incrementLabel = 'Increase',
}: StepperProps) {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 p-1 rounded-[10px] border border-border bg-background',
      className,
    )}>
      <button
        onClick={() => { if (value > min) onChange(value - 1) }}
        disabled={value <= min}
        className="size-9 flex items-center justify-center rounded-lg text-foreground disabled:opacity-40 active:opacity-70 transition-opacity"
        aria-label={decrementLabel}
      >
        <Minus className="size-4" strokeWidth={2} />
      </button>
      <span className="w-6 text-center text-base leading-6 text-foreground tabular-nums">
        {value}
      </span>
      <button
        onClick={() => { if (max == null || value < max) onChange(value + 1) }}
        disabled={max != null && value >= max}
        className="size-9 flex items-center justify-center rounded-lg text-foreground disabled:opacity-40 active:opacity-70 transition-opacity"
        aria-label={incrementLabel}
      >
        <Plus className="size-4" strokeWidth={2} />
      </button>
    </div>
  )
}
