<script lang="ts">
	interface VimCommand {
		title: string;
		description: string;
		keys: string[];
		action: string;
		delay?: number;
		context?: string;
		included?: boolean;
	}

	interface Props {
		commands: VimCommand[];
		class?: string;
	}

	const { commands, class: className }: Props = $props();

	let selectedCommand = $state(0);
	let keyElements: HTMLElement[] = [];

	let currentCommand = $derived(commands[selectedCommand]);

	function selectCommand(idx: number) {
		selectedCommand = idx;
	}

	const information = $derived([
		{ title: 'Действие', value: currentCommand.action },
		{
			title: 'Контекст',
			value: currentCommand.context || 'Везде'
		},
		{
			title: 'Установлено по дефолту',
			value: currentCommand.included ? 'Да' : 'Нет'
		}
	]);
</script>

<div
	class={[
		'grid lg:grid-cols-2 gap-8 py-4 px-3 bg-inherit border-2 w-full border-dashed border-driftwood-700/40 rounded-md',
		className
	]}
>
	<!-- Left Menu -->
	<div class="flex flex-col gap-2">
		{#each commands as command, idx (command.title)}
			<button
				class={[
					'w-full text-left flex flex-col gap-1 p-2 rounded-md border transition-all',
					selectedCommand === idx
						? 'border-driftwood-600'
						: 'border-driftwood-700/30 hover:border-driftwood-500'
				]}
				onclick={() => selectCommand(idx)}
			>
				<div class="font-medium text-sm">{command.title}</div>
				<div class="text-xs opacity-80">{command.description}</div>
			</button>
		{/each}
	</div>

	<div class="flex flex-col gap-2">
		<div class="rounded-md">
			<div class="flex flex-wrap gap-2">
				{#each currentCommand.keys as key, index (currentCommand.title + '-key-' + index)}
					<div
						bind:this={keyElements[index]}
						class="px-3 py-1 rounded-md font-mono text-sm border border-driftwood-700 border-dotted transition-all"
					>
						{key}
					</div>
				{/each}
			</div>
		</div>

		<div class="flex border border-driftwood-700 rounded-md p-2 flex-col gap-.5">
			{#each information as info (info.title)}
				<div class="text-sm"><span class="font-semibold">{info.title}</span>: {info.value}</div>
			{/each}
		</div>
	</div>
</div>
