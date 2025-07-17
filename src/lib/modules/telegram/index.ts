import unoconfig from '$unoconfig';
import { init as initTMA, miniApp, backButton, swipeBehavior } from '@telegram-apps/sdk';

const changeInterfaceColors = () => {
	if (miniApp.setHeaderColor.isAvailable())
		miniApp.setHeaderColor(unoconfig.theme?.colors.frangipani['50'] || '#fff');
	if (miniApp.setBackgroundColor.isAvailable())
		miniApp.setBackgroundColor(unoconfig.theme?.colors.frangipani['50'] || '#fff');
};

export const initializeMiniApplication = async () => {
	initTMA();

	// Mount the application
	const isMiniAppAvailable = miniApp.mountSync.isAvailable();
	const isBackButtonAvailable = backButton.mount.isAvailable();
	const isSwipeAvailable = swipeBehavior.mount.isAvailable();

	if (isMiniAppAvailable) {
		miniApp.mountSync();
		changeInterfaceColors();
	}

	if (isBackButtonAvailable) {
		backButton.mount();

		if (window.location.pathname === '/') {
			backButton.hide();
		} else {
			backButton.show();
		}
	}

	if (isSwipeAvailable) {
		swipeBehavior.mount();
		swipeBehavior.disableVertical();
	}
};
