<script>
	import { page } from '$app/state';
</script>

<div class="h-screen w-full flex flex-col items-center justify-center">
	<object class="h-220px" type="image/svg+xml" data="/illustrations/dragon.svg"></object>
	<div class="text-center">
		<h1 class="text-3xl font-bold">
			{#if page.status === 404}
				Страница не найдена
			{:else}
				Что-то пошло не так...
			{/if}
		</h1>
		<a href="/" class="mt-8 block">
			<button class="py-1.5 p-1 border-2 border-dashed rounded-md border-driftwood-800/30 hover:border-driftwood-800/50 transition-colors px-6">На главную</button>
		</a>
	</div>
</div>
