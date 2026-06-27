import type { Meta, StoryObj } from '@storybook/react-vite'
import { Point } from './point'

const meta = {
  title: 'Loyalty/Point',
  component: Point,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Point>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = { args: { size: 'md' } }
export const Small: Story = { args: { size: 'sm' } }

export const BothSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Point size="md" />
      <Point size="sm" />
    </div>
  ),
}
