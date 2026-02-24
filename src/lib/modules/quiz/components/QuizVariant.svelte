<script lang="ts">
	const { id, name, onselect, variant } = $props();

	let additionalClass = $state('');

	switch (variant) {
		case 'correct':
			additionalClass = 'bg-lime-800/30';
			break;
		case 'incorrect':
			additionalClass = 'bg-rose-800/30';
			break;
		case 'selected':
			additionalClass = 'border-stone-800/70';
			break;
		default:
			additionalClass = 'border-stone-800/30';
	}
</script>

<button
	onclick={() => onselect(id)}
	class={[
		'border rounded-md transition-colors border-stone-800/30 px-2 py-1',
		additionalClass
	]}
>
	{name}
</button>
