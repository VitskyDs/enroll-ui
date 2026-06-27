import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
  render: (args) => <div className="w-72"><Input {...args} /></div>,
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input defaultValue="Filled value" />
      <Input aria-invalid="true" defaultValue="Invalid value" />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <label className="text-sm font-medium text-foreground" htmlFor="email">
        Email address
      </label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}
