import { swipeBehavior } from '@telegram-apps/sdk';
import { warn } from './logger';

export const swipeBehaviourStore = {
	get isAvailable() {
		return swipeBehavior.mount.isAvailable();
	},
	get isMounted() {
		return swipeBehavior.isMounted();
	},
	initialize() {
		if (!this.isAvailable) {
			warn("Swipe Behaviour isn't available");
			return;
		}

		swipeBehavior.mount();
	},
	toggleVerticalScroll(value = false) {
		if (!this.isMounted) {
			warn('Swipe Behaviour is not mounted');
			return;
		}

		if (value && swipeBehavior.enableVertical.isAvailable()) {
			swipeBehavior.enableVertical();
		} else if (swipeBehavior.disableVertical.isAvailable()) {
			swipeBehavior.disableVertical();
		}
	}
};
