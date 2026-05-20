<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	interface Props extends HTMLAttributes<HTMLAnchorElement> {
		target?: string;
		darker?: boolean;
		download?: string | boolean;
		underline?: boolean;
		href: string;
		rel?: string;
		children?: Snippet;
		class?: string | string[];
	}

	let {
		href,
		target,
		darker,
		children,
		rel,
		underline,
		download,
		class: className,
		...attributes
	}: Props = $props();
</script>

<a
	{...attributes}
	{rel}
	{download}
	class={[
		'inline-block cursor-pointer transition-colors',
		darker
			? 'text-stone-700 hover:text-stone-900'
			: 'text-stone-500 hover:text-stone-700 active:text-stone-800',
		underline &&
			'relative before:content-[""] before:bottom-[.5px] before:left-0 before:right-0 before:absolute before:h-0.5 before:bg-current',
		className
	]}
	{href}
	target={target || '_self'}
>
	{@render children?.()}
</a>
