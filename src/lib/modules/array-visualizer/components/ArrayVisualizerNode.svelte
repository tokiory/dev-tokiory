<script lang="ts">
	import type { Node } from './types';

	const { value, active, cursor }: Node = $props();
</script>

<div class={['h-fit flex flex-col justify-center items-center']}>
	<div>{value}</div>
	<div
		class={[
			'h-2 w-12 rounded-md ',
			active ? 'bg-lime-600' : cursor ? 'bg-driftwood-500' : 'bg-driftwood-700'
		]}
	></div>
</div>
