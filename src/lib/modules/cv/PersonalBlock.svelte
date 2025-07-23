<script>
	import ContentH1 from '@/lib/components/Content/ContentH1.svelte';
	import Link from '@/lib/components/Link.svelte';
	import { personalInfo } from './data/sidebar';

	const links = [
		{
			title: personalInfo.email,
			icon: 'i-tabler-mail',
			link: `mailto:${personalInfo.email}`
		},
		{
			link: `https://${personalInfo.github}`,
			title: personalInfo.github,
			icon: 'i-tabler-brand-github'
		},
		{
			link: `https://t.me/${personalInfo.telegram}`,
			title: `t.me/@${personalInfo.telegram}`,
			icon: 'i-tabler-brand-telegram'
		},
		{
			link: '/cv/cv.pdf',
			title: 'Скачать резюме',
			icon: 'i-tabler-download'
		}
	];
</script>

<section class="flex lg:flex-col gap-4 lg:justify-end lg:w-[320px] shrink-0">
	<img src="/cv/avatar.jpeg" class="lg:ml-auto h-[140px] w-[140px] rounded-md" />
	<div class="flex flex-col items-start lg:items-end">
		<ContentH1 custommark>{personalInfo.name}</ContentH1>
		{#each links as { title, icon, link } (link)}
			<Link class="flex flex-row-reverse lg:flex-row gap-1 items-center justify-start lg:justify-end lg:text-right" href={link}
				><div>{title}</div>
				<div class={['line-height-none', icon]} /></Link
			>
		{/each}
	</div>
</section>
