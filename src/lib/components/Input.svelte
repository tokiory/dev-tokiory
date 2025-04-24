<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLInputElement> {
		class?: string | string[];
		value: string;
	}
	const { class: className, ...attrs }: Props = $props();
</script>

<input {...attrs} class={['px-2 py-1 bg-inherit border border-driftwood-600 rounded-md placeholder:text-driftwood-800/50', className]} />
