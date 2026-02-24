<script>
	let { value = $bindable(''), class: className = '' } = $props();
</script>

<div class={className}>
	<div class="text-xs text-stone-900/50">Поиск</div>
	<input
		class={[
			'px-2 py-1 mt-0.5 rounded-md border border-stone-700 text-sm bg-transparent placeholder:text-stone-700 w-full'
		]}
		bind:value={value}
		type="text"
		placeholder="Напишите что-то..."
	/>
</div>
