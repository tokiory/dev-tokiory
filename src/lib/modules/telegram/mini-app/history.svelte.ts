import { backButton } from '@telegram-apps/sdk';
import { warn } from './logger';

export const historyStore = {
	get isAvailable() {
		return backButton.mount.isAvailable();
	},
	get isMounted() {
		return backButton.isMounted();
	},
	initialize() {
		if (!this.isAvailable) {
			warn("Back Button isn't available");
			return;
		}

		backButton.mount();
	},
	setBackButtonListener(listener: () => void) {
		if (!this.isMounted) {
			warn('Back Button not mounted');
			return;
		}

		if (backButton.onClick.isAvailable()) {
			backButton.onClick(listener);
		}
	},

	removeBackButtonListener(listener: () => void) {
		if (!this.isMounted) {
			warn('Back Button not mounted');
			return;
		}

		if (backButton.offClick.isAvailable()) {
			backButton.offClick(listener);
		}
	},

	showBackButton() {
		if (!this.isMounted) {
			return;
		}

		if (backButton.show.isAvailable()) {
			backButton.show();
		}
	},

	hideBackButton() {
		if (!this.isMounted) {
			return;
		}

		if (backButton.hide.isAvailable()) {
			backButton.hide();
		}
	}
};
