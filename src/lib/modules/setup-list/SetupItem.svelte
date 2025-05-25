<script lang="ts">

	interface Props {
		class?: string;
		icon: string;
		label: string;
		value: string;
		link?: string;
	}
	const { class: className = '', icon, label, value, link }: Props = $props();
</script>

<li class={['flex flex-col md:flex-row gap-1 md:items-center', className]}>
  <div class="flex items-center gap-1">
    <div class="inline-block h-4 w-4 shrink-0 {icon}"></div>
	<span class="font-semibold">{label}:</span>
  </div>
	{#if link}
		<a
			href={link}
			target="_blank"
			class="cursor-pointer w-fit line-height-[1.3] border-b-1.5 hover:text-driftwood-700 border-dashed border-driftwood-800/40 hover:border-driftwood-800/60"
		>
			{value}
		</a>
	{:else}
		<span>{value}</span>
	{/if}
</li>
