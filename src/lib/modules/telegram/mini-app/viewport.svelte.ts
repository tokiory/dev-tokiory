import { viewport } from '@telegram-apps/sdk';
import { warn } from './logger';

let isMounted = $state(false)

export const viewportStore = {
	get isAvailable() {
		return viewport.mount.isAvailable();
	},
	get isMounted() {
		return viewport.isMounted() && isMounted;
	},
	get isReady() {
		return this.isAvailable && this.isMounted;
	},
	async initialize() {
		if (!this.isAvailable) {
			warn("Swipe Behaviour isn't available");
			isMounted = false
			return;
		}

		await viewport.mount();
		isMounted = true
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
