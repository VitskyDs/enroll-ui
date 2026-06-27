import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Drawer, DrawerTrigger, DrawerContent,
  DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from './drawer'
import { Button } from './button'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>
            This is a bottom sheet drawer. Drag down or click outside to dismiss.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-2 text-sm text-foreground">
          Drawer body content goes here.
        </div>
        <DrawerFooter>
          <Button>Confirm</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const RedeemReward: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Redeem reward</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Redeem free coffee</DrawerTitle>
          <DrawerDescription>
            This will use 500 points from your balance.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-2 flex flex-col gap-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current balance</span>
            <span className="font-medium">1,240 pts</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">After redemption</span>
            <span className="font-medium">740 pts</span>
          </div>
        </div>
        <DrawerFooter>
          <Button>Confirm redemption</Button>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
