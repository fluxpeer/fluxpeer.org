// Tiny i18n for fluxpeer.org. A flat message table per language + `t(lang, key)`
// with English fallback. en/zh are fully translated and are the only languages
// shown in the UI switcher (see UI_LANGS); the rest are scaffolded (empty →
// fall back to en) and filled over time. fa/ar are RTL.

export const LANGS = [
  { code: 'en', label: 'English', rtl: false },
  { code: 'zh', label: '中文', rtl: false },
  { code: 'ru', label: 'Русский', rtl: false },
  { code: 'fa', label: 'فارسی', rtl: true },
  { code: 'ar', label: 'العربية', rtl: true },
  { code: 'es', label: 'Español', rtl: false },
  { code: 'pt', label: 'Português', rtl: false },
  { code: 'fr', label: 'Français', rtl: false },
  { code: 'de', label: 'Deutsch', rtl: false },
  { code: 'tr', label: 'Türkçe', rtl: false },
  { code: 'vi', label: 'Tiếng Việt', rtl: false },
  { code: 'id', label: 'Bahasa Indonesia', rtl: false },
]

// Languages offered in the UI language switcher: only the fully translated ones.
// The remaining LANGS entries are scaffolding and stay hidden until translated.
export const UI_LANGS = LANGS.filter((l) => l.code === 'en' || l.code === 'zh')

export const isRtl = (code) => LANGS.find((l) => l.code === code)?.rtl ?? false

const en = {
  'nav.docs': 'Docs',
  'nav.download': 'Download',
  'nav.ecosystem': 'Ecosystem',
  'nav.github': 'GitHub',
  'nav.getApp': 'Get the app',

  'hero.badge': 'Open-source mesh · WireGuard-compatible · Self-hostable',
  'hero.title': 'Your devices, one mesh —\nconnected anywhere.',
  'hero.subtitle':
    'Open-source mesh networking that links every device into one private network — direct peer-to-peer when it can, relayed automatically when it can’t. WireGuard-compatible, fast, and self-hostable end to end.',
  'hero.ctaDownload': 'Download the CLI',
  'hero.ctaDocs': 'Read the docs',
  'hero.ctaApp': 'Get the app',

  'why.title': 'Built for connectivity',
  'why.mesh.t': 'WireGuard-compatible mesh',
  'why.mesh.d':
    'Built on the Noise protocol with cryptokey routing — the same foundation as WireGuard. Import your existing wg.conf files, inspect every peer, and audit the cryptography. No bespoke, unproven protocol to take on faith.',
  'why.anticensor.t': 'Always finds a path',
  'why.anticensor.d':
    'Direct peer-to-peer wherever NAT traversal allows, with automatic fallback to TCP and encrypted relays. Links heal and re-route continuously, so your devices stay reachable across changing networks — no port forwarding, no static IPs.',
  'why.selfhost.t': 'Self-host the whole stack',
  'why.selfhost.d':
    'A single static Rust binary runs the control plane, the relay, and the node — with embedded SQLite and no external dependencies. Crypto is sharded across cores for real throughput. The entire network stays yours.',

  'caps.title': 'Networking capabilities',
  'caps.nat.t': 'NAT traversal',
  'caps.nat.d': 'Hole-punches through NATs and firewalls for direct peer-to-peer links — no port forwarding, no static IPs.',
  'caps.perf.t': 'Multi-core throughput',
  'caps.perf.d': 'Encryption is sharded across CPU cores, so throughput scales with the hardware instead of capping on one thread.',
  'caps.cross.t': 'Cross-platform',
  'caps.cross.d': 'Linux, macOS, Windows, iOS, Android, and OpenWrt — one engine, the same mesh everywhere.',
  'caps.exit.t': 'Exit nodes & split tunnel',
  'caps.exit.d': 'Send everything through an exit node, or route only the subnets you choose.',
  'caps.relay.t': 'Automatic relay fallback',
  'caps.relay.d': 'When a direct path is unavailable, traffic relays seamlessly — and upgrades back to direct the moment it can.',
  'caps.subnet.t': 'Subnet routing',
  'caps.subnet.d': 'Expose an entire LAN to the mesh from a single node or router.',

  'stack.title': 'The open stack',
  'stack.desc': 'BSD-3-Clause licensed core, written in Rust. Build it, audit it, and run it yourself.',
  'stack.cli': 'CLI — join, run, and manage your networks entirely from the terminal.',
  'stack.openwrt': 'OpenWrt — put a whole router on the mesh and bring an entire site online.',
  'stack.engine': 'Engine — control plane, relay, and node, all in one binary.',
  'stack.sdk': 'SDK — embed the data plane directly into your own application.',

  'eco.title': 'The network layer of the openprx stack',
  'eco.desc':
    'openprx is a self-hostable, Rust, federated infrastructure family. fluxpeer is its connectivity layer — the private network that ramflux messaging and the rest of the stack run on, end to end.',
  'eco.openprx': 'openprx — open infrastructure for autonomous, AI-driven software.',
  'eco.ramflux': 'ramflux — end-to-end encrypted, federated messaging.',
  'eco.fluxpeer': 'fluxpeer — the network layer the whole stack runs on.',

  'open.title': 'Open core, managed apps',
  'open.openLabel': 'Open source',
  'open.closedLabel': 'Managed service',
  'open.openItems': 'Engine · CLI · OpenWrt · SDK · Documentation',
  'open.closedItems': 'Mobile and desktop apps · IP and node marketplace · Billing · Hosted control plane',
  'open.note':
    "It's one network, with two ways to run it. The core — engine, CLI, OpenWrt, SDK — is fully open source, so you can self-host the whole thing. And if you'd rather not run servers, fluxpeer.com gives you that same network as a managed service, with polished apps and an IP marketplace on top.",

  'dl.title': 'Download',
  'dl.subtitle': 'The open-source components — static binaries, with no runtime dependencies.',
  'dl.cli.t': 'fluxpeer CLI',
  'dl.cli.d': 'Linux, macOS, and Windows (static musl build). Runs control, relay, node, join, and up.',
  'dl.openwrt.t': 'OpenWrt package',
  'dl.openwrt.d': 'Bring a whole router onto the mesh and route an entire site.',
  'dl.soon': 'Coming soon',
  'dl.guiNote': 'Looking for the mobile or desktop app? Those are part of the managed service.',
  'dl.guiCta': 'Get the app at fluxpeer.com',

  'docs.title': 'Documentation',
  'docs.usage': 'Usage',
  'docs.dev': 'Development',
  'docs.usage.quickstart': 'Quickstart',
  'docs.usage.install': 'Install',
  'docs.usage.join': 'Join a network',
  'docs.usage.cli': 'CLI reference',
  'docs.usage.openwrt': 'OpenWrt',
  'docs.usage.exit': 'Exit node and split tunnel',
  'docs.usage.selfhost': 'Self-hosting (control and relay)',
  'docs.dev.arch': 'Architecture',
  'docs.dev.protocol': 'Protocol',
  'docs.dev.build': 'Build from source',
  'docs.dev.api': 'Control API',
  'docs.dev.sdk': 'SDK',
  'docs.dev.contrib': 'Contributing',
  'docs.placeholder': 'This page is being written. Documentation is coming soon.',

  'footer.tagline': 'Open-source mesh networking.',
  'footer.product': 'Product',
  'footer.openSrc': 'Open source',
  'footer.ecosystem': 'Ecosystem',
  'footer.app': 'Get the app',
  'footer.license': 'License',
  'footer.rights': '© 2026 fluxpeer · BSD-3 core · AGPL-3.0 clients · part of openprx',
}

