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
	<ul class="flex gap-3 items-center">
		<li><Link target="_blank" href={TELEGRAM_LINK} darker>Телеграм</Link></li>
		<li><Link target="_blank" href={GITHUB_LINK} darker>Гитхаб</Link></li>
		<li><Link target="_blank" href={HABR_LINK} darker>Хабр</Link></li>
	</ul>
</header>
