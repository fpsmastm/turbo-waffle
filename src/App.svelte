<script>
  const menuItems = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];
  const dockApps = [
    { name: 'Finder', icon: '😀' },
    { name: 'Launchpad', icon: '🚀' },
    { name: 'Safari', icon: '🧭' },
    { name: 'Mail', icon: '✉️' },
    { name: 'Messages', icon: '💬' },
    { name: 'Maps', icon: '🗺️' },
    { name: 'Photos', icon: '🖼️' },
    { name: 'Music', icon: '🎵' },
    { name: 'System Settings', icon: '⚙️' },
    { name: 'Terminal', icon: '🖥️' }
  ];

  const desktopIcons = [
    { name: 'Macintosh HD', icon: '💽' },
    { name: 'Projects', icon: '📁' },
    { name: 'Downloads', icon: '📥' }
  ];

  const widgets = [
    { title: 'Weather', value: '72°F', subtext: 'San Francisco' },
    { title: 'Calendar', value: 'Thu 9', subtext: '3 events today' },
    { title: 'Now Playing', value: 'Ambient Focus', subtext: 'Lo-fi Station' }
  ];

  const windows = [
    {
      title: 'Finder',
      subtitle: 'Recents',
      content: ['Applications', 'Desktop', 'Documents', 'Downloads', 'Pictures']
    },
    {
      title: 'Terminal',
      subtitle: 'zsh',
      terminal: true,
      content: ['Last login: Thu Apr 9', 'user@macbook ~ % npm run dev', 'VITE v6 ready in 160ms']
    }
  ];
</script>

<div class="desktop">
  <header class="menu-bar glass">
    <div class="menu-left">
      <span class="apple-logo"></span>
      {#each menuItems as item}
        <span>{item}</span>
      {/each}
    </div>
    <div class="menu-right">
      <span>🔍</span>
      <span>📶</span>
      <span>🔋 91%</span>
      <span>Thu 3:42 PM</span>
    </div>
  </header>

  <main class="workspace">
    <aside class="desktop-icons">
      {#each desktopIcons as icon}
        <button class="desktop-icon glass" type="button">
          <span class="emoji">{icon.icon}</span>
          <span>{icon.name}</span>
        </button>
      {/each}
    </aside>

    <section class="window-stack">
      {#each windows as window}
        <article class="window glass">
          <div class="window-toolbar">
            <div class="traffic-lights">
              <span class="light red"></span>
              <span class="light yellow"></span>
              <span class="light green"></span>
            </div>
            <div>
              <strong>{window.title}</strong>
              <small>{window.subtitle}</small>
            </div>
          </div>

          {#if window.terminal}
            <div class="terminal-content">
              {#each window.content as line}
                <p>{line}</p>
              {/each}
            </div>
          {:else}
            <ul>
              {#each window.content as item}
                <li>{item}</li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </section>

    <aside class="widget-panel">
      {#each widgets as widget}
        <article class="widget glass">
          <h3>{widget.title}</h3>
          <p class="widget-value">{widget.value}</p>
          <p>{widget.subtext}</p>
        </article>
      {/each}
    </aside>
  </main>

  <footer class="dock glass">
    {#each dockApps as app}
      <button class="dock-app" title={app.name} type="button">
        <span>{app.icon}</span>
      </button>
    {/each}
  </footer>
</div>
