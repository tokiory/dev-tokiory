<script lang="ts">
	import type { Node } from './types';

	const { value, active, cursor }: Node = $props();
</script>

<div class={['h-fit flex flex-col justify-center items-center']}>
	<div>{value}</div>
	<div
		class={[
			'h-2 w-12 rounded-md ',
			active ? 'bg-stone-700' : cursor ? 'bg-stone-500' : 'bg-stone-700'
		]}
	></div>
</div>
