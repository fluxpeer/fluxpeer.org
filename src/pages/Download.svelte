<script>
  import { t } from '../i18n.js'
  import { Terminal, Router, ArrowRight } from '@lucide/svelte'
  let { lang, COMMERCIAL } = $props()
  const tr = (k) => t(lang, k)

  const items = [
    { icon: Terminal, t: 'dl.cli.t', d: 'dl.cli.d' },
    { icon: Router, t: 'dl.openwrt.t', d: 'dl.openwrt.d' },
  ]
</script>

<section class="mx-auto max-w-4xl px-5 py-16">
  <h1 class="text-3xl font-bold">{tr('dl.title')}</h1>
  <p class="mt-2 text-muted">{tr('dl.subtitle')}</p>

  <div class="mt-8 space-y-4">
    {#each items as it}
      <div class="rounded-xl border border-line bg-surface p-6 flex items-start gap-4">
        <it.icon size={24} class="text-brand-strong mt-1 shrink-0" />
        <div class="flex-1">
          <h3 class="font-semibold">{tr(it.t)}</h3>
          <p class="mt-1 text-sm text-muted">{tr(it.d)}</p>
        </div>
        <span class="text-xs text-warn border border-warn/40 rounded-full px-2.5 py-1 self-center">{tr('dl.soon')}</span>
      </div>
    {/each}
  </div>

  <!-- GUI → commercial -->
  <div class="mt-10 rounded-xl border border-line bg-surface2 p-6">
    <p class="text-muted">{tr('dl.guiNote')}</p>
    <a href={COMMERCIAL} class="mt-3 inline-flex items-center gap-1.5 text-brand-strong hover:text-accent font-medium">
      {tr('dl.guiCta')} <ArrowRight size={16} />
    </a>
  </div>
</section>
