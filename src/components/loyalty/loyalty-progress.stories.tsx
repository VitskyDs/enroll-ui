import type { Meta, StoryObj } from '@storybook/react-vite'
import { LoyaltyProgress } from './loyalty-progress'

const meta = {
  title: 'Loyalty/LoyaltyProgress',
  component: LoyaltyProgress,
  parameters: { layout: 'centered' },
  argTypes: {
    points: { control: { type: 'range', min: 0, max: 1000, step: 10 } },
    nextTierPoints: { control: { type: 'range', min: 100, max: 1000, step: 100 } },
    onColor: { control: 'boolean' },
  },
} satisfies Meta<typeof LoyaltyProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { points: 320, nextTierPoints: 500, label: '180 pts until next tier' },
}

export const Full: Story = {
  args: { points: 500, nextTierPoints: 500, label: 'Top tier!' },
}

export const OnColor: Story = {
  args: { points: 320, nextTierPoints: 500, onColor: true, label: '180 pts until next tier' },
  render: (args) => (
    <div className="p-6 rounded-xl bg-primary flex items-center justify-center">
      <LoyaltyProgress {...args} />
    </div>
  ),
}

export const NoLabel: Story = {
  args: { points: 200, nextTierPoints: 500 },
}
