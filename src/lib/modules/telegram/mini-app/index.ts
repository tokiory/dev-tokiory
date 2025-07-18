import { init as initTMA, isTMA } from '@telegram-apps/sdk';
import { swipeBehaviourStore } from './swipe.svelte';
import { windowStore } from './window.svelte';
import { historyStore } from './history.svelte';
import { warn } from './logger';

export const telegramMiniApp = {
	windowStore,
	swipeBehaviourStore,
	historyStore,
	get isTelegramEnv() {
		return isTMA();
	},
	initializeMiniApp() {
		if (!this.isTelegramEnv) {
			warn('Failed to initialize Telegram Mini Application, continuing without integrations');
			return;
		}

		try {
			initTMA();
		} catch (error) {
			console.error('Error initializing mini application:', error);
		}
	}
};
