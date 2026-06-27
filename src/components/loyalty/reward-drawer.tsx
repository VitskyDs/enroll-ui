import { useState } from 'react'
import { Check, Gift } from 'lucide-react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Point } from './point'

export interface RewardDrawerItem {
  name: string
  description?: string | null
  image_url?: string | null
  points_cost: number
}

interface RewardDrawerProps {
  reward: RewardDrawerItem | null
  customerPoints: number
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => Promise<void>
  labels?: {
    cancel?: string
    confirm?: string
    confirming?: string
    successTitle?: string
    successBody?: (name: string) => string
    youHave?: (pts: number) => string
    afterRedemption?: (pts: number) => string
    pointsCost?: (pts: number) => string
  }
}

export function RewardDrawer({
  reward,
  customerPoints,
  open,
  onOpenChange,
  onConfirm,
  labels = {},
}: RewardDrawerProps) {
  const [confirming, setConfirming] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const l = {
    cancel: 'Cancel',
    confirm: 'Confirm redemption',
    confirming: 'Confirming…',
    successTitle: 'Redeemed!',
    successBody: (name: string) => `${name} has been added to your account.`,
    youHave: (pts: number) => `You have ${pts} pts`,
    afterRedemption: (pts: number) => `After redemption: ${pts} pts`,
    pointsCost: (pts: number) => `${pts} pts`,
    ...labels,
  }

  if (!reward) return null

  const balanceAfter = customerPoints - reward.points_cost

  async function handleConfirm() {
    setConfirming(true)
    try {
      await onConfirm()
      setSucceeded(true)
      setTimeout(() => {
        setSucceeded(false)
        onOpenChange(false)
      }, 1500)
    } finally {
      setConfirming(false)
    }
  }

  function handleOpenChange(o: boolean) {
    if (!confirming) {
      if (!o) setSucceeded(false)
      onOpenChange(o)
    }
  }

  return (
    <DrawerPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30" />
        <DrawerPrimitive.Content className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background">
          <DrawerPrimitive.Title className="sr-only">{reward.name}</DrawerPrimitive.Title>
          <div className="flex justify-center pt-4">
            <div className="h-2 w-[100px] rounded-full bg-muted" />
          </div>

          {succeeded ? (
            <div className="flex flex-col items-center justify-center gap-3 px-4 py-12">
              <div className="size-14 rounded-full bg-green-2 flex items-center justify-center">
                <Check className="size-7 text-green-10" strokeWidth={2.5} />
              </div>
              <p className="text-xl font-bold font-heading leading-7 text-foreground">{l.successTitle}</p>
              <p className="text-sm leading-5 text-muted-foreground text-center">{l.successBody(reward.name)}</p>
            </div>
          ) : (
            <>
              <div className="p-4 pb-0">
                <div className="w-full aspect-[361/200] rounded-[26px] overflow-hidden bg-muted flex items-center justify-center">
                  {reward.image_url
                    ? <img src={reward.image_url} alt={reward.name} className="size-full object-cover" />
                    : <Gift className="size-12 text-muted-foreground" strokeWidth={1.5} />
                  }
                </div>
              </div>
              <div className="flex flex-col gap-3 px-4 pt-4">
                <p className="text-2xl font-bold font-heading leading-8 text-foreground">{reward.name}</p>
                {reward.description && (
                  <p className="text-base leading-6 text-muted-foreground">{reward.description}</p>
                )}
                <div className="w-fit">
                  <Badge variant="default" leading={<Point size="sm" />}>
                    {l.pointsCost(reward.points_cost)}
                  </Badge>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm leading-5 text-muted-foreground">{l.youHave(customerPoints)}</p>
                  <p className="text-sm leading-5 text-muted-foreground">{l.afterRedemption(balanceAfter)}</p>
                </div>
              </div>
              <div className="flex gap-2 p-4">
                <DrawerPrimitive.Close asChild>
                  <Button variant="outline" className="flex-1" disabled={confirming}>{l.cancel}</Button>
                </DrawerPrimitive.Close>
                <Button className="flex-1" onClick={handleConfirm} disabled={confirming}>
                  {confirming ? l.confirming : l.confirm}
                </Button>
              </div>
            </>
          )}
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  )
}
