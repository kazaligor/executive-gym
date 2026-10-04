# Executive Gym

Кроссплатформенный offline-first тренажёр управленческого мышления.

## Platforms
- Android: existing native APK remains in app/.
- iPhone: Safari → Share → Add to Home Screen.
- Windows: Chrome/Edge → Install app.
- Android: Chrome → Add to Home Screen / Install app.

The PWA client lives in web/. Progress is stored locally in the browser. After the first successful load, the app is available offline through a service worker.

## GitHub Pages
The repository publishes the web/ directory as a static site. No backend, account or database is required.
