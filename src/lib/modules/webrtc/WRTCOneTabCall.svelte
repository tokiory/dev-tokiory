<script lang="ts">
	import Button from '@/lib/components/Button.svelte';
	import ContentH3 from '@/lib/components/Content/ContentH3.svelte';
	import ContentParagraph from '@/lib/components/Content/ContentParagraph.svelte';

	const { class: className = '' } = $props();

	let isDisclaimerVisible = $state(true);

	let localVideoRef = $state<HTMLVideoElement | null>(null);
	let remoteVideoRef = $state<HTMLVideoElement | null>(null);

	let localStream = $state<MediaStream | null>(null);
	let remoteStream = $state<MediaStream | null>(null);

	let addressePC = $state<RTCPeerConnection | null>(null);
	let addressPC = $state<RTCPeerConnection | null>(null);

	const start = async () => {
		localStream = await window.navigator.mediaDevices.getUserMedia({ video: true });
		addressePC = new RTCPeerConnection({});
		addressPC = new RTCPeerConnection({});

		addressePC.addEventListener('icecandidate', (event) => {
			addressPC?.addIceCandidate(event.candidate);
		});

		addressPC.addEventListener('icecandidate', (event) => {
			addressePC?.addIceCandidate(event.candidate);
		});

		addressPC.addEventListener('track', (event) => {
			if (event.streams && event.streams.length > 0) {
				remoteStream = event.streams[0];
			} else if (event.track.kind === 'video') {
				remoteStream = new MediaStream([event.track]);
			}
		});
		isDisclaimerVisible = false;
	};

	const call = async () => {
		if (!(localStream && addressePC && addressPC)) {
			console.log("Can't call, no stream or peer connections", {
				localStream,
				addressePC,
				addressPC
			});
			return;
		}

		if (remoteStream) {
			return;
		}

		addressePC.addTrack(localStream.getVideoTracks()[0]);

		const offer = await addressePC.createOffer();
		addressePC.setLocalDescription(offer);
		addressPC.setRemoteDescription(offer);

		const answer = await addressPC.createAnswer();
		addressPC.setLocalDescription(answer);
		addressePC.setRemoteDescription(answer);
	};

	const hangup = () => {
		if (remoteStream) {
			remoteStream.getTracks().forEach((track) => track.stop());
			remoteStream = null;
		}

		if (localStream) {
			localStream.getTracks().forEach((track) => track.stop());
			localStream = null;
		}

		if (addressePC) {
			addressePC.close();
			addressePC = null;
		}

		if (addressPC) {
			addressPC.close();
			addressPC = null;
		}

		isDisclaimerVisible = true;
	};

	$effect(() => {
		if (localVideoRef && localStream) {
			localVideoRef.srcObject = localStream;
		}
	});

	$effect(() => {
		console.log('trigger');
		if (remoteVideoRef && remoteStream) {
			remoteVideoRef.srcObject = remoteStream;
		}
	});
</script>

<div
	class={[
		'relative flex flex-col gap-2 border rounded-md overflow-hidden border-driftwood-700/40 justify-center items-center w-full h-[200px] lg:h-[400px]',
		isDisclaimerVisible && 'p-4',
		className
	]}
>
	{#if isDisclaimerVisible}
		<ContentH3 nospy custommark>Дисклеймер</ContentH3>
		<ContentParagraph class="text-sm text-center" custommark>
			Данный туториал будет запрашивать доступ к вашим медиа-устройствам (камере и микрофону).
		</ContentParagraph>
		<ContentParagraph custommark class="text-sm text-center">
			Данные не будут сохраняться и/или передаваться по сети Интернет.
		</ContentParagraph>
		<Button class="text-sm mt-4" onclick={start}>Запустить</Button>
	{:else}
		<div class="flex flex-nowrap gap-4">
			<div class="shrink-0">
				<video
					class="h-[280px] rounded-md"
					autoplay
					playsinline
					controls={false}
					bind:this={localVideoRef}
				></video>
				<ContentParagraph class="text-sm font-semibold mt-1 text-center" custommark>Вы</ContentParagraph>
			</div>
			{#if remoteStream}
				<div>
					<video
						class="h-[280px] rounded-md"
						autoplay
						playsinline
						controls={false}
						bind:this={remoteVideoRef}
					></video>
					<ContentParagraph class="text-sm font-semibold mt-1 text-center" custommark
						>Ваш злой троюродный кузен</ContentParagraph
					>
				</div>
			{/if}
		</div>
		<div class="absolute bottom-2 left-2 right-2 flex gap-2">
			<Button onclick={hangup} class="p-2 flex items-center gap-1">
				<div class="i-tabler-hand-stop" />
				Прекратить трансляцию
			</Button>
			<Button disabled={!!remoteStream} onclick={call} class="p-2 flex items-center gap-1">
				<div class="i-tabler-phone" />
				Позвонить
			</Button>
		</div>
	{/if}
</div>
