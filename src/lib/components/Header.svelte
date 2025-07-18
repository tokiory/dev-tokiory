<script lang="ts">
	import Link from '$components/Link.svelte';
	import { GITHUB_LINK, HABR_LINK, TELEGRAM_LINK } from '$lib/data/links';
	import { UmamiLinkEvent } from '$mod/umami';
	import TelegramFullscreenButton from './Header/TelegramFullscreenButton.svelte';
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
		<nav>
			<ul class="flex gap-5 justify-end items-center">
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.ArticleListing}
						data-umami-event-place="header"
						class="relative"
						darker
						href="/articles"
					>
						Статьи
						<div
							class="outer-icon absolute -top-0.55 -right-3 i-tabler-arrow-up-right text-xs"
						></div>
					</Link>
				</li>
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.ChecklistItem}
						data-umami-event-place="header"
						class="relative"
						darker
						href="/checklist"
					>
						Чеклист
						<div
							class="outer-icon absolute -top-0.55 -right-3 i-tabler-arrow-up-right text-xs"
						></div>
					</Link>
				</li>
			</ul>
		</nav>
		<div class="border-b-1 border-dashed border-driftwood-800/70"></div>
		<aside>
			<ul class="flex text-sm gap-3 justify-end items-center">
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.Social}
						data-umami-event-place="header"
						data-umami-event-type="telegram"
						darker
						target="_blank"
						href={TELEGRAM_LINK}>Телеграм</Link
					>
				</li>
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.Social}
						data-umami-event-place="header"
						data-umami-event-type="github"
						darker
						target="_blank"
						href={GITHUB_LINK}>Гитхаб</Link
					>
				</li>
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.Social}
						data-umami-event-place="header"
						data-umami-event-type="habr"
						darker
						target="_blank"
						href={HABR_LINK}>Хабр</Link
					>
				</li>
			</ul>
		</aside>
	</div>
	<div class="sm:hidden">
		<TelegramFullscreenButton />
		<button aria-label="Menu" onclick={onmenu} class="py-1 pl-3 text-xl cursor-pointer">
			<div class="i-tabler-menu-2"></div>
		</button>
	</div>
</header>
