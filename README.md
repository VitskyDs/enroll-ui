# @vitskyds/enroll-ui

Design system for the Enroll loyalty platform. Provides Tailwind tokens, base CSS, and React components shared across the consumer and admin apps.

## Installation

Add to your `.npmrc` first (GitHub Packages requires authentication):

```
@vitskyds:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Then install:

```bash
npm install @vitskyds/enroll-ui
```

## Setup

### 1. Import base styles

In your app's root CSS (e.g. `src/index.css`), import the base stylesheet **after** `@import "tailwindcss"`:

```css
@import "tailwindcss";
@import "@vitskyds/enroll-ui/styles";
```

This sets all CSS custom properties with defaults and registers the `@theme` tokens Tailwind needs.

### 2. Set brand color at runtime

After loading the business profile from Supabase, inject the brand color:

```ts
function applyBrandColor(hexColor: string) {
  document.documentElement.style.setProperty('--brand', hexColor);
}

// Example — call this after your auth/data load:
const { data: program } = await supabase
  .from('loyalty_programs')
  .select('brand_color')
  .single();

if (program?.brand_color) {
  applyBrandColor(program.brand_color);
}
```

The `--brand` variable drives all brand-dependent tokens (`--primary`, `--accent`, button colors, navbar tints, etc.). Setting it on `:root` updates the entire UI immediately.

### 3. Per-app color overrides

To set a different default brand color per app (e.g. admin vs consumer), override `--brand` in your app's own CSS before importing the base sheet, or override in your root component on mount:

```css
/* admin/src/index.css */
@import "tailwindcss";

:root {
  --brand: oklch(0.4 0.15 250); /* admin default — blue-ish */
}

@import "@vitskyds/enroll-ui/styles";
```

The Supabase-loaded value will override this once the business profile is fetched.

## Usage

```tsx
import { Button, Card, CardContent, Badge, Input } from '@vitskyds/enroll-ui';

export function MyComponent() {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col gap-3">
        <Badge variant="loyalty">Gold member</Badge>
        <Input placeholder="Search..." />
        <Button>Redeem points</Button>
      </CardContent>
    </Card>
  );
}
```

## Exports

| Import path | Contents |
|---|---|
| `@vitskyds/enroll-ui` | All React components + `cn` utility |
| `@vitskyds/enroll-ui/styles` | Base CSS (tokens, dark mode, base layer) |
| `@vitskyds/enroll-ui/tailwind` | Tailwind preset (for `@config`-based setups) |

## CSS variable contract

All components reference these CSS custom properties. Set them in `:root` or override per-component:

| Variable | Purpose | Default |
|---|---|---|
| `--brand` | **Primary theming hook** — set by host app | red-orange |
| `--background` / `--foreground` | Page background and text | white / near-black |
| `--primary` / `--primary-foreground` | Maps to `--brand` | — |
| `--secondary` / `--secondary-foreground` | Subdued fill | zinc-100 / zinc-900 |
| `--muted` / `--muted-foreground` | Muted backgrounds and text | zinc-50 / zinc-500 |
| `--accent` / `--accent-foreground` | Maps to `--brand` | — |
| `--destructive` / `--destructive-foreground` | Danger actions | red |
| `--border` / `--input` / `--ring` | Borders and focus rings | zinc-200 / zinc-200 / zinc-400 |
| `--radius` | Base border radius | 0.625rem |

## Publishing

A GitHub Actions workflow publishes to GitHub Packages on every push to `main`. The workflow uses `GITHUB_TOKEN` (no extra secret needed). Version bumps are done manually in `package.json` before merging.
