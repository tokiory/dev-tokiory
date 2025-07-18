import { miniApp } from '@telegram-apps/sdk';
import { warn } from './logger';

export const windowStore = {
	get isAvailable() {
		return miniApp.mountSync.isAvailable();
	},
	get isMounted() {
		return miniApp.isMounted();
	},
	initialize() {
		if (!this.isAvailable) {
			warn("Window Module isn't available");
			return;
		}

		miniApp.mountSync();
	},
	setTheme({
		headerColor = '#fff',
		backgroundColor = '#fff'
	}: {
		headerColor: string;
		backgroundColor: string;
	}) {
		if (!this.isMounted) {
			warn('Window Module is not mounted');
			return;
		}

		if (miniApp.setHeaderColor.isAvailable()) miniApp.setHeaderColor(headerColor);
		if (miniApp.setBackgroundColor.isAvailable()) miniApp.setBackgroundColor(backgroundColor);
	}
};
