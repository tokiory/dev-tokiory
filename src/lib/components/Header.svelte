<script lang="ts">
	import Link from '$components/Link.svelte';
	import { GITHUB_LINK, HABR_LINK, TELEGRAM_LINK } from '$lib/data/links';
	import Logo from './Logo.svelte';

	interface Props {
		class?: string;
	}
	const { class: className = '' }: Props = $props();
</script>

<header class={['flex items-center justify-between', className]}>
	<Logo />
	<div class="flex flex-col gap-1">
		<ul class="flex gap-3 justify-end items-center">
			<li>
				<Link class="relative" darker target="_blank" href="/articles">
					Статьи
					<div class="outer-icon absolute -top-0.75 -right-3.5 i-tabler-arrow-up-right text-xs"></div>
				</Link>
			</li>
		</ul>
		<div class="border-b-1 border-dashed border-driftwood-800/70"></div>
		<ul class="flex text-sm gap-3 justify-end items-center">
			<li><Link darker target="_blank" href={TELEGRAM_LINK}>Телеграм</Link></li>
			<li><Link darker target="_blank" href={GITHUB_LINK}>Гитхаб</Link></li>
			<li><Link darker target="_blank" href={HABR_LINK}>Хабр</Link></li>
		</ul>
	</div>
</header>
