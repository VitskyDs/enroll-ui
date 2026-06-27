import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home, Send, ShoppingCart, Heart, User } from 'lucide-react'
import { BottomNav, type BottomNavTab } from './bottom-nav'

const meta = {
  title: 'Layout/BottomNav',
  component: BottomNav,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof BottomNav>

export default meta
type Story = StoryObj<typeof meta>

const TABS: Omit<BottomNavTab, 'isActive'>[] = [
  { key: 'home',    label: 'Home',    icon: Home },
  { key: 'refer',   label: 'Refer',   icon: Send },
  { key: 'order',   label: 'Order',   icon: ShoppingCart },
  { key: 'rewards', label: 'Rewards', icon: Heart },
  { key: 'profile', label: 'Profile', icon: User },
]

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('home')
    const tabs = TABS.map(t => ({ ...t, isActive: t.key === active }))
    return (
      <div className="w-full max-w-sm bg-background">
        <BottomNav tabs={tabs} onTabClick={setActive} />
      </div>
    )
  },
}

export const GuestTabs: Story = {
  render: () => {
    const [active, setActive] = useState('home')
    const guestTabs = TABS.filter(t => ['home', 'order', 'rewards'].includes(t.key))
      .map(t => ({ ...t, isActive: t.key === active }))
    return (
      <div className="w-full max-w-sm bg-background">
        <BottomNav tabs={guestTabs} onTabClick={setActive} />
      </div>
    )
  },
}
