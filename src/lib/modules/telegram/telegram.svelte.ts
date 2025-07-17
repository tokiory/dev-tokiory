import { init as initTMA, miniApp, backButton, swipeBehavior, isTMA } from '@telegram-apps/sdk';

let isInitialized = $state(false);

let constraints = $state({
	isMiniAppAvailable: false,
	isBackButtonAvailable: false,
	isSwipeAvailable: false
});

export const telegramMiniAppStore = {
	get isInitialized() {
		return isInitialized;
	},
	get constraints() {
		return constraints;
	},
	get mounts() {
		return {
			miniApp: miniApp.isMounted(),
			backButton: backButton.isMounted(),
			swipeBehavior: swipeBehavior.isMounted()
		};
	},
	initializeMiniApp: function () {
		if (!isTMA()) {
			console.warn(
				'Failed to initialize Telegram Mini Application, continuing without integrations'
			);
			return;
		}

		try {
			initTMA();
			this.refreshConstraints();

			if (this.constraints.isMiniAppAvailable) {
				miniApp.mountSync();
			}

			if (this.constraints.isBackButtonAvailable) {
				backButton.mount();

				backButton.onClick(() => {
					window.history.back();
					this.refreshBackButton();
				});
			}

			if (this.constraints.isSwipeAvailable) {
				swipeBehavior.mount();
			}

			isInitialized = true;
		} catch (error) {
			isInitialized = false;
			console.error('Error initializing mini application:', error);
			throw error;
		}
	},
	refreshConstraints: () => {
		constraints = {
			isMiniAppAvailable: miniApp.mountSync.isAvailable(),
			isBackButtonAvailable: backButton.mount.isAvailable(),
			isSwipeAvailable: swipeBehavior.mount.isAvailable()
		};
	},
	refreshVerticalScroll: function () {
		if (!this.mounts.swipeBehavior) return;

		if (window.location.pathname === '/') {
			swipeBehavior.disableVertical();
		} else {
			swipeBehavior.enableVertical();
		}
	},
	refreshBackButton: function () {
		if (!this.mounts.backButton) return;

		if (window.location.pathname === '/') {
			backButton.hide();
		} else {
			backButton.show();
		}
	},
	refreshWindowTheme: function () {
		if (!this.mounts.miniApp) return;

		if (miniApp.setHeaderColor.isAvailable())
			miniApp.setHeaderColor(unotheme?.colors.frangipani['50'] || '#fff');
		if (miniApp.setBackgroundColor.isAvailable())
			miniApp.setBackgroundColor(unotheme?.colors.frangipani['50'] || '#fff');
	}
};
