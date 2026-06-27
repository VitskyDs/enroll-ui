import { Gift, Lock } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Point } from './point'
import { cn } from '../../lib/utils'

export interface RewardCardItem {
  name: string
  points_cost: number
  image_url?: string | null
}

interface RewardCardProps {
  reward: RewardCardItem
  customerPoints: number
  onRedeem: (reward: RewardCardItem) => void
  redeemLabel?: string
  needMoreLabel?: (delta: number) => string
}

export function RewardCard({
  reward,
  customerPoints,
  onRedeem,
  redeemLabel = 'Redeem',
  needMoreLabel = (delta) => `${delta} more pts`,
}: RewardCardProps) {
  const unlocked = customerPoints >= reward.points_cost
  const delta = reward.points_cost - customerPoints

  return (
    <div className={cn(
      'flex gap-3 items-center p-4 rounded-xl border border-border',
      unlocked ? 'bg-background' : 'bg-muted',
    )}>
      <div className="relative shrink-0 size-11 rounded-xl overflow-hidden bg-muted">
        {reward.image_url ? (
          <img
            src={reward.image_url}
            alt={reward.name}
            className={cn('size-full object-cover', !unlocked && 'opacity-40')}
          />
        ) : (
          <div className={cn('size-full flex items-center justify-center', !unlocked && 'opacity-40')}>
            <Gift className="size-5 text-muted-foreground" strokeWidth={1.5} />
          </div>
        )}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="size-3.5 text-muted-foreground" strokeWidth={2} />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <p className={cn(
          'text-base font-semibold font-heading leading-6 truncate',
          unlocked ? 'text-foreground' : 'text-muted-foreground',
        )}>
          {reward.name}
        </p>
        <div className="w-fit">
          <Badge
            variant={unlocked ? 'loyalty' : 'secondary'}
            leading={<Point size="sm" />}
          >
            {reward.points_cost}
          </Badge>
        </div>
      </div>

      {unlocked ? (
        <Button size="sm" onClick={() => onRedeem(reward)}>
          {redeemLabel}
        </Button>
      ) : (
        <p className="shrink-0 text-xs font-medium font-heading leading-4 text-muted-foreground whitespace-nowrap">
          {needMoreLabel(delta)}
        </p>
      )}
    </div>
  )
}
