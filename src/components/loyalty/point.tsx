import { cn } from '../../lib/utils'

const HEART = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"

type Props = { size?: 'sm' | 'md'; className?: string }

export function Point({ size = 'md', className }: Props) {
  const px = size === 'sm' ? 16 : 24
  const t = px * 0.03125
  const s = px * 0.0625

  return (
    <div className={cn('relative shrink-0', className)} style={{ width: px, height: px }}>
      <div
        className="absolute rounded-full bg-loyalty-fg-dark"
        style={{ top: t, bottom: t, left: s, right: 0 }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-b from-amber-3 to-amber-5 overflow-hidden"
        style={{ top: t, bottom: t, left: 0, right: s }}
      >
        <div
          className="absolute overflow-hidden"
          style={{
            left: '20%', right: '20%',
            top: 'calc(50% + 0.5px)',
            transform: 'translateY(-50%)',
            aspectRatio: '1 / 1',
          }}
        >
          <svg viewBox="0 0 24 24" className="size-full fill-loyalty-fg-dark" aria-hidden="true">
            <path d={HEART} />
          </svg>
        </div>
      </div>
    </div>
  )
}
