import { writable } from 'svelte/store';

export const THEMES = ['light', 'dark', 'gruvvy'] as const;

export type Theme = (typeof THEMES)[number];

const STORAGE_KEY = 'tokiory-theme';
const DEFAULT_THEME: Theme = 'light';

const isTheme = (value: string | null): value is Theme => {
	return value !== null && THEMES.includes(value as Theme);
};

const themeStore = writable<Theme>(DEFAULT_THEME);

const getStoredTheme = (): Theme => {
	if (typeof window === 'undefined') return DEFAULT_THEME;

	const savedTheme = window.localStorage.getItem(STORAGE_KEY);
	return isTheme(savedTheme) ? savedTheme : DEFAULT_THEME;
};

const applyTheme = (value: Theme) => {
	if (typeof document === 'undefined') return;

	const root = document.documentElement;
	for (const theme of THEMES) {
		root.classList.remove(`theme-${theme}`);
	}

	root.classList.add(`theme-${value}`);
	root.style.colorScheme = value === 'light' ? 'light' : 'dark';
};

export const theme = {
	subscribe: themeStore.subscribe
};

export const initializeTheme = (): Theme => {
	const nextTheme = getStoredTheme();

	themeStore.set(nextTheme);
	applyTheme(nextTheme);

	return nextTheme;
};

export const setTheme = (value: Theme) => {
	themeStore.set(value);
	applyTheme(value);

	if (typeof window !== 'undefined') {
		window.localStorage.setItem(STORAGE_KEY, value);
	}
};
