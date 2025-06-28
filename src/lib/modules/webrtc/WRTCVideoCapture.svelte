<script lang="ts">
	import Button from '@/lib/components/Button.svelte';
	import ContentH3 from '@/lib/components/Content/ContentH3.svelte';
	import ContentParagraph from '@/lib/components/Content/ContentParagraph.svelte';

	const { class: className = '' } = $props();

	let videoRef: HTMLVideoElement | null = $state(null);
	let isDisclamerVisible = $state(true);

	const startTranslation = async () => {
		isDisclamerVisible = false;
		await playVideoFromCamera();
	};

	async function playVideoFromCamera() {
		try {
			const constraints = { video: true };
			const stream = await navigator.mediaDevices.getUserMedia(constraints);
			videoRef!.srcObject = stream;
		} catch (error) {
			console.error('Error opening video camera.', error);
		}
	}

	const stopTranslation = async () => {
		if (videoRef && videoRef.srcObject) {
			const stream = videoRef.srcObject as MediaStream;
			stream.getTracks().forEach((track) => track.stop());
			videoRef.srcObject = null;
		}
		isDisclamerVisible = true;
	};
</script>

<div
	class={[
		'relative flex flex-col gap-2 border rounded-md overflow-hidden border-driftwood-700/40 justify-center items-center w-full h-[200px] lg:h-[400px]',
		isDisclamerVisible && 'p-4',
		className
	]}
>
	{#if isDisclamerVisible}
		<ContentH3 nospy custommark>Дисклеймер</ContentH3>
		<ContentParagraph class="text-sm text-center" custommark>
			Данный туториал будет запрашивать доступ к вашим медиа-устройствам (камере и микрофону).
		</ContentParagraph>
		<ContentParagraph custommark class="text-sm text-center">
			Данные не будут сохраняться и/или передаваться по сети Интернет.
		</ContentParagraph>
		<Button class="text-sm mt-4" onclick={startTranslation}>Запустить</Button>
	{:else}
		<video class="w-full" autoplay playsinline controls={false} bind:this={videoRef}></video>
		<div class="absolute bottom-2 left-2 right-2 flex gap-2">
			<Button onclick={stopTranslation} class="p-2 flex items-center gap-1">
				<div class="i-tabler-hand-stop" />
				Прекратить трансляцию
			</Button>
		</div>
	{/if}
</div>
