<script>
	let { value = $bindable(''), class: className = '' } = $props();
</script>

<div class={className}>
	<div class="text-xs text-secondary">Поиск</div>
	<input
		class={[
			'px-2 py-1 mt-1.5 rounded-md border border-border-strong text-sm text-primary bg-transparent placeholder:text-secondary w-full'
		]}
		bind:value
		type="text"
		placeholder="Напишите что-то..."
	/>
</div>
