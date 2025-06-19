<script lang="ts">
	interface Props {
		progress: number;
		class?: string | string[];
	}

	const { progress, class: className }: Props = $props();
</script>

<div class={['flex gap-2 items-center text-sm', className]}>
	<div>Прогресс:</div>
	<div class="w-full h-2 relative bg-driftwood-700/10 rounded-md overflow-hidden">
		<div
			style:width={progress + '%'}
			class="absolute left-0 top-0 rounded-md bottom-0 bg-driftwood-700"
		></div>
	</div>
	<div>{progress.toFixed(1)}%</div>
</div>
