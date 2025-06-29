<script>
	import ContentH1 from '@/lib/components/Content/ContentH1.svelte';
	import Link from '@/lib/components/Link.svelte';
	import { personalInfo } from './data/sidebar';
</script>

<section class="text-right flex flex-col lg:w-[320px] shrink-0">
	<ContentH1 custommark>{personalInfo.name}</ContentH1>
	<Link class="flex gap-1 items-center justify-end" href="mailto:{personalInfo.email}"
		><div>{personalInfo.email}</div>
		<div class="i-tabler-mail" /></Link
	>
	<Link
		class="flex gap-1 items-center justify-end"
		href="https://{personalInfo.github}"
		target="_blank"
		rel="noopener noreferrer"
		><div>{personalInfo.github}</div>
		<div class="line-height-none i-tabler-brand-github" /></Link
	>
	<Link
		class="flex gap-1 items-center justify-end"
		href="https://t.me/{personalInfo.telegram}"
		target="_blank"
		rel="noopener noreferrer"
		><div>t.me/@{personalInfo.telegram}</div>
		<div class="line-height-none i-tabler-brand-telegram" /></Link
	>
	<Link
		class="flex gap-1 items-center justify-end"
		download="Шило Даниил, Fullstack Engineer.pdf"
		href="/cv.pdf"
		target="_blank"
		rel="noopener noreferrer"
		><div>Скачать резюме</div>
		<div class="line-height-none i-tabler-download" /></Link
	>
</section>
