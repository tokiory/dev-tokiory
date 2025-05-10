<script>
	import { getContext } from 'svelte';
	import { TABULATOR_CONTEXT } from './data/contexts';

	const { children, title = '(Не обозначено)', class: className = '' } = $props();

	const { register, isActive } = getContext(TABULATOR_CONTEXT);

	const idx = register({
		title
	});
</script>

<!-- TODO: Yup, it's bad as fuck, 'cause changing index will trigger update of all tabs -->
<div class={['grow shrink-0 w-full', !isActive(idx) && 'hidden', className]}>
	{@render children?.()}
</div>
