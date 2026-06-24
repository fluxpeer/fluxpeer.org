<script>
  import { t } from '../i18n.js'
  import { docs } from '../docs.js'
  let { lang, route } = $props()
  const tr = (k) => t(lang, k)

  // group → [ {slug, key} ]. slug maps to the i18n title key + the hash route.
  const groups = [
    {
      label: 'docs.usage',
      items: [
        ['quickstart', 'docs.usage.quickstart'],
        ['install', 'docs.usage.install'],
        ['join', 'docs.usage.join'],
        ['cli', 'docs.usage.cli'],
        ['openwrt', 'docs.usage.openwrt'],
        ['exit', 'docs.usage.exit'],
        ['selfhost', 'docs.usage.selfhost'],
      ],
    },
    {
      label: 'docs.dev',
      items: [
        ['arch', 'docs.dev.arch'],
        ['protocol', 'docs.dev.protocol'],
        ['build', 'docs.dev.build'],
        ['api', 'docs.dev.api'],
        ['sdk', 'docs.dev.sdk'],
        ['contrib', 'docs.dev.contrib'],
      ],
    },
  ]

  // route = '/docs/<group>/<slug>'; default to the first usage page.
  const parts = $derived(route.split('/').filter(Boolean)) // ['docs','usage','quickstart']
  const slug = $derived(parts[2] || 'quickstart')
  const titleKey = $derived(
    groups.flatMap((g) => g.items).find(([s]) => s === slug)?.[1] || 'docs.usage.quickstart',
  )
  const content = $derived(docs[lang]?.[slug] || docs.en?.[slug] || tr('docs.placeholder'))
</script>

<div class="mx-auto max-w-6xl px-5 py-10 grid md:grid-cols-[15rem_1fr] gap-10">
  <!-- Sidebar -->
  <aside class="md:sticky md:top-20 self-start">
    <h1 class="text-lg font-semibold mb-4">{tr('docs.title')}</h1>
    {#each groups as g}
      <div class="mb-5">
        <div class="text-xs uppercase tracking-wide text-muted font-semibold mb-2">{tr(g.label)}</div>
        <ul class="space-y-1">
          {#each g.items as [s, k]}
            <li>
              <a
                href={`#/docs/${g.label === 'docs.usage' ? 'usage' : 'dev'}/${s}`}
                class="block rounded-md px-2.5 py-1.5 text-sm hover:bg-surface"
                class:bg-surface={slug === s}
                class:text-fg={slug === s}
                class:text-muted={slug !== s}
              >{tr(k)}</a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </aside>

  <!-- Content -->
  <article class="min-w-0">
    <h1 class="text-3xl font-bold">{tr(titleKey)}</h1>
    <div class="docs-content mt-6 rounded-xl border border-line bg-surface p-6 text-muted">
      {@html content}
    </div>
  </article>
</div>
