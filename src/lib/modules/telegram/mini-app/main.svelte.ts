import { init as initTMA, isTMA } from '@telegram-apps/sdk';
import { swipeBehaviourStore } from './swipe.svelte';
import { windowStore } from './window.svelte';
import { historyStore } from './history.svelte';
import { warn } from './logger';
import { paramStore } from './param.svelte';
import { viewportStore } from './viewport.svelte';

let isInitialized = $state(false);

export const telegramMiniApp = {
	windowStore,
	swipeBehaviourStore,
	historyStore,
	paramStore,
	viewportStore,
	get isTelegramEnv() {
		return isTMA();
	},
	get isInitialized() {
		return isInitialized;
	},
	initializeMiniApp() {
		if (!this.isTelegramEnv) {
			warn('Failed to initialize Telegram Mini Application, continuing without integrations');
			return;
		}

		try {
			initTMA();
			isInitialized = true;
		} catch (error) {
			console.error('Error initializing mini application:', error);
			isInitialized = false;
		}
	}
};
