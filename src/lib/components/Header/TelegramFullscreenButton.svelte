<script>
	import { telegramMiniApp } from '@/lib/modules/telegram/mini-app';

	let isMaximized = $state(false);
	let isTMAInitialized = $derived(telegramMiniApp.isInitialized);

	const toggleFullscreen = async () => {
		if (!isTMAInitialized) return;

		if (!telegramMiniApp.viewportStore.isFullscreen) {
			await telegramMiniApp.viewportStore.maximize();
			isMaximized = true;
		} else {
			await telegramMiniApp.viewportStore.minimize();
			isMaximized = false;
		}
	};
</script>

{#if isTMAInitialized}
	<button
		onclick={toggleFullscreen}
		aria-label="Fullscreen"
		class="py-1 pl-3 sm:hidden text-xl cursor-pointer"
	>
		<div class={isMaximized ? 'i-tabler-minimize' : 'i-tabler-maximize'}></div>
	</button>
{/if}
