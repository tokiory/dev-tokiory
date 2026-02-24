<script lang="ts">
	interface Props {
		progress: number;
		class?: string | string[];
	}

	const { progress, class: className }: Props = $props();
	const normalizedProgress = $derived(Math.max(0, Math.min(100, progress || 0)));
</script>

<div class={['flex gap-2 items-center text-sm', className]}>
	<div>Прогресс:</div>
	<div
		class="w-full h-2 relative rounded-md overflow-hidden"
		style:background-color="var(--theme-progress-track)"
		role="progressbar"
		aria-label="Прогресс"
		aria-valuenow={normalizedProgress}
		aria-valuemin={0}
		aria-valuemax={100}
	>
		<div
			style:width={normalizedProgress + '%'}
			style:background-color="var(--theme-progress-fill)"
			class="absolute left-0 top-0 rounded-md bottom-0"
		></div>
	</div>
	<div>{normalizedProgress.toFixed(1)}%</div>
</div>
