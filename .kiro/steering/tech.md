---
inclusion: always
---

# Technology Stack

## Core Stack
- React Native 0.81.5
- React 19.1.0
- Expo ~54.0.22
- TypeScript ~5.9.2
- Metro bundler (metro.config.js)

## Package Manager
Use **Bun** for all package operations (NOT npm/yarn).

## Development Commands
```bash
bun start          # Start dev server
bun run android    # Run on Android
bun run ios        # Run on iOS
bun run web        # Run on web
```

## TypeScript Config
- Extends Expo's base configuration
- Path alias: `@/*` → `src/*`
- ALWAYS use `@/` prefix for src imports

## Platform Targets
- iOS (native: ios/)
- Android (native: android/)
- Web (via Expo web)
