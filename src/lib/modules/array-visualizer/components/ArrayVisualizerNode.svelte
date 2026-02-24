<script lang="ts">
	import type { Node } from '../types/node';

	const { value, active, cursor }: Node = $props();
</script>

<div class={['h-fit flex flex-col justify-center items-center']}>
	<div>{value}</div>
	<div
		class={[
			'h-2 w-12 rounded-md',
			active
				? 'bg-[var(--theme-av-node-active)]'
				: cursor
					? 'bg-[var(--theme-av-node-cursor)]'
					: 'bg-[var(--theme-av-node-base)]'
		]}
	></div>
</div>
