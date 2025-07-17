import { init as initTMA, miniApp, backButton, swipeBehavior } from '@telegram-apps/sdk';

const changeInterfaceColors = () => {
	if (miniApp.setHeaderColor.isAvailable())
		miniApp.setHeaderColor(unotheme?.colors.frangipani['50'] || '#fff');
	if (miniApp.setBackgroundColor.isAvailable())
		miniApp.setBackgroundColor(unotheme?.colors.frangipani['50'] || '#fff');
};

export const handleBackButton = () => {
	if (!backButton.isMounted()) return;

	if (window.location.pathname === '/') {
		backButton.hide();
	} else {
		backButton.show();
	}
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

		backButton.onClick(() => {
			window.history.back();
      handleBackButton();
		});

		handleBackButton();
	}

	if (isSwipeAvailable) {
		swipeBehavior.mount();
		swipeBehavior.disableVertical();
	}
};
