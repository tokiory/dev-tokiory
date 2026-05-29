<script lang="ts">
	import { settings, setDyslexiaMode, setSerifFont } from '$mod/settings';
	import Switch from '$components/UI/Switch.svelte';

	let open = $state(false);
	let panelRef = $state<HTMLDivElement | null>(null);

	const togglePanel = (e: Event) => {
		e.stopPropagation();
		open = !open;
	};

	const handleClickOutside = (e: MouseEvent) => {
		if (panelRef && !panelRef.contains(e.target as Node)) {
			open = false;
		}
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			open = false;
		}
	};

	const handleShare = async () => {
		const url = window.location.href;

		if (navigator.share) {
			try {
				await navigator.share({ url });
			} catch {
				// user cancelled or share failed
			}
		} else if (navigator.clipboard) {
			await navigator.clipboard.writeText(url);
		}

		open = false;
	};

	$effect(() => {
		if (open) {
			document.addEventListener('click', handleClickOutside);
			document.addEventListener('keydown', handleKeydown);
		} else {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="settings-button-wrapper">
	<button
		type="button"
		class="settings-toggle"
		onclick={togglePanel}
		aria-label="Настройки"
		title="Настройки"
		aria-expanded={open}
	>
		<span class="i-tabler-settings settings-icon"></span>
	</button>

	{#if open}
		<div class="settings-panel" bind:this={panelRef}>
			<div class="settings-row">
				<span class="settings-label">Режим дислексии</span>
				<Switch
					id="dyslexia-mode"
					value={$settings.dyslexiaMode}
					onchange={setDyslexiaMode}
				/>
			</div>

			<div class="settings-row">
				<span class="settings-label">Серифный шрифт</span>
				<Switch
					id="serif-font"
					value={$settings.serifFont}
					onchange={setSerifFont}
				/>
			</div>

			<div class="settings-row">
				<span class="settings-label">Поделиться</span>
				<button
					type="button"
					class="share-button"
					onclick={handleShare}
					aria-label="Поделиться ссылкой"
					title="Поделиться"
				>
					<span class="i-tabler-share-2 share-icon"></span>
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.settings-button-wrapper {
		position: relative;
		display: inline-flex;
	}

	.settings-toggle {
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

	.settings-toggle:focus-visible {
		border-color: var(--theme-accent);
	}

	.settings-icon {
		font-size: 1rem;
	}

	.settings-panel {
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		min-width: 220px;
		background: var(--theme-surface-elevated);
		border: 1px dashed var(--theme-border-strong);
		border-radius: 0.5rem;
		padding: 0.5rem;
		z-index: 50;
	}

	.settings-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.5rem 0.25rem;
	}

	.settings-row:not(:last-child) {
		border-bottom: 1px dashed var(--theme-border-strong);
	}

	.settings-label {
		color: var(--theme-text);
		font-size: 0.875rem;
	}

	.share-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		background: var(--theme-surface-elevated);
		color: var(--theme-text);
		border: 1px dashed var(--theme-border-strong);
		border-radius: 0.375rem;
		font-size: 0.875rem;
		outline: none;
		cursor: pointer;
	}

	.share-button:focus-visible {
		border-color: var(--theme-accent);
	}

	.share-icon {
		font-size: 0.875rem;
	}
</style>
