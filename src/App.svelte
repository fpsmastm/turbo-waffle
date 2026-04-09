<script>
  const menuItems = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];

  const favorites = [
    'Recents',
    'Applications',
    'Desktop',
    'Documents',
    'Downloads',
    'Pictures',
    'Music'
  ];

  const files = [
    { name: 'Vacation Photos', type: 'folder' },
    { name: 'Product Spec.pdf', type: 'pdf' },
    { name: 'Design Draft.sketch', type: 'sketch' },
    { name: 'Sprint Notes.md', type: 'note' },
    { name: 'Budget Numbers.xlsx', type: 'sheet' },
    { name: 'New Folder', type: 'folder' }
  ];

  const desktopItems = [
    { name: 'Macintosh HD', emoji: '💿' },
    { name: 'Work', emoji: '📁' },
    { name: 'Screenshots', emoji: '🖼️' }
  ];

  const dockApps = [
    'app-finder',
    'app-launchpad',
    'app-safari',
    'app-messages',
    'app-mail',
    'app-photos',
    'app-music',
    'app-settings',
    'app-terminal'
  ];

  const now = new Date();
  const dayLabel = now.toLocaleDateString('en-US', { weekday: 'short' });
  const timeLabel = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
</script>

<div class="desktop-scene">
  <div class="wallpaper-glow one"></div>
  <div class="wallpaper-glow two"></div>
  <div class="wallpaper-glow three"></div>

  <header class="menu-bar">
    <div class="menu-left">
      <span class="apple"></span>
      {#each menuItems as item}
        <span class="menu-item">{item}</span>
      {/each}
    </div>

    <div class="menu-right">
      <span>⌘K</span>
      <span>🔎</span>
      <span>📶</span>
      <span>🔋 87%</span>
      <span>{dayLabel} {timeLabel}</span>
    </div>
  </header>

  <section class="desktop-icons">
    {#each desktopItems as item}
      <button class="desktop-icon" type="button">
        <span class="icon-art">{item.emoji}</span>
        <span>{item.name}</span>
      </button>
    {/each}
  </section>

  <main class="windows-layer">
    <article class="window finder">
      <div class="window-header">
        <div class="traffic-lights">
          <span class="light red"></span>
          <span class="light yellow"></span>
          <span class="light green"></span>
        </div>
        <div class="window-title">
          <strong>Finder</strong>
          <small>Recents</small>
        </div>
        <div class="header-actions">◀︎ ▶︎ ⟳ ⌗</div>
      </div>

      <div class="finder-body">
        <aside class="sidebar">
          <h4>Favorites</h4>
          {#each favorites as favorite, i}
            <button class:selected={i === 0} type="button">{favorite}</button>
          {/each}
        </aside>

        <section class="content-grid">
          {#each files as file}
            <button class="file-card" type="button">
              <span class="file-icon {file.type}"></span>
              <span>{file.name}</span>
            </button>
          {/each}
        </section>
      </div>
    </article>

    <article class="window terminal">
      <div class="window-header slim">
        <div class="traffic-lights">
          <span class="light red"></span>
          <span class="light yellow"></span>
          <span class="light green"></span>
        </div>
        <div class="window-title">
          <strong>Terminal — zsh</strong>
        </div>
      </div>

      <div class="terminal-screen">
        <p>Last login: Thu Apr 9 on ttys000</p>
        <p>m2-macbook-pro ~ % npm run dev:codespace</p>
        <p>VITE ready in 145 ms</p>
        <p>➜ Local: http://localhost:4173/</p>
      </div>
    </article>

    <article class="window control-center">
      <h4>Control Center</h4>
      <div class="toggles">
        <button type="button"><span>📶</span> Wi‑Fi</button>
        <button type="button"><span>🦷</span> Bluetooth</button>
        <button type="button"><span>🌙</span> Focus</button>
        <button type="button"><span>🎧</span> Sound</button>
      </div>
    </article>
  </main>

  <footer class="dock">
    {#each dockApps as app}
      <button class="dock-app {app}" type="button" aria-label={app}></button>
    {/each}
    <span class="dock-separator"></span>
    <button class="dock-app app-downloads" type="button" aria-label="app-downloads"></button>
    <button class="dock-app app-trash" type="button" aria-label="app-trash"></button>
  </footer>
</div>
