import type { Meta, StoryObj } from '@storybook/react-vite'
import { ReferralCard } from './referral-card'

const meta = {
  title: 'Marketing/ReferralCard',
  component: ReferralCard,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof ReferralCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    referrerPoints: 100,
    refereePoints: 50,
    businessName: 'Blue Bottle Coffee',
    onReferClick: () => {},
    storageKey: 'storybook-referral-dismissed',
  },
  render: (args) => <div className="max-w-sm"><ReferralCard {...args} /></div>,
}

export const WithAvatars: Story = {
  args: {
    referrerPoints: 200,
    refereePoints: 100,
    businessName: 'Blue Bottle Coffee',
    avatarUrls: [
      'https://i.pravatar.cc/72?img=1',
      'https://i.pravatar.cc/72?img=2',
      'https://i.pravatar.cc/72?img=3',
    ],
    onReferClick: () => {},
    storageKey: 'storybook-referral-avatars-dismissed',
  },
  render: (args) => <div className="max-w-sm"><ReferralCard {...args} /></div>,
}
