<script>
	import { telegramMiniApp } from '@/lib/modules/telegram/mini-app';

	let isMaximized = $state(false);
	let isViewportReady = $derived(telegramMiniApp.viewportStore.isReady);

	const toggleFullscreen = async () => {
		if (!isViewportReady) return;

		if (!telegramMiniApp.viewportStore.isFullscreen) {
			await telegramMiniApp.viewportStore.maximize();
			isMaximized = true;
		} else {
			await telegramMiniApp.viewportStore.minimize();
			isMaximized = false;
		}
	};
</script>

{#if isViewportReady}
	<button
		onclick={toggleFullscreen}
		aria-label="Fullscreen"
		class="py-1 pl-3 sm:hidden text-xl cursor-pointer"
	>
		<div class={isMaximized ? 'i-tabler-minimize' : 'i-tabler-maximize'}></div>
	</button>
{/if}
