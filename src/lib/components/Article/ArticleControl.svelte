<script lang="ts">
	import type { Article } from '@/lib/types';

	interface Props {
		meta: Article;
		class?: string;
	}

	const { meta, class: className = '' }: Props = $props();

	const handleShare = () => {
		const shareData = {
			title: 'Нашел крутую статью на /dev/tokiory, смотри:',
			text: meta.title,
			url: 'https://tokiory.vercel.app'
		};

		if (navigator.share) {
			navigator
				.share(shareData)
				.then(() => console.log('Shared!'))
				.catch((err) => console.error('Error:', err));
		}
	};
</script>

<div class={['flex gap-1 justify-end items-center', className]}>
	<div>
		<button
			class="flex items-center gap-2 text-sm text-stone-900/40 hover:text-stone-900/80 active:text-stone-900"
			onclick={handleShare}
			aria-label="Поделиться данной страницей"
		>
			<div class="i-tabler-share"></div>
			<div>Поделиться</div>
		</button>
	</div>
</div>
