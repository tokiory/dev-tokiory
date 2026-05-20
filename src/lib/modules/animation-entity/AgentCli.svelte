<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		class?: string | string[];
	}

	const { class: className }: Props = $props();

	type Line = {
		id: number;
		type: 'input' | 'output' | 'status';
		text: string;
	};

	const commands = [
		'analyze task: "draft deployment plan"',
		'scan project structure',
		'read AGENTS.md',
		'plan next actions',
		'write implementation notes',
		'self-check output',
		'finalize response'
	];

	const outputs = [
		'Found 4 relevant modules.',
		'Detected API, UI and infra boundaries.',
		'Building concise execution plan...',
		'Cross-checking constraints...',
		'Response is consistent.',
		'Done.'
	];

	let lines = $state<Line[]>([]);
	let currentLine = $state('');
	let currentType = $state<Line['type']>('input');
	let nextLineId = 0;

	let typingTimer: ReturnType<typeof setTimeout> | null = null;
	let pauseTimer: ReturnType<typeof setTimeout> | null = null;

	const speed = 24;
	const maxLines = 5;

	function appendLine(type: Line['type'], text: string) {
		lines = [...lines, { id: nextLineId++, type, text }].slice(-maxLines);
	}

	function sleep(ms: number) {
		return new Promise((resolve) => {
			pauseTimer = setTimeout(resolve, ms);
		});
	}

	async function typeText(text: string, type: Line['type']) {
		currentLine = '';
		currentType = type;

		for (let i = 0; i < text.length; i++) {
			currentLine += text[i];
			await new Promise<void>((resolve) => {
				typingTimer = setTimeout(resolve, speed + Math.random() * 14);
			});
		}

		appendLine(type, text);
		currentLine = '';
	}

	async function loop() {
		lines = [{ id: nextLineId++, type: 'status', text: 'Agent initialized.' }];

		let index = 0;

		while (true) {
			const command = `$ ${commands[index % commands.length]}`;
			const output = outputs[index % outputs.length];

			await sleep(400);
			await typeText(command, 'input');

			await sleep(250 + Math.random() * 250);
			await typeText(output, 'output');

			if (index % 3 === 2) {
				await sleep(180);
				appendLine('status', 'Thinking...');
			}

			index += 1;
			await sleep(500 + Math.random() * 500);
		}
	}

	onMount(() => {
		loop();

		return () => {
			if (typingTimer) clearTimeout(typingTimer);
			if (pauseTimer) clearTimeout(pauseTimer);
		};
	});
</script>

<div class={['agent-shell', className]} aria-label="CLI agent illustration">
	<div class="screen">
		{#each lines as line (line.id)}
			<div class="line {line.type}">
				<span>{line.text}</span>
			</div>
		{/each}

		{#if currentLine}
			<div class="line {currentType}">
				<span>{currentLine}</span><span class="cursor">█</span>
			</div>
		{:else}
			<div class="line idle">
				<span class="cursor">█</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.agent-shell {
		width: 100%;
		height: 212px;
		overflow: hidden;
		background: var(--theme-surface);
		color: var(--theme-text);
		border: 1px solid var(--theme-border-strong);
		border-radius: 12px;
		font-family:
			'Martian Mono Variable', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			'Liberation Mono', 'Courier New', monospace;
	}

	.screen {
		height: 100%;
		padding: 18px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 10px;
		overflow: hidden;
	}

	.line {
		font-size: 14px;
		line-height: 1.5;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.line.output {
		color: var(--theme-text-soft);
		padding-left: 2ch;
	}

	.line.status {
		color: var(--theme-text-soft);
		font-style: italic;
	}

	.line.idle {
		min-height: 1.5em;
	}

	.cursor {
		display: inline-block;
		margin-left: 1px;
		animation: blink 0.95s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
