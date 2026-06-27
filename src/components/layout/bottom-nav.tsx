import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface BottomNavTab {
  key: string
  label: string
  icon: LucideIcon
  isActive: boolean
}

interface BottomNavProps {
  tabs: BottomNavTab[]
  onTabClick: (key: string) => void
}

export function BottomNav({ tabs, onTabClick }: BottomNavProps) {
  return (
    <nav
      className="bg-background border-t border-border flex items-start justify-between px-6 pt-4"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      {tabs.map(({ key, label, icon: Icon, isActive }) => (
        <button
          key={key}
          onClick={() => onTabClick(key)}
          className="flex flex-col items-center gap-1 w-12"
        >
          <span className={cn(
            'flex items-center justify-center size-12 rounded-full transition-colors duration-200',
            isActive && 'bg-navbar-bg-selected',
          )}>
            <Icon
              className={cn(
                'size-6 transition-colors duration-200',
                isActive ? 'text-primary' : 'text-navbar-fg-default',
              )}
              strokeWidth={2}
            />
          </span>
          <span className={cn(
            'text-[10px] font-medium font-heading leading-3 transition-colors duration-200',
            isActive ? 'text-primary' : 'text-navbar-fg-default',
          )}>
            {label}
          </span>
        </button>
      ))}
    </nav>
  )
}
