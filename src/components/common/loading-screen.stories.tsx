import type { Meta, StoryObj } from '@storybook/react-vite'
import { LoadingScreen } from './loading-screen'

const meta = {
  title: 'Common/LoadingScreen',
  component: LoadingScreen,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof LoadingScreen>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="h-64 bg-background rounded-xl border border-border overflow-hidden">
      <LoadingScreen />
    </div>
  ),
}
