<script>
  import { t } from '../i18n.js'
  import { Terminal, Router, ArrowRight, GitFork, Smartphone, Monitor } from '@lucide/svelte'
  let { lang, COMMERCIAL } = $props()
  const tr = (k) => t(lang, k)

  const items = [
    { icon: Terminal, t: 'dl.cli.t', d: 'dl.cli.d', link: 'dl.cli.link', href: 'https://github.com/fluxpeer/fluxpeer' },
    { icon: Router, t: 'dl.openwrt.t', d: 'dl.openwrt.d', link: 'dl.openwrt.link', href: 'https://github.com/fluxpeer/fluxpeer-openwrt' },
    { icon: Smartphone, t: 'dl.mobile.t', d: 'dl.mobile.d', link: 'dl.mobile.link', href: 'https://github.com/fluxpeer/fluxpeer-app' },
    { icon: Monitor, t: 'dl.desktop.t', d: 'dl.desktop.d', link: 'dl.desktop.link', href: 'https://github.com/fluxpeer/fluxpeer-desktop' },
  ]
</script>

<section class="mx-auto max-w-4xl px-5 py-16">
  <h1 class="text-3xl font-bold">{tr('dl.title')}</h1>
  <p class="mt-2 text-muted">{tr('dl.subtitle')}</p>

  <div class="mt-8 space-y-4">
    {#each items as it}
      <div class="rounded-xl border border-line bg-surface p-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <it.icon size={24} class="text-brand-strong mt-1 shrink-0" />
        <div class="flex-1">
          <h3 class="font-semibold">{tr(it.t)}</h3>
          <p class="mt-1 text-sm text-muted">{tr(it.d)}</p>
          <a href={it.href} target="_blank" rel="noreferrer" class="mt-3 inline-flex items-center gap-1.5 text-sm text-brand-strong hover:text-accent">
            <GitFork size={15} /> {tr(it.link)}
          </a>
        </div>
        <a href={it.href} target="_blank" rel="noreferrer" class="text-xs text-warn border border-warn/40 rounded-full px-2.5 py-1 self-start sm:self-center hover:bg-warn/10">
          {tr('dl.viewSource')}
        </a>
      </div>
    {/each}
  </div>
  <p class="mt-4 text-sm text-muted">{tr('dl.binSoon')}</p>

  <!-- GUI → commercial -->
  <div class="mt-10 rounded-xl border border-line bg-surface2 p-6">
    <p class="text-muted">{tr('dl.guiNote')}</p>
    <a href={COMMERCIAL} class="mt-3 inline-flex items-center gap-1.5 text-brand-strong hover:text-accent font-medium">
      {tr('dl.guiCta')} <ArrowRight size={16} />
    </a>
  </div>
</section>
