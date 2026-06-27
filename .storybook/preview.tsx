import type { Preview, Decorator } from '@storybook/react-vite'
import { useEffect } from 'react'
import './preview.css'

const BRAND_COLORS: Record<string, string> = {
  zinc:   'oklch(0.556 0 0)',
  coral:  'oklch(0.514 0.222 16.935)',
  blue:   'oklch(0.546 0.245 264.376)',
  green:  'oklch(0.528 0.135 150.069)',
  violet: 'oklch(0.558 0.243 292.717)',
}

const withBrandColor: Decorator = (Story, context) => {
  const key = (context.globals.brandColor as string) ?? 'coral'
  useEffect(() => {
    document.documentElement.style.setProperty('--brand', BRAND_COLORS[key])
  }, [key])
  return <Story />
}

const withDarkMode: Decorator = (Story, context) => {
  const dark = context.globals.darkMode === 'dark'
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.setProperty(
      'background',
      dark ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)',
    )
  }, [dark])
  return <Story />
}

const preview: Preview = {
  globalTypes: {
    brandColor: {
      description: 'Brand color',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'zinc',   title: 'Zinc (neutral)' },
          { value: 'coral',  title: 'Coral' },
          { value: 'blue',   title: 'Blue' },
          { value: 'green',  title: 'Green' },
          { value: 'violet', title: 'Violet' },
        ],
        dynamicTitle: true,
      },
    },
    darkMode: {
      description: 'Color scheme',
      toolbar: {
        title: 'Scheme',
        icon: 'moon',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark',  title: 'Dark',  icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brandColor: 'zinc',
    darkMode: 'light',
  },
  decorators: [withBrandColor, withDarkMode],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
  },
}

export default preview
