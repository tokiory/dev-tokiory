<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLInputElement> {
		class?: string | string[];
		value: string;
	}
	let { class: className, value = $bindable(''), ...attrs }: Props = $props();
</script>

<input
	{...attrs}
	bind:value
	class={[
		'px-2 py-1 bg-inherit rounded-md border border-border-strong text-primary placeholder:text-secondary',
		className
	]}
/>
