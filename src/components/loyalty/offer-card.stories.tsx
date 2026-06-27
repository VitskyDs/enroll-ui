import type { Meta, StoryObj } from '@storybook/react-vite'
import { OfferCard } from './offer-card'

const meta = {
  title: 'Loyalty/OfferCard',
  component: OfferCard,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof OfferCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithBonus: Story = {
  args: {
    offer: {
      title: 'Double points weekend',
      description: 'Earn 2× points on all purchases this weekend.',
      deadlineLabel: 'Ends Jun 30',
      points_bonus: 2,
    },
  },
  render: (args) => <div className="max-w-sm"><OfferCard {...args} /></div>,
}

export const NoBonus: Story = {
  args: {
    offer: {
      title: 'Birthday treat',
      description: 'Enjoy a free drink on your birthday month.',
      points_bonus: 0,
    },
  },
  render: (args) => <div className="max-w-sm"><OfferCard {...args} /></div>,
}

export const List: Story = {
  render: () => (
    <div className="max-w-sm flex flex-col gap-2">
      <OfferCard offer={{ title: 'Double points weekend', description: 'Earn 2× on all purchases.', deadlineLabel: 'Ends Jun 30', points_bonus: 2 }} />
      <OfferCard offer={{ title: 'Birthday treat', description: 'Free drink on your birthday.', points_bonus: 0 }} />
      <OfferCard offer={{ title: 'Refer a friend', description: 'Get 100 pts per referral.', points_bonus: 100 }} />
    </div>
  ),
}
