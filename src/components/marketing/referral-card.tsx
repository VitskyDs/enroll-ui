import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '../ui/button'

interface ReferralCardProps {
  referrerPoints: number
  refereePoints: number
  businessName: string
  avatarUrls?: string[]
  storageKey?: string
  onReferClick: () => void
  labels?: {
    headline?: (pts: number) => string
    subtitle?: (opts: { business: string; referrer: number; referee: number }) => string
    cta?: string
    dismiss?: string
  }
}

export function ReferralCard({
  referrerPoints,
  refereePoints,
  businessName,
  avatarUrls = [],
  storageKey = 'referral-dismissed',
  onReferClick,
  labels = {},
}: ReferralCardProps) {
  const [dismissed, setDismissed] = useState(() =>
    typeof localStorage !== 'undefined' && localStorage.getItem(storageKey) === '1',
  )

  const l = {
    headline: (pts: number) => `Earn ${pts} points`,
    subtitle: ({ business, referrer, referee }: { business: string; referrer: number; referee: number }) =>
      `Refer a friend to ${business}. You get ${referrer} pts, they get ${referee} pts.`,
    cta: 'Refer a friend',
    dismiss: 'Dismiss',
    ...labels,
  }

  if (dismissed) return null

  function dismiss() {
    if (typeof localStorage !== 'undefined') localStorage.setItem(storageKey, '1')
    setDismissed(true)
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col gap-6 py-6 w-full">
      <div className="flex flex-col gap-1.5 items-center text-center px-6">
        <p className="text-3xl font-bold font-heading leading-9 text-foreground">
          {l.headline(referrerPoints)}
        </p>
        <p className="text-lg leading-[27px] text-muted-foreground">
          {l.subtitle({ business: businessName, referrer: referrerPoints, referee: refereePoints })}
        </p>
      </div>

      <div className="flex items-center justify-center px-6">
        <div className="flex -space-x-4">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="size-[72px] rounded-full border-2 border-card shrink-0 overflow-hidden bg-muted"
            >
              {avatarUrls[i] && (
                <img src={avatarUrls[i]} alt="" className="size-full object-cover" />
              )}
            </div>
          ))}
          <div className="size-[72px] rounded-full bg-background-primary-dark border-2 border-card flex items-center justify-center shrink-0">
            <Check className="size-7 text-primary-foreground" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6">
        <Button size="lg" className="w-full" onClick={onReferClick}>{l.cta}</Button>
        <Button size="lg" variant="ghost" className="w-full" onClick={dismiss}>{l.dismiss}</Button>
      </div>
    </div>
  )
}
