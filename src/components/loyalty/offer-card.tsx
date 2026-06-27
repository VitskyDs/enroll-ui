import { Point } from './point'

export interface OfferCardItem {
  title: string
  description?: string | null
  deadlineLabel?: string | null
  points_bonus: number
}

export function OfferCard({ offer }: { offer: OfferCardItem }) {
  return (
    <div className="bg-background border border-border rounded-xl p-4 flex gap-3 items-start">
      <div className="flex-1 min-w-0">
        <p className="text-base font-bold font-heading leading-6 text-foreground">{offer.title}</p>
        {offer.description && (
          <p className="text-sm leading-5 text-muted-foreground mt-0.5">{offer.description}</p>
        )}
        {offer.deadlineLabel && (
          <p className="text-xs text-muted-foreground mt-1">{offer.deadlineLabel}</p>
        )}
      </div>
      {offer.points_bonus > 0 && (
        <div className="flex items-center gap-1 shrink-0 pt-0.5">
          <span className="text-base font-bold font-heading text-foreground">+{offer.points_bonus}</span>
          <Point size="sm" />
        </div>
      )}
    </div>
  )
}
