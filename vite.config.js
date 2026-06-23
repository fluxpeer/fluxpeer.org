import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// Tailwind v4 emits modern range media queries — `@media (width>=48rem)`. Browsers
// older than Chrome 104 / Safari 16.4 / Firefox 102, and many in-app webviews,
// silently ignore range syntax, dropping EVERY responsive (sm:/md:/lg:) rule — so
// the site collapses to mobile-only with no desktop layout. Rewrite them to the
// universally-supported `(min-width: …)` / `(max-width: …)` form, in dev and build.
const fixRangeMedia = (css) =>
  css
    .replace(/\(\s*width\s*>=\s*([\d.]+\w+)\s*\)/g, '(min-width:$1)')
    .replace(/\(\s*width\s*<=\s*([\d.]+\w+)\s*\)/g, '(max-width:$1)')

function minWidthMedia() {
  return {
    name: 'min-width-media',
    enforce: 'post',
    transform(code, id) {
      if (id.includes('.css') && code.includes('(width')) {
        return { code: fixRangeMedia(code), map: null }
      }
    },
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.fileName?.endsWith('.css') && typeof file.source === 'string' && file.source.includes('(width')) {
          file.source = fixRangeMedia(file.source)
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [svelte(), tailwindcss(), minWidthMedia()],
  server: { port: 5180 },
})
