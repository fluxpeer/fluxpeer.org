<script>
  import { t } from '../i18n.js'
  import { Network, Waypoints, Server, Terminal, Router, Cpu, Boxes, ArrowRight, Gauge, MonitorSmartphone, Split, Shuffle } from '@lucide/svelte'
  let { lang, COMMERCIAL } = $props()
  const tr = (k) => t(lang, k)

  const why = [
    { icon: Network, t: 'why.mesh.t', d: 'why.mesh.d' },
    { icon: Waypoints, t: 'why.anticensor.t', d: 'why.anticensor.d' },
    { icon: Server, t: 'why.selfhost.t', d: 'why.selfhost.d' },
  ]
  const caps = [
    { icon: Waypoints, t: 'caps.nat.t', d: 'caps.nat.d' },
    { icon: Gauge, t: 'caps.perf.t', d: 'caps.perf.d' },
    { icon: MonitorSmartphone, t: 'caps.cross.t', d: 'caps.cross.d' },
    { icon: Split, t: 'caps.exit.t', d: 'caps.exit.d' },
    { icon: Shuffle, t: 'caps.relay.t', d: 'caps.relay.d' },
    { icon: Network, t: 'caps.subnet.t', d: 'caps.subnet.d' },
  ]
  const stack = [
    { icon: Terminal, k: 'stack.cli' },
    { icon: Router, k: 'stack.openwrt' },
    { icon: Cpu, k: 'stack.engine' },
    { icon: Boxes, k: 'stack.sdk' },
  ]
</script>

<!-- Hero -->
<section class="hero-glow">
  <div class="mx-auto max-w-6xl px-5 pt-20 pb-16 text-center">
    <span class="inline-block text-xs text-accent border border-line rounded-full px-3 py-1 mb-7">{tr('hero.badge')}</span>
    <p class="max-w-2xl mx-auto text-[21px] text-muted leading-relaxed">{tr('hero.subtitle')}</p>
    <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
      <a href="#/download" class="bg-brand hover:bg-brand-strong text-white rounded-lg px-5 py-2.5 font-medium transition">{tr('hero.ctaDownload')}</a>
      <a href="#/docs" class="border border-line hover:bg-surface rounded-lg px-5 py-2.5 transition">{tr('hero.ctaDocs')}</a>
      <a href={COMMERCIAL} class="text-muted hover:text-fg rounded-lg px-3 py-2.5 inline-flex items-center gap-1.5">{tr('hero.ctaApp')} <ArrowRight size={15} /></a>
    </div>
  </div>
</section>

<!-- Why -->
<section class="mx-auto max-w-6xl px-5 py-16">
  <h2 class="text-2xl font-semibold mb-8">{tr('why.title')}</h2>
  <div class="grid md:grid-cols-3 gap-5">
    {#each why as f}
      <div class="rounded-xl border border-line bg-surface p-6">
        <f.icon size={22} class="text-brand-strong" />
        <h3 class="mt-4 font-semibold">{tr(f.t)}</h3>
        <p class="mt-2 text-sm text-muted leading-relaxed">{tr(f.d)}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Capabilities -->
<section class="mx-auto max-w-6xl px-5 py-16 border-t border-line">
  <h2 class="text-2xl font-semibold mb-8">{tr('caps.title')}</h2>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each caps as c}
      <div class="rounded-xl border border-line bg-surface p-5">
        <c.icon size={20} class="text-accent" />
        <h3 class="mt-3 font-semibold text-[15px]">{tr(c.t)}</h3>
        <p class="mt-1.5 text-sm text-muted leading-relaxed">{tr(c.d)}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Open stack -->
<section class="mx-auto max-w-6xl px-5 py-16 border-t border-line">
  <h2 class="text-2xl font-semibold">{tr('stack.title')}</h2>
  <p class="mt-2 text-muted">{tr('stack.desc')}</p>
  <div class="mt-8 grid sm:grid-cols-2 gap-4">
    {#each stack as s}
      <div class="flex items-start gap-3 rounded-lg border border-line bg-surface p-4">
        <s.icon size={20} class="text-accent mt-0.5 shrink-0" />
        <span class="text-sm">{tr(s.k)}</span>
      </div>
    {/each}
  </div>
</section>

<!-- Open vs managed -->
<section class="mx-auto max-w-6xl px-5 py-16 border-t border-line">
  <h2 class="text-2xl font-semibold">{tr('open.title')}</h2>
  <div class="mt-8 grid md:grid-cols-2 gap-5">
    <div class="rounded-xl border border-ok/40 bg-surface p-6">
      <div class="text-ok font-medium text-sm">{tr('open.openLabel')}</div>
      <p class="mt-3">{tr('open.openItems')}</p>
    </div>
    <div class="rounded-xl border border-line bg-surface p-6">
      <div class="text-accent font-medium text-sm">{tr('open.closedLabel')}</div>
      <p class="mt-3 text-muted">{tr('open.closedItems')}</p>
    </div>
  </div>
</section>
