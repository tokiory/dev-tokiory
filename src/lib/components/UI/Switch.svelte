<script lang="ts">
	const { value = false, id = '', onchange }: Props = $props();

	interface Props {
		value?: boolean;
		id?: string;
		onchange?: (value: boolean) => void;
	}
</script>

<button
	class={[
		'w-10 h-5 shrink-0 rounded-[4px] border border-driftwood-700/40 relative',
		value ? 'bg-frangipani-100' : 'bg-driftwood-100/40'
	]}
	aria-label="Toggle switch"
	onclick={() => onchange?.(!value)}
	role="switch"
	{id}
	aria-checked={value}
>
	<div
		class={[
			'h-3 w-4 rounded-[3px] transition-transform bg-driftwood-700/90 left-1 top-.75 absolute',
			value && 'translate-x-3.5 bg-driftwood-700'
		]}
	></div>
</button>
