<script>
  import Mark from './Mark.svelte'
  import Home from './pages/Home.svelte'
  import Download from './pages/Download.svelte'
  import Docs from './pages/Docs.svelte'
  import Privacy from './pages/Privacy.svelte'
  import { UI_LANGS, isRtl, t } from './i18n.js'
  import { Menu, X } from '@lucide/svelte'

  const COMMERCIAL = 'https://fluxpeer.com'

  let lang = $state(localStorage.getItem('fp_lang') || 'en')
  let route = $state(location.hash.replace(/^#/, '') || '/')
  let menuOpen = $state(false)

  $effect(() => {
    localStorage.setItem('fp_lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr'
  })

  const onHash = () => {
    route = location.hash.replace(/^#/, '') || '/'
    menuOpen = false
  }

  const tr = (k) => t(lang, k)
  const section = $derived(route.split('/')[1] || 'home')
</script>

<svelte:window on:hashchange={onHash} />

<div class="min-h-screen flex flex-col">
  <!-- Nav -->
  <header class="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
    <nav class="mx-auto max-w-6xl px-5 h-14 flex items-center gap-4">
      <a href="#/" class="flex items-center gap-2.5 font-semibold text-lg">
        <Mark size={26} />
        fluxpeer
      </a>
      <div class="hidden md:flex items-center gap-6 text-sm text-muted ml-2">
        <a href="#/docs" class:text-fg={section === 'docs'} class="hover:text-fg">{tr('nav.docs')}</a>
        <a href="#/download" class:text-fg={section === 'download'} class="hover:text-fg">{tr('nav.download')}</a>
        <a href="#/privacy" class:text-fg={section === 'privacy'} class="hover:text-fg">{tr('nav.privacy')}</a>
      </div>
      <div class="flex-1"></div>
      <select bind:value={lang} class="bg-surface border border-line rounded-md px-2 py-1 text-sm text-muted">
        {#each UI_LANGS as l}
          <option value={l.code}>{l.label}</option>
        {/each}
      </select>
      <a href="https://github.com/fluxpeer" target="_blank" rel="noreferrer" class="hidden md:inline-block text-sm text-muted hover:text-fg">
        {tr('nav.github')}
      </a>
      <a href={COMMERCIAL} class="hidden md:inline-block text-sm bg-brand hover:bg-brand-strong text-white rounded-md px-3 py-1.5 transition">
        {tr('nav.getApp')}
      </a>
      <button class="md:hidden text-muted hover:text-fg" onclick={() => (menuOpen = !menuOpen)} aria-label="Menu">
        {#if menuOpen}<X size={20} />{:else}<Menu size={20} />{/if}
      </button>
    </nav>
    {#if menuOpen}
      <div class="md:hidden border-t border-line bg-surface px-5 py-4 flex flex-col gap-3.5 text-sm">
        <a href="#/docs" class="text-muted hover:text-fg">{tr('nav.docs')}</a>
        <a href="#/download" class="text-muted hover:text-fg">{tr('nav.download')}</a>
        <a href="#/privacy" class="text-muted hover:text-fg">{tr('nav.privacy')}</a>
        <a href="https://github.com/fluxpeer" target="_blank" rel="noreferrer" class="text-muted hover:text-fg">{tr('nav.github')}</a>
        <a href={COMMERCIAL} class="bg-brand hover:bg-brand-strong text-white rounded-md px-3 py-2 text-center transition">{tr('nav.getApp')}</a>
      </div>
    {/if}
  </header>

  <main class="flex-1">
    {#if section === 'docs'}
      <Docs {lang} {route} />
    {:else if section === 'download'}
      <Download {lang} {COMMERCIAL} />
    {:else if section === 'privacy'}
      <Privacy {lang} />
    {:else}
      <Home {lang} {COMMERCIAL} />
    {/if}
  </main>

  <footer class="border-t border-line mt-10 bg-surface">
    <div class="mx-auto max-w-6xl px-5 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
      <div>
        <a href="#/" class="flex items-center gap-2.5 font-semibold text-lg"><Mark size={24} /> fluxpeer</a>
        <p class="mt-3 text-sm text-muted max-w-xs leading-relaxed">{tr('footer.tagline')}</p>
        <p class="mt-4 text-xs text-muted">{tr('footer.rights')}</p>
      </div>
      <div>
        <div class="text-sm font-semibold mb-3">{tr('footer.product')}</div>
        <ul class="space-y-2.5 text-sm text-muted">
          <li><a class="hover:text-fg" href="#/docs">{tr('nav.docs')}</a></li>
          <li><a class="hover:text-fg" href="#/download">{tr('nav.download')}</a></li>
          <li><a class="hover:text-fg" href="#/privacy">{tr('footer.privacy')}</a></li>
          <li><a class="hover:text-fg" href={COMMERCIAL}>{tr('footer.app')}</a></li>
        </ul>
      </div>
      <div>
        <div class="text-sm font-semibold mb-3">{tr('footer.openSrc')}</div>
        <ul class="space-y-2.5 text-sm text-muted">
          <li><a class="hover:text-fg" href="https://github.com/fluxpeer" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a class="hover:text-fg" href="#/docs/dev/contrib">{tr('docs.dev.contrib')}</a></li>
          <li><a class="hover:text-fg" href="#/docs/dev/build">{tr('docs.dev.build')}</a></li>
        </ul>
      </div>
      <div>
        <div class="text-sm font-semibold mb-3">{tr('footer.ecosystem')}</div>
        <ul class="space-y-2.5 text-sm text-muted">
          <li><a class="hover:text-fg" href="https://openprx.dev" target="_blank" rel="noreferrer">openprx</a></li>
          <li><a class="hover:text-fg" href="https://ramflux.org" target="_blank" rel="noreferrer">ramflux</a></li>
          <li><a class="hover:text-fg" href={COMMERCIAL} target="_blank" rel="noreferrer">fluxpeer.com</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
