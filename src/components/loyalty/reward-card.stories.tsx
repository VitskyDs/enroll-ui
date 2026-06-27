import type { Meta, StoryObj } from '@storybook/react-vite'
import { RewardCard } from './reward-card'

const meta = {
  title: 'Loyalty/RewardCard',
  component: RewardCard,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof RewardCard>

export default meta
type Story = StoryObj<typeof meta>

const reward = { name: 'Free coffee', points_cost: 500 }

export const Unlocked: Story = {
  args: { reward, customerPoints: 750, onRedeem: () => {} },
  render: (args) => <div className="max-w-sm"><RewardCard {...args} /></div>,
}

export const Locked: Story = {
  args: { reward, customerPoints: 200, onRedeem: () => {} },
  render: (args) => <div className="max-w-sm"><RewardCard {...args} /></div>,
}

export const WithImage: Story = {
  args: {
    reward: { name: 'Free pastry', points_cost: 300, image_url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop' },
    customerPoints: 450,
    onRedeem: () => {},
  },
  render: (args) => <div className="max-w-sm"><RewardCard {...args} /></div>,
}

export const List: Story = {
  render: () => (
    <div className="max-w-sm flex flex-col gap-2">
      <RewardCard reward={{ name: 'Free coffee', points_cost: 300 }} customerPoints={750} onRedeem={() => {}} />
      <RewardCard reward={{ name: 'Free pastry', points_cost: 500 }} customerPoints={750} onRedeem={() => {}} />
      <RewardCard reward={{ name: '10% discount', points_cost: 1000 }} customerPoints={750} onRedeem={() => {}} />
    </div>
  ),
}
