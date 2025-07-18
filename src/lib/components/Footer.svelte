<script lang="ts">
	import Link from '$components/Link.svelte';
	import { telegramMiniApp } from '$mod/telegram/mini-app';
	import { LinkEvent } from '@mod/umami';

	interface Props {
		class?: string;
	}

	const { class: className }: Props = $props();

	const writeMeLink = $derived(
		telegramMiniApp.isInitialized ? 'https://t.me/tokiory' : 'mailto:tokiory.work@gmail.com'
	);
</script>

<footer class={['flex pt-4 flex-col items-center', className]}>
	<div class="flex justify-center items-center">
		Сделано с&nbsp;<span class="h-4 i-tabler-heart-filled text-red-500"></span>&nbsp;и&nbsp;
		<a href="https://svelte.dev" target="_blank">
			<img
				class="h-4"
				alt="svelte icon"
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
			/>
		</a>
	</div>
	<div class="text-sm mt-1">© Даниил Шило, 2025</div>
	<div
		class="flex flex-col border-t border-driftwood-800/20 justify-center w-full border-dashed md:border-0 pt-2 md:pt-0 md:flex-row items-center gap-1 mt-3 md:gap-2 md:mt-2"
	>
		<Link href={writeMeLink}>Написать мне</Link>
		<span class="md:block hidden"> • </span>
		<Link href="/setup">Сетап</Link>
		<span class="md:block hidden"> • </span>
		<Link
			data-umami-event={LinkEvent.SourceCode}
			target="_blank"
			href="https://github.com/tokiory/dev-tokiory">Исходный код</Link
		>
		<span class="md:block hidden"> • </span>
		<Link target="_blank" href="/privacy">Политика конфиденциальности</Link>
	</div>
</footer>
