import type { Meta, StoryObj } from '@storybook/react-vite'
import { PageHeader } from './page-header'
import { Button } from '../ui/button'

const meta = {
  title: 'Layout/PageHeader',
  component: PageHeader,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: 'Rewards', onBack: () => {} },
  render: (args) => <div className="w-full max-w-sm bg-background"><PageHeader {...args} /></div>,
}

export const WithRightSlot: Story = {
  args: {
    title: 'My profile',
    onBack: () => {},
    right: <Button variant="ghost" size="sm">Edit</Button>,
  },
  render: (args) => <div className="w-full max-w-sm bg-background"><PageHeader {...args} /></div>,
}
