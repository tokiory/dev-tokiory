<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLTextAreaElement> {
		class?: string | string[];
		value: string;
		readonly?: boolean;
		autoresize?: boolean;
	}

	let { class: className, autoresize, value = $bindable(''), ...attrs }: Props = $props();

	let textareaElement = $state<HTMLTextAreaElement>()
	const autoresizeArea = () => {
		const PADDING = 8;
		if (!textareaElement) return;
		textareaElement.style.height = 'auto';
		textareaElement.style.height = textareaElement.scrollHeight + PADDING + 'px';
	};

	$effect(() => {
	  if (value && autoresize) autoresizeArea();

	})

	onMount(() => {
		if (autoresize) autoresizeArea();
	});
</script>

<textarea
	bind:this={textareaElement}
	bind:value
	{...attrs}
	class={[
		'px-2 py-1 w-full bg-inherit border border-stone-600 rounded-md placeholder:text-stone-800/50',
		autoresize && 'resize-none',
		className
	]}
></textarea>
