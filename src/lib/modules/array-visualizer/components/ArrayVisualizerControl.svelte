<script lang="ts">
	import Input from '$components/Input.svelte';
	import Button from '$components/Button.svelte';
	import type { FormEventHandler } from 'svelte/elements';

	interface Props {
		class?: string | string[];
		playing?: boolean;
		repeating?: boolean;
		speed: number;
		input: string;
		oninputchange: (value: string) => void;
		onchangespeed: () => void;
		onrepeatchange: (state: boolean) => void;
		onrandomize: () => void;
		onstop: () => void;
		onpause: () => void;
		onplay: () => void;
	}

	const {
		class: className,
		playing,
		repeating,
		speed,
		input,
		oninputchange,
		onchangespeed,
		onrepeatchange,
		onrandomize,
		onstop,
		onpause,
		onplay
	}: Props = $props();

	const handleInput: FormEventHandler<HTMLInputElement> = ($event) => {
		oninputchange(($event.target as HTMLInputElement).value);
	};
</script>

<div class={['flex gap-2', className]}>
	<Input value={input} oninput={handleInput} placeholder="12, 27, 348, ..." />
	<Button class={repeating ? '!bg-lime-800 hover:!bg-lime-900' : ''} title="Повторить" onclick={() => onrepeatchange(!repeating)}
		><div aria-label="Repeat" class="i-tabler-repeat"></div></Button
	>
	<Button title="Рандомизировать" onclick={onrandomize}
		><div aria-label="Randomize" class="i-tabler-ikosaedr"></div></Button
	>
	<Button title="Остановить" onclick={onstop}
		><div aria-label="Stop" class="i-tabler-square"></div></Button
	>
	{#if playing}
		<Button title="Пауза" onclick={onpause}
			><div aria-label="Pause" class="i-tabler-pause"></div></Button
		>
	{:else}
		<Button title="Воспроизвести" onclick={onplay}
			><div aria-label="Play" class="i-tabler-play"></div></Button
		>
	{/if}
	<Button title="Скорость" onclick={onchangespeed}>{speed}<span class="text-sm">x</span></Button>
</div>
