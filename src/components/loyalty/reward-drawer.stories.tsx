import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { RewardDrawer } from './reward-drawer'
import { Button } from '../ui/button'

const meta = {
  title: 'Loyalty/RewardDrawer',
  component: RewardDrawer,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RewardDrawer>

export default meta
type Story = StoryObj<typeof meta>

const reward = { name: 'Free coffee', description: 'Any size, any drink.', points_cost: 500 }

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open reward drawer</Button>
        <RewardDrawer
          reward={reward}
          customerPoints={750}
          open={open}
          onOpenChange={setOpen}
          onConfirm={() => new Promise(res => setTimeout(res, 1000))}
        />
      </>
    )
  },
}

export const Locked: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open (not enough pts)</Button>
        <RewardDrawer
          reward={reward}
          customerPoints={200}
          open={open}
          onOpenChange={setOpen}
          onConfirm={() => new Promise(res => setTimeout(res, 1000))}
        />
      </>
    )
  },
}
