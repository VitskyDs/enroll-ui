import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stepper } from './stepper'

const meta = {
  title: 'Common/Stepper',
  component: Stepper,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(1)
    return <Stepper value={value} onChange={setValue} min={1} max={10} />
  },
}

export const WithMax: Story = {
  render: () => {
    const [value, setValue] = useState(3)
    return (
      <div className="flex flex-col items-center gap-2">
        <Stepper value={value} onChange={setValue} min={1} max={5} />
        <p className="text-sm text-muted-foreground">Max: 5</p>
      </div>
    )
  },
}

export const AtMin: Story = {
  render: () => {
    const [value, setValue] = useState(1)
    return <Stepper value={value} onChange={setValue} min={1} />
  },
}
