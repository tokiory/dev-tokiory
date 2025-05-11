<script lang="ts">
	import Resume from '$mod/cv/Resume.svelte';
	import EmployBanner from '$mod/cv/EmployBanner.svelte';
	import Sidebar from '$mod/cv/Sidebar.svelte';
	import { animate } from 'animejs';
	import { fadeUp } from '$lib/animations/fadeUp';
	import { isWorking } from '@/lib/modules/cv/data/resume';

	let resumeRef = $state<HTMLElement>();
	let sidebarRef = $state<HTMLElement>();
	let bannerRef = $state<HTMLElement>();

	$effect(() => {
		animate([resumeRef, sidebarRef, bannerRef], {
			...fadeUp
		});
	});
</script>

<svelte:head>
	<title>Даниил Шило | Резюме</title>
	<meta name="description" content="Резюме фулл-стек разработчика с 5-летним опытом" />
</svelte:head>

<main class="mt-12">
	{#if isWorking}
		<div class="opacity-0" bind:this={bannerRef}>
			<EmployBanner />
		</div>
	{/if}
	<div class={['flex flex-col-reverse lg:flex-row gap-8', isWorking && 'mt-6']}>
		<div class="opacity-0" bind:this={resumeRef}>
			<Resume />
		</div>
		<div class="opacity-0" bind:this={sidebarRef}>
			<Sidebar />
		</div>
	</div>
</main>
