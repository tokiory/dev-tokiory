<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		title: string;
		class: string;
	}
	const { children, title = '', class: className = '' }: Props = $props();
</script>

<div class={['flex items-center gap-2', className]}>
	<img class="w-24 h-24 -scale-x-100 shrink-0 block rounded-lg" src="/illustrations/tokiory-transparent.png" />
	<div>
		<div class="font-semibold">{title}</div>
		<div class="[&>*:first-child]:!mt-0">
  		{@render children?.()}
		</div>
	</div>
</div>
