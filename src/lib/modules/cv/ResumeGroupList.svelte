<script>
	const { children, class: className = '', gap = 'medium' } = $props();

	let gapClass = $state('gap-6');

	switch (gap) {
		case 'small':
			gapClass = 'gap-2';
			break;
		case 'extrasmall':
			gapClass = 'gap-0.5';
			break;
		case 'large':
			gapClass = 'gap-8';
			break;
		default:
			gapClass = 'gap-6';
	}
</script>

<div class={['flex flex-col', gapClass, className]}>{@render children?.()}</div>
