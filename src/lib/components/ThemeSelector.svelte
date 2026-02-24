<script lang="ts">
	import { THEMES, setTheme, theme, type Theme } from '$mod/theme';

	interface Props {
		class?: string;
	}

	const { class: className = '' }: Props = $props();

	const getNextTheme = (currentTheme: Theme): Theme => {
		const currentThemeIndex = THEMES.indexOf(currentTheme);
		const nextThemeIndex = (currentThemeIndex + 1) % THEMES.length;
		return THEMES[nextThemeIndex];
	};

	const handleToggle = () => {
		setTheme(getNextTheme($theme));
	};

	const nextThemeLabel = $derived(getNextTheme($theme));
	const iconClass = $derived.by(() => {
		if ($theme === 'dark') return 'i-tabler-moon-stars';
		if ($theme === 'gruvvy') return 'i-tabler-flame';
		return 'i-tabler-sun-high';
	});
</script>

<div class={['theme-selector', className]}>
	<button
		type="button"
		class="theme-toggle"
		onclick={handleToggle}
		aria-label={`Switch to ${nextThemeLabel} theme`}
		title={`Switch to ${nextThemeLabel} theme`}
	>
		<span class={['theme-icon', iconClass]}></span>
	</button>
</div>

<style>
	.theme-selector {
		display: inline-flex;
		align-items: center;
		color: var(--theme-text);
	}

	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		background: var(--theme-surface-elevated);
		color: var(--theme-text);
		border: 1px dashed var(--theme-border-strong);
		border-radius: 0.5rem;
		font-size: 1rem;
		outline: none;
		cursor: pointer;
	}

	.theme-toggle:focus-visible {
		border-color: var(--theme-accent);
	}

	.theme-icon {
		font-size: 1rem;
	}
</style>
