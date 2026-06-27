import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'
import { Badge } from './badge'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A short description of the card contents.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">Body content goes here.</p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
}

export const LoyaltyProgram: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Coffee rewards</CardTitle>
          <Badge variant="loyalty" leading={<span>★</span>}>Gold</Badge>
        </div>
        <CardDescription>Earn 1 point per $1 spent</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Points balance</span>
            <span className="font-medium">1,240 pts</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Next reward at</span>
            <span className="font-medium">1,500 pts</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="sm">Redeem points</Button>
      </CardFooter>
    </Card>
  ),
}
