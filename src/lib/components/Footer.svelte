<script lang="ts">
	import Link from '$components/Link.svelte';

	interface Props {
		class?: string;
	}

	const {class: className}: Props = $props()
</script>

<footer class={["flex pt-4 flex-col items-center", className]}>
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
	<div class="flex gap-2 mt-3">
		<Link href="mailto:tokiory.work@gmail.com">Написать мне</Link>
		•
		<Link target="_blank" href="https://github.com/tokiory/_dev_tokiory">Исходный код</Link>
	</div>
</footer>