const zh = {
  'nav.docs': '文档',
  'nav.download': '下载',
  'nav.ecosystem': '生态',
  'nav.github': 'GitHub',
  'nav.getApp': '获取客户端',

  'hero.badge': '开源 mesh · 兼容 WireGuard · 可自托管',
  'hero.title': '你的设备,一张 mesh ——\n随处连接。',
  'hero.subtitle':
    'fluxpeer 是开源的 mesh 组网,把每台设备连成一张私有网络:穿透 NAT 建立点对点直连,直连不可用时自动回退到中继,并随网络状况持续重选最优路径——兼容 WireGuard、性能优秀、整套可自托管。',
  'hero.ctaDownload': '下载 CLI',
  'hero.ctaDocs': '查看文档',
  'hero.ctaApp': '获取客户端',

  'why.title': '为组网而生',
  'why.mesh.t': '兼容 WireGuard 的 mesh',
  'why.mesh.d':
    '基于 Noise 协议与 cryptokey 路由——与 WireGuard 同源。可导入现有的 wg.conf、查看每一个对端、审计全部加密实现。没有自创的、未经检验的私有协议需要你盲信。',
  'why.anticensor.t': '总能找到一条路',
  'why.anticensor.d':
    'NAT 能穿透就走点对点直连,否则自动回退到 TCP 与加密中继;链路持续自愈、动态重选路由,设备在多变的网络里始终可达——无需端口映射,无需固定 IP。',
  'why.selfhost.t': '整套自托管',
  'why.selfhost.d':
    '一个静态 Rust 二进制即可运行控制面、中继与节点,内嵌 SQLite、零外部依赖;加密按核分片,带来真实吞吐。整张网络都归你。',

  'caps.title': '组网能力',
  'caps.nat.t': 'NAT 穿透',
  'caps.nat.d': '穿透 NAT 与防火墙建立点对点直连——无需端口映射,无需固定 IP。',
  'caps.perf.t': '多核吞吐',
  'caps.perf.d': '加密按 CPU 核分片,吞吐随硬件线性扩展,而非卡在单线程。',
  'caps.cross.t': '跨平台',
  'caps.cross.d': 'Linux、macOS、Windows、iOS、Android、OpenWrt——一套引擎,处处同一张 mesh。',
  'caps.exit.t': '出口节点 · 分流',
  'caps.exit.d': '全部流量经出口节点,或只路由你选定的网段。',
  'caps.relay.t': '自动中继回退',
  'caps.relay.d': '直连不可用时无缝走中继——一旦可行立即升级回直连。',
  'caps.subnet.t': '子网路由',
  'caps.subnet.d': '用一个节点或路由器,把整个局域网接入 mesh。',

  'stack.title': '开源技术栈',
  'stack.desc': '核心采用 BSD-3-Clause 许可,Rust 编写。自己构建、自己审计、自己运行。',
  'stack.cli': 'CLI —— 在终端里完成加入、运行与管理网络的全部操作。',
  'stack.openwrt': 'OpenWrt —— 把整台路由器接入 mesh,让一整个站点上线。',
  'stack.engine': '引擎 —— 控制面、中继、节点,全在一个二进制里。',
  'stack.sdk': 'SDK —— 把数据面直接嵌入你自己的应用。',

  'eco.title': 'openprx 体系的网络层',
  'eco.desc':
    'openprx 是一个可自托管、Rust 编写、生而联邦的基础设施家族。fluxpeer 是其中的连接层——ramflux 通讯与整套体系,都端到端地跑在这张私有网络之上。',
  'eco.openprx': 'openprx —— 面向 AI 自治软件的开放基础设施。',
  'eco.ramflux': 'ramflux —— 端到端加密的联邦化通讯。',
  'eco.fluxpeer': 'fluxpeer —— 支撑整套体系运行的网络层。',

  'open.title': '开源内核,托管应用',
  'open.openLabel': '开源',
  'open.closedLabel': '托管服务',
  'open.openItems': '引擎 · CLI · OpenWrt · SDK · 文档',
  'open.closedItems': '移动与桌面客户端 · IP 与节点市场 · 计费 · 托管控制面',
  'open.note':
    '同一张网络,两种用法:内核——引擎、CLI、OpenWrt、SDK——完全开源,你可以把整套自托管;而如果不想自己跑服务器,fluxpeer.com 提供完全相同的这张网络作为托管服务,并在其上附带精致客户端与 IP 市场。',

  'dl.title': '下载',
  'dl.subtitle': '开源部分——静态二进制,无任何运行时依赖。',
  'dl.cli.t': 'fluxpeer CLI',
  'dl.cli.d': 'Linux、macOS、Windows(musl 静态构建)。包含 control、relay、node、join、up。',
  'dl.openwrt.t': 'OpenWrt 软件包',
  'dl.openwrt.d': '把整台路由器接入 mesh,为一整个站点组网。',
  'dl.soon': '即将推出',
  'dl.guiNote': '在找移动或桌面客户端?它们属于托管服务的一部分。',
  'dl.guiCta': '前往 fluxpeer.com 获取客户端',

  'docs.title': '文档',
  'docs.usage': '使用文档',
  'docs.dev': '开发文档',
  'docs.usage.quickstart': '快速开始',
  'docs.usage.install': '安装',
  'docs.usage.join': '加入网络',
  'docs.usage.cli': 'CLI 参考',
  'docs.usage.openwrt': 'OpenWrt',
  'docs.usage.exit': '出口节点与分流',
  'docs.usage.selfhost': '自托管(控制面与中继)',
  'docs.dev.arch': '架构',
  'docs.dev.protocol': '协议',
  'docs.dev.build': '从源码构建',
  'docs.dev.api': '控制 API',
  'docs.dev.sdk': 'SDK',
  'docs.dev.contrib': '贡献指南',
  'docs.placeholder': '本页编写中,文档即将上线。',

  'footer.tagline': '开源 mesh 组网。',
  'footer.product': '产品',
  'footer.openSrc': '开源',
  'footer.ecosystem': '生态',
  'footer.app': '获取客户端',
  'footer.license': '许可证',
  'footer.rights': '© 2026 fluxpeer · BSD-3 核心 · AGPL-3.0 客户端 · openprx 家族',
}

// The not-yet-translated launch languages: empty tables → fall back to en.
// They are filled in over time.
export const messages = {
  en,
  zh,
  ru: {},
  fa: {},
  ar: {},
  es: {},
  pt: {},
  fr: {},
  de: {},
  tr: {},
  vi: {},
  id: {},
}

export function t(lang, key) {
  return messages[lang]?.[key] ?? messages.en[key] ?? key
}
