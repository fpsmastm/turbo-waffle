# macOS Replica (Vite + Svelte)

This project is a macOS-style desktop UI built with **Svelte** and **Vite**.

## Run in GitHub Codespaces

1. Open the terminal in your Codespace (`Terminal` → `New Terminal`).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev:codespace
   ```

4. When Codespaces prompts you to open a forwarded port, click **Open in Browser**.
   - Default port: `4173`
   - If no prompt appears, open the **Ports** tab and open port `4173` manually.

## Other scripts

```bash
npm run dev        # local dev server
npm run build      # production build
npm run preview    # preview production build
```

## Troubleshooting

- If `npm install` fails, run:

  ```bash
  npm cache clean --force
  npm install
  ```

- If port `4173` is busy, run:

  ```bash
  npm run dev:codespace -- --port 4174
  ```


- If `npm run build` reports dependency conflicts in Codespaces, reset install state and reinstall:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run build
  ```
