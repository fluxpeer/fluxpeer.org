<script>
  import { t } from '../i18n.js'
  import { ShieldCheck, Server, CreditCard, Smartphone, Mail } from '@lucide/svelte'
  let { lang } = $props()
  const tr = (k) => t(lang, k)

  const sections = [
    { icon: ShieldCheck, t: 'privacy.nologs.t', d: 'privacy.nologs.d' },
    { icon: Server, t: 'privacy.selfhost.t', d: 'privacy.selfhost.d' },
    { icon: CreditCard, t: 'privacy.hosted.t', d: 'privacy.hosted.d', href: 'https://fluxpeer.com/privacy', link: 'privacy.hosted.link' },
    { icon: Smartphone, t: 'privacy.permissions.t', d: 'privacy.permissions.d' },
    { icon: Mail, t: 'privacy.contact.t', d: 'privacy.contact.d', href: 'mailto:security@fluxpeer.org', linkText: 'security@fluxpeer.org' },
  ]
</script>

<section class="mx-auto max-w-4xl px-5 py-16">
  <h1 class="text-3xl font-bold">{tr('privacy.title')}</h1>
  <p class="mt-3 text-muted leading-relaxed">{tr('privacy.subtitle')}</p>

  <div class="mt-8 space-y-4">
    {#each sections as section}
      <div class="rounded-xl border border-line bg-surface p-6 flex items-start gap-4">
        <section.icon size={22} class="text-brand-strong mt-1 shrink-0" />
        <div>
          <h2 class="font-semibold">{tr(section.t)}</h2>
          <p class="mt-2 text-sm text-muted leading-relaxed">{tr(section.d)}</p>
          {#if section.href}
            <a href={section.href} target="_blank" rel="noreferrer" class="mt-3 inline-block text-sm text-brand-strong hover:text-accent">
              {section.link ? tr(section.link) : section.linkText}
            </a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
