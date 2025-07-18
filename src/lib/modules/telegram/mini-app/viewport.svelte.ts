import { viewport } from '@telegram-apps/sdk';
import { warn } from './logger';

export const viewportStore = {
	get isAvailable() {
		return viewport.mount.isAvailable();
	},
	get isMounted() {
		return viewport.isMounted();
	},
	get isReady() {
		return this.isAvailable && this.isMounted;
	},
	async initialize() {
		if (!this.isAvailable) {
			warn("Swipe Behaviour isn't available");
			return;
		}

		await viewport.mount();
	},
	async maximize() {
		if (!this.isMounted) {
			warn('Viewport Module is not mounted');
			return;
		}

		await viewport.requestFullscreen();
	},
	get isFullscreen() {
		return viewport.isFullscreen();
	},
	async minimize() {
		if (!this.isMounted) {
			warn('Viewport Module is not mounted');
			return;
		}

		await viewport.exitFullscreen();
	}
};
