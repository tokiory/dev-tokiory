<script>
	import PaginationLink from './PaginationLink.svelte';

	const { class: className = '', slug = '', title = '' } = $props();
</script>

<PaginationLink url={`/${slug}`} class={['ml-auto', className]}>
	<div class="flex flex-col">
		<div class="flex items-center gap-1">
			<div class="text-sm">
				{title}
			</div>
			<div class="i-tabler-arrow-right"></div>
		</div>
		<div class="text-[10px]">Следующая статья</div>
	</div>
</PaginationLink>
