<script lang="ts">
	import Switch from '$lib/components/UI/Switch.svelte';
	import type { Article } from '@/lib/types';

	let isLatexMode = $state(false);
	let isDyslexiaMode = $state(false);

	interface Props {
		meta: Article;
		class?: string;
	}

	const { meta, class: className = '' }: Props = $props();

	$effect(() => {
		const isModeTurnedOn = isLatexMode;
		import('@/styles/latex-mode.css').then(() => {
			if (isModeTurnedOn) {
				isDyslexiaMode = false;
				document.body.classList.add('latex-mode');
			} else {
				document.body.classList.remove('latex-mode');
			}
		});
	});

	$effect(() => {
		const isModeTurnedOn = isDyslexiaMode;
		import('@/styles/dyslexia-mode.css').then(() => {
			if (isModeTurnedOn) {
				isLatexMode = false;
				document.body.classList.add('dyslexia-mode');
			} else {
				document.body.classList.remove('dyslexia-mode');
			}
		});
	});

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

<div class={['flex gap-1 justify-between items-center', className]}>
	<div class="flex gap-4">
		<div class="text-sm items-center flex gap-2">
			<Switch onchange={(value) => (isLatexMode = value)} value={isLatexMode} id="latex-mode" />
			<label
				title="Latex-режим был придуман для тех, кто привык читать научные статьи и/или имеет проблемы с чтением шрифтов без засечек"
				for="latex-mode"
				class="select-none cursor-help"
			>
				LaTeX-режим
			</label>
		</div>
		<div class="text-sm items-center flex gap-2">
			<Switch
				onchange={(value) => (isDyslexiaMode = value)}
				value={isDyslexiaMode}
				id="dyslexia-mode"
			/>
			<label
				title="Режим дислексии был придуман для тех, кто имеет проблемы с чтением, он не влияет на шрифт для кода"
				for="dyslexia-mode"
				class="select-none cursor-help"
			>
				Режим дислексии
			</label>
		</div>
	</div>
	<div>
		<button
			class="flex items-center gap-2 text-sm text-driftwood-900/40 hover:text-driftwood-900/80 active:text-driftwood-900"
			onclick={handleShare}
			aria-label="Поделиться данной страницей"
		>
			<div class="i-tabler-share"></div>
			<div>Поделиться</div>
		</button>
	</div>
</div>
