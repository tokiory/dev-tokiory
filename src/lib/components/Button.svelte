<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLButtonElement> {
		class?: string | string[];
		children?: Snippet;
		disabled?: boolean;
		outlined?: boolean;
	}
	const { class: className, children, outlined, disabled, ...attrs }: Props = $props();
</script>

<button
	{disabled}
	{...attrs}
	class={[
		'btn px-2 py-1 rounded-md appearance-none shadow-none',
		outlined ? 'btn--outlined' : 'btn--solid',
		disabled && 'opacity-75 cursor-not-allowed',
		className
	]}>{@render children?.()}</button
>

<style>
	.btn {
		border: 1px solid transparent;
		transition:
			background-color 120ms ease,
			color 120ms ease,
			border-color 120ms ease;
	}

	.btn--solid {
		background-color: var(--button-solid-bg);
		color: var(--button-solid-text);
		border-color: var(--button-solid-border);
	}

	.btn--solid:hover:enabled {
		background-color: var(--button-solid-bg-hover);
	}

	.btn--solid:active:enabled {
		background-color: var(--button-solid-bg-active);
	}

	.btn--outlined {
		background-color: var(--button-outline-bg);
		color: var(--button-outline-text);
		border-color: var(--button-outline-border);
	}

	.btn--outlined:hover:enabled {
		background-color: var(--button-outline-bg-hover);
	}

	.btn--outlined:active:enabled {
		background-color: var(--button-outline-bg-active);
	}

	.btn:focus-visible {
		outline: 2px solid var(--button-focus-ring);
		outline-offset: 2px;
	}
</style>
