<script lang="ts">
	import { animate } from 'animejs';
	import { untrack } from 'svelte';
	interface Props {
		class?: string;
	}

	const { class: className }: Props = $props();

	let waveEmojiRef: Element;

	$effect(() => {
		animate(waveEmojiRef!, {
			delay: 3,
			easing: 'easeInOutQuad',
			duration: 1300,
			rotate: [{ to: 20 }, { to: -5 }, {to: 0}],
		});
		untrack(() => {});
	});
</script>

<div class={['flex flex-col gap-1', className]}>
	<div class="text-xl font-semibold flex gap-1">Привет! <div bind:this={waveEmojiRef}>👋</div></div>
	<div>
		<div>Меня зовут Даня, я фуллстек-разработчик.</div>
		<div>Здесь я пишу свои заметки, делюсь опытом и многое другое.</div>
	</div>
</div>
