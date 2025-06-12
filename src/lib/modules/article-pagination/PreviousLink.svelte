<script>
	import PaginationLink from './PaginationLink.svelte';

	const { class: className = '', slug = '', title = '' } = $props();
</script>

<PaginationLink url={`/${slug}`} class={['mr-auto', className]}>
	<div class="flex flex-col">
		<div class="flex items-center gap-1">
			<div class="i-tabler-arrow-left"></div>
			<div class="text-sm">
				{title}
			</div>
		</div>
		<div class="sm:ml-auto text-[10px]">Предыдущая статья</div>
	</div>
</PaginationLink>
