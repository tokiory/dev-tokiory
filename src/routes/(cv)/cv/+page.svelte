<script lang="ts">
	import Resume from '$mod/cv/Resume.svelte';
	import EmployBanner from '$mod/cv/EmployBanner.svelte';
	import Sidebar from '$mod/cv/Sidebar.svelte';
	import { animate } from 'animejs';
	import { fadeUp } from '$lib/animations/fadeUp';
	import { isWorking } from '@/lib/modules/cv/data/resume';
	import PersonalBlock from '@/lib/modules/cv/PersonalBlock.svelte';
	import DescriptionBlock from '@/lib/modules/cv/DescriptionBlock.svelte';

	let headingRef = $state<HTMLElement>();
	let contentRef = $state<HTMLElement>();
	let bannerRef = $state<HTMLElement>();

	$effect(() => {
		animate([headingRef, contentRef, bannerRef], {
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
	<div
		bind:this={headingRef}
		class={['opacity-0 flex flex-col-reverse lg:flex-row gap-8', isWorking && 'mt-6']}
	>
		<DescriptionBlock />
		<PersonalBlock />
	</div>

	<div bind:this={contentRef} class="opacity-0 mt-8 flex flex-col-reverse lg:flex-row gap-8">
		<Resume />
		<Sidebar />
	</div>
</main>
