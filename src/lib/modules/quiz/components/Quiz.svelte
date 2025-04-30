<script lang="ts">
	import type { Variant } from '$mod/quiz/types/variant';
	import type { Snippet } from 'svelte';
	import QuizVariant from './QuizVariant.svelte';
	import Button from '@/lib/components/Button.svelte';

	interface Props {
		class?: string;
		variants: Variant[];
		multiple?: boolean;
		children?: Snippet;
		title: string;
	}

	const { variants, class: className, multiple, children, title }: Props = $props();

	let submitted = $state(false);
	let result = $state(false);
	let selected = $state<string[] | null>(null);

	const answer = $derived(
		variants.filter((variant) => variant.correct).map((variant) => variant.id)
	);

	const validateAnswer = () => {
    return answer.every((id) => selected?.includes(id));
	};

	const handleSelect = (variantId: string) => {
		if (multiple) {
			selected = [...(selected || []), variantId];
		} else {
			selected = [variantId];
		}
	};

	const handleSubmit = () => {
  	result = validateAnswer()
  	submitted = true;
	};

	const handleReset = () => {
		selected = null;
	};
</script>

<div class={['flex flex-col border rounded-md border-frangipani-800/30 gap-2 p-2', className]}>
	<div class="flex flex-col">
		<div class="text-lg">{title}</div>
		{@render children?.()}
	</div>
	{#each variants as variant (`variant-${variant.id}`)}
		<QuizVariant
			onselect={handleSelect}
			id={variant.id}
			variant={variant.variant}
			name={variant.name}
		/>
	{/each}
	{#if selected}
		<Button onclick={handleSubmit}>Выбрать</Button>
	{/if}
</div>
