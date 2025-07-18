# Telegram Mini App Module

The Telegram Mini App module provides a comprehensive set of utilities for integrating and managing Telegram Mini Applications (TMAs) within your application. This module wraps the `@telegram-apps/sdk` functionality into manageable stores and provides type-safe interfaces for common TMA operations.

## Features

- 🎨 Window customization (colors, themes)
- ↩️ Back button management
- 🔄 Swipe behavior control
- 📝 Parameter handling
- 🔍 Environment detection
- ⚠️ Integrated logging

## Main Components

### `telegramMiniApp`

The main entry point that provides access to all TMA functionality. It exposes the following svelte stores:

```typescript
const {
  windowStore,
  swipeBehaviourStore,
  historyStore,
  paramStore,
  isTelegramEnv,
  isInitialized,
  initializeMiniApp
} = telegramMiniApp;
```

### Stores

#### Window Store (`windowStore`)
Controls window-related functionality:
- Theme customization (header and background colors)
- Window mounting and initialization

#### History Store (`historyStore`)
Manages back button behavior:
- Back button initialization
- Event listener management
- Visibility control

#### Swipe Behavior Store (`swipeBehaviourStore`)
Controls swipe gestures and scrolling behavior:
- Vertical scroll toggling
- Swipe behavior initialization

#### Parameter Store (`paramStore`)
Handles URL parameters and start parameters:
- Article parameter extraction
- Start parameter parsing

## Usage

1. Initialize the mini app:

```typescript
import { telegramMiniApp } from '$mod/telegram/mini-app';

// Initialize the mini app
telegramMiniApp.initializeMiniApp();

// Check if running in Telegram environment
if (telegramMiniApp.isInitialized) {
  // Initialize required features
  windowStore.initialize();
  historyStore.initialize();
  swipeBehaviourStore.initialize();
}
```

2. Set up event listeners and configure behavior:

```typescript
// Configure window appearance
windowStore.setTheme({
  headerColor: '#your-header-color',
  backgroundColor: '#your-background-color'
});

// Set up back button
historyStore.setBackButtonListener(() => {
  // Your back navigation logic
});

// Control scroll behavior
swipeBehaviourStore.toggleVerticalScroll(true);
```

## Error Handling

The module includes built-in error handling and logging functionality. All operations are safely wrapped and will log warnings when:
- Features are not available
- Components are not properly mounted
- Initialization fails
