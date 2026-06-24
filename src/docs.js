export const docs = {
  en: {
    quickstart: `
      <h2>Quickstart</h2>
      <ol>
        <li>Install the <code>fluxpeer</code> CLI.</li>
        <li>Run your own control plane and relay, or use an existing network.</li>
        <li>Create a network and invite in the admin tooling.</li>
        <li>Join a client with <code>fluxpeer join &lt;fp://join/...&gt;</code>.</li>
        <li>Start the daemon with <code>fluxpeer up</code>.</li>
        <li>Inspect peers with <code>fluxpeer show</code>.</li>
      </ol>
    `,
    install: `
      <h2>Install</h2>
      <p>fluxpeer ships as a static musl binary for Linux, macOS, and Windows builds. The default node configuration directory is <code>/etc/fluxpeer</code>.</p>
      <p>Prebuilt binaries are not published yet. Build from source or use the package/source links on the download page.</p>
      <h2>Licensing</h2>
      <p>The engine, CLI, OpenWrt package, and SDK are BSD-3-Clause. The mobile and desktop GUI clients are AGPL-3.0. The hosted service plane is proprietary.</p>
    `,
    join: `
      <h2>Join a network</h2>
      <p>Use an invite token to enroll this device and write its node configuration:</p>
      <pre><code>fluxpeer join "fp://join/&lt;token&gt;" --out /etc/fluxpeer/node.json</code></pre>
      <p>Enrollment uses proof-of-possession and a per-device token. After the config is written, start the daemon:</p>
      <pre><code>fluxpeer up</code></pre>
    `,
    cli: `
      <h2>CLI reference</h2>
      <p>The unified <code>fluxpeer</code> binary exposes these command groups:</p>
      <ul>
        <li><code>fluxpeer control</code></li>
        <li><code>fluxpeer relay</code></li>
        <li><code>fluxpeer node run &lt;cfg&gt;</code></li>
        <li><code>fluxpeer node keygen</code></li>
        <li><code>fluxpeer join</code></li>
        <li><code>fluxpeer up</code></li>
        <li><code>fluxpeer show</code></li>
        <li><code>fluxpeer ctl &lt;network|device|invite|route ...&gt;</code></li>
      </ul>
    `,
    openwrt: `
      <h2>OpenWrt</h2>
      <p>Install the OpenWrt package with <code>opkg install</code>. Configuration lives in <code>/etc/config/fluxpeer</code>.</p>
      <p>In LuCI, open Network → fluxpeer, paste an invite token to join, select LAN subnets to advertise, and approve routes in admin tooling before remote peers can reach those subnets.</p>
      <p>To make the router an exit node, set the node config with <code>fluxpeer node set-exit on</code>.</p>
    `,
    exit: `
      <h2>Exit node and split tunnel</h2>
      <p>fluxpeer defaults to split tunnel. It routes only <code>allowed_ips</code>, such as LAN subnets you explicitly advertise or approve.</p>
      <p>An exit node is an explicit full-tunnel gateway and is opt-in. fluxpeer never defaults to <code>0.0.0.0/0</code> global routing.</p>
      <p>A kill-switch is available as an optional leak-prevention rule for full-tunnel router use.</p>
    `,
    selfhost: `
      <h2>Self-hosting control and relay</h2>
      <p>One <code>fluxpeer</code> binary can run the control plane and relay. The control plane defaults to local SQLite; set <code>DATABASE_URL</code> to use PostgreSQL.</p>
      <p>Relevant environment variables include <code>FLUXPEER_CONTROL_ADDR</code>, <code>FLUXPEER_RELAY_ADDR</code>, and <code>FLUXPEER_ADMIN_PASSWORD</code>.</p>
      <p>Use <code>fluxpeer ctl</code> to manage networks, devices, invites, and routes.</p>
    `,
    arch: `
      <h2>Architecture</h2>
      <p>Development documentation is maintained with the source. See the GitHub repositories and README files for current architecture notes.</p>
    `,
    protocol: `
      <h2>Protocol</h2>
      <p>Protocol implementation details live in the open source repositories. Start with the engine and node source on GitHub.</p>
    `,
    build: `
      <h2>Build from source</h2>
      <p>Use the GitHub repositories linked from the download page. The CLI, OpenWrt packaging, mobile client, and desktop client each have their own source tree.</p>
    `,
    api: `
      <h2>Control API</h2>
      <p>See the control server source and README on GitHub for API details.</p>
    `,
    sdk: `
      <h2>SDK</h2>
      <p>See the SDK source and README in the fluxpeer repository.</p>
    `,
    contrib: `
      <h2>Contributing</h2>
      <p>Use GitHub issues and the source repositories for contributions, bug reports, and security reports.</p>
    `,
  },
  zh: {
    quickstart: `
      <h2>快速开始</h2>
      <ol>
        <li>安装 <code>fluxpeer</code> CLI。</li>
        <li>运行自托管 control 与 relay,或使用已有网络。</li>
        <li>在 admin 工具里创建网络和邀请。</li>
        <li>用 <code>fluxpeer join &lt;fp://join/...&gt;</code> 加入客户端。</li>
        <li>用 <code>fluxpeer up</code> 启动守护进程。</li>
        <li>用 <code>fluxpeer show</code> 查看 peer。</li>
      </ol>
    `,
    install: `
      <h2>安装</h2>
      <p>fluxpeer 以静态 musl 二进制形式面向 Linux、macOS、Windows 构建。默认节点配置目录是 <code>/etc/fluxpeer</code>。</p>
      <p>预编译二进制尚未发布。请从源码构建,或使用下载页上的软件包/源码链接。</p>
      <h2>许可证</h2>
      <p>引擎、CLI、OpenWrt 软件包和 SDK 使用 BSD-3-Clause。移动与桌面 GUI 客户端使用 AGPL-3.0。托管服务面是专有的。</p>
    `,
    join: `
      <h2>加入网络</h2>
      <p>使用邀请 token enroll 设备并写出节点配置:</p>
      <pre><code>fluxpeer join "fp://join/&lt;token&gt;" --out /etc/fluxpeer/node.json</code></pre>
      <p>enroll 使用 proof-of-possession 和每设备 token。配置写出后启动守护进程:</p>
      <pre><code>fluxpeer up</code></pre>
    `,
    cli: `
      <h2>CLI 参考</h2>
      <p>统一的 <code>fluxpeer</code> 二进制提供这些命令组:</p>
      <ul>
        <li><code>fluxpeer control</code></li>
        <li><code>fluxpeer relay</code></li>
        <li><code>fluxpeer node run &lt;cfg&gt;</code></li>
        <li><code>fluxpeer node keygen</code></li>
        <li><code>fluxpeer join</code></li>
        <li><code>fluxpeer up</code></li>
        <li><code>fluxpeer show</code></li>
        <li><code>fluxpeer ctl &lt;network|device|invite|route ...&gt;</code></li>
      </ul>
    `,
    openwrt: `
      <h2>OpenWrt</h2>
      <p>使用 <code>opkg install</code> 安装 OpenWrt 软件包。配置位于 <code>/etc/config/fluxpeer</code>。</p>
      <p>在 LuCI 的 Network → fluxpeer 中粘贴 invite token 入网,选择要播发的 LAN 子网;admin 审批路由后,远端 peer 才能访问这些子网。</p>
      <p>要把路由器作为出口节点,使用 <code>fluxpeer node set-exit on</code> 写入节点配置。</p>
    `,
    exit: `
      <h2>出口节点与分流</h2>
      <p>fluxpeer 默认是 split tunnel,只路由 <code>allowed_ips</code>,例如你显式播发或审批的 LAN 网段。</p>
      <p>exit-node 是显式的 full-tunnel 出口,需要 opt-in。fluxpeer 绝不默认 <code>0.0.0.0/0</code> 全局路由。</p>
      <p>kill-switch 可作为全隧道路由器场景的可选防泄漏规则。</p>
    `,
    selfhost: `
      <h2>自托管控制面与中继</h2>
      <p>一个 <code>fluxpeer</code> 二进制可以运行控制面和中继。控制面默认使用本地 SQLite;设置 <code>DATABASE_URL</code> 可切换 PostgreSQL。</p>
      <p>相关环境变量包括 <code>FLUXPEER_CONTROL_ADDR</code>、<code>FLUXPEER_RELAY_ADDR</code>、<code>FLUXPEER_ADMIN_PASSWORD</code>。</p>
      <p>使用 <code>fluxpeer ctl</code> 管理网络、设备、邀请和路由。</p>
    `,
    arch: `
      <h2>架构</h2>
      <p>开发文档随源码维护。请查看 GitHub 仓库和 README 获取当前架构说明。</p>
    `,
    protocol: `
      <h2>协议</h2>
      <p>协议实现细节在开源仓库中。可从 GitHub 上的 engine 与 node 源码开始阅读。</p>
    `,
    build: `
      <h2>从源码构建</h2>
      <p>请使用下载页链接到的 GitHub 仓库。CLI、OpenWrt 打包、移动客户端、桌面客户端分别有自己的源码树。</p>
    `,
    api: `
      <h2>控制 API</h2>
      <p>控制 API 细节请查看 GitHub 上的 control server 源码和 README。</p>
    `,
    sdk: `
      <h2>SDK</h2>
      <p>SDK 请查看 fluxpeer 仓库里的 SDK 源码和 README。</p>
    `,
    contrib: `
      <h2>贡献指南</h2>
      <p>贡献、问题反馈和安全报告请使用 GitHub issues 与源码仓库。</p>
    `,
  },
}
