import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tailwind/preset': 'src/tailwind/preset.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  clean: true,
  treeshake: true,
})
