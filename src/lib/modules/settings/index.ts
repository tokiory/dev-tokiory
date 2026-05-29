import { writable } from 'svelte/store';

export interface Settings {
	dyslexiaMode: boolean;
	serifFont: boolean;
}

const STORAGE_KEY = 'tokiory-settings';
const DEFAULT_SETTINGS: Settings = {
	dyslexiaMode: false,
	serifFont: false
};

const isSettings = (value: unknown): value is Settings => {
	if (typeof value !== 'object' || value === null) return false;
	const candidate = value as Record<string, unknown>;
	return (
		typeof candidate.dyslexiaMode === 'boolean' &&
		typeof candidate.serifFont === 'boolean'
	);
};

const settingsStore = writable<Settings>(DEFAULT_SETTINGS);

const getStoredSettings = (): Settings => {
	if (typeof window === 'undefined') return DEFAULT_SETTINGS;

	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved === null) return DEFAULT_SETTINGS;

		const parsed: unknown = JSON.parse(saved);
		return isSettings(parsed) ? parsed : DEFAULT_SETTINGS;
	} catch {
		return DEFAULT_SETTINGS;
	}
};

const applySettings = (value: Settings) => {
	if (typeof document === 'undefined') return;

	const root = document.documentElement;

	if (value.dyslexiaMode) {
		root.classList.add('dyslexia-mode');
		root.classList.remove('latex-mode');
	} else {
		root.classList.remove('dyslexia-mode');
	}

	if (value.serifFont) {
		root.classList.add('latex-mode');
		root.classList.remove('dyslexia-mode');
	} else {
		root.classList.remove('latex-mode');
	}
};

export const settings = {
	subscribe: settingsStore.subscribe
};

export const initializeSettings = (): Settings => {
	const nextSettings = getStoredSettings();

	settingsStore.set(nextSettings);
	applySettings(nextSettings);

	return nextSettings;
};

const saveAndApply = (value: Settings) => {
	settingsStore.set(value);
	applySettings(value);

	if (typeof window !== 'undefined') {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
	}
};

export const setDyslexiaMode = (value: boolean) => {
	settingsStore.update((current) => {
		const next = { ...current, dyslexiaMode: value };
		saveAndApply(next);
		return next;
	});
};

export const setSerifFont = (value: boolean) => {
	settingsStore.update((current) => {
		const next = { ...current, serifFont: value };
		saveAndApply(next);
		return next;
	});
};
