import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'

type Props = {
  points: number
  nextTierPoints: number
  onColor?: boolean
  label?: string
}

export function LoyaltyProgress({ points, nextTierPoints, onColor = false, label }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const target = nextTierPoints > 0 ? Math.min(points / nextTierPoints, 1) : 0
    const id = setTimeout(() => setProgress(target), 80)
    return () => clearTimeout(id)
  }, [points, nextTierPoints])

  const r = 24
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - progress)

  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className="relative size-[60px]">
        <svg viewBox="0 0 60 60" className="size-full -rotate-90">
          <circle
            cx="30" cy="30" r={r} fill="none" strokeWidth="4"
            className={onColor ? 'stroke-white/80' : 'stroke-[var(--loyalty-track-default)]'}
          />
          <circle
            cx="30" cy="30" r={r} fill="none"
            className={onColor ? 'stroke-loyalty-fg-dark' : 'stroke-primary'}
            strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 0.8s ease-out' }}
          />
        </svg>
        <div className="absolute size-[40px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-b from-amber-3 to-amber-5 overflow-hidden">
          <div
            className="absolute overflow-hidden"
            style={{ left: '20%', right: '20%', top: '50%', transform: 'translateY(-50%)', aspectRatio: '1/1' }}
          >
            <svg viewBox="0 0 24 24" className="size-full fill-loyalty-fg-dark" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
      {label != null && (
        <p className={cn(
          'text-xs font-medium font-heading leading-4 whitespace-nowrap',
          onColor ? 'text-primary-foreground' : 'text-foreground',
        )}>
          {label}
        </p>
      )}
    </div>
  )
}
