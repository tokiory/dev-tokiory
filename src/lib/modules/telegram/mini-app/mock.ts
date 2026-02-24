import { mockTelegramEnv, emitEvent } from '@telegram-apps/bridge';

const noInsets = {
	left: 0,
	top: 0,
	bottom: 0,
	right: 0
} as const;

const themeParams = {
	accent_text_color: '#44403c',
	bg_color: '#ffffff',
	button_color: '#78716c',
	button_text_color: '#ffffff',
	destructive_text_color: '#44403c',
	header_bg_color: '#ffffff',
	hint_color: '#78716c',
	link_color: '#57534e',
	secondary_bg_color: '#f5f5f4',
	section_bg_color: '#ffffff',
	section_header_text_color: '#57534e',
	subtitle_text_color: '#78716c',
	text_color: '#1c1917'
} as const;

mockTelegramEnv({
	launchParams: {
		tgWebAppThemeParams: themeParams,
		tgWebAppData: new URLSearchParams([
			[
				'user',
				JSON.stringify({
					id: 1,
					first_name: 'Pavel'
				})
			],
			['hash', ''],
			['signature', ''],
			['auth_date', Date.now().toString()]
		]),
		tgWebAppStartParam: 'debug',
		tgWebAppVersion: '8',
		tgWebAppPlatform: 'tdesktop'
	},
	onEvent(e) {
		if (e[0] === 'web_app_request_theme') {
			return emitEvent('theme_changed', { theme_params: themeParams });
		}

		if (e[0] === 'web_app_request_viewport') {
			return emitEvent('viewport_changed', {
				height: window.innerHeight,
				width: window.innerWidth,
				is_expanded: true,
				is_state_stable: true
			});
		}

		if (e[0] === 'web_app_request_content_safe_area') {
			return emitEvent('content_safe_area_changed', noInsets);
		}

		if (e[0] === 'web_app_request_safe_area') {
			return emitEvent('safe_area_changed', noInsets);
		}
	}
});
