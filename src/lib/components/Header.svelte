<script lang="ts">
	import Link from '$components/Link.svelte';
	import { GITHUB_LINK, HABR_LINK, TELEGRAM_LINK } from '$lib/data/links';
	import { UmamiLinkEvent } from '$mod/umami';
	import TelegramFullscreenButton from './Header/TelegramFullscreenButton.svelte';
	import Logo from './Logo.svelte';
	import ThemeSelector from './ThemeSelector.svelte';

	interface Props {
		class?: string | string[];
		onmenu: () => void;
	}
	const { class: className = '', onmenu }: Props = $props();
</script>

<header class={['pr-2 xl:pr-0 flex items-center justify-between', className]}>
	<Logo />
	<div class="hidden sm:flex flex-col gap-2 items-end">
		<nav class="flex items-center justify-end gap-8">
			<ul class="flex gap-5 items-center">
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.ArticleListing}
						data-umami-event-place="header"
						class="relative !text-primary hover:!text-primary"
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
						class="relative !text-primary hover:!text-primary"
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
			<ThemeSelector />
		</nav>
		<aside>
			<ul class="flex text-sm gap-3 justify-end items-center">
				<li>
					<Link
						data-umami-event={UmamiLinkEvent.Social}
						data-umami-event-place="header"
						data-umami-event-type="telegram"
						class="!text-primary hover:!text-primary"
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
						class="!text-primary hover:!text-primary"
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
						class="!text-primary hover:!text-primary"
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
