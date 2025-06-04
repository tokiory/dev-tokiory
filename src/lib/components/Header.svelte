<script lang="ts">
	import Link from '$components/Link.svelte';
	import { GITHUB_LINK, HABR_LINK, TELEGRAM_LINK } from '$lib/data/links';
	import Logo from './Logo.svelte';

	interface Props {
		class?: string;
		onmenu: () => void;
	}
	const { class: className = '', onmenu }: Props = $props();
</script>

<header class={['pr-2 xl:pr-0 flex items-center justify-between', className]}>
	<Logo />
	<div class="hidden sm:flex flex-col gap-1">
		<ul class="flex gap-3 justify-end items-center">
			<li>
				<Link class="relative" darker target="_blank" href="/articles">
					Статьи
					<div
						class="outer-icon absolute -top-0.75 -right-3.5 i-tabler-arrow-up-right text-xs"
					></div>
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
	<button aria-label="Menu" onclick={onmenu} class="py-1 pl-3 sm:hidden text-xl cursor-pointer">
		<div class="i-tabler-menu-2"></div>
	</button>
</header>
