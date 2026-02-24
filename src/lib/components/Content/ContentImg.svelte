<script>
	import zoom from 'medium-zoom';

	const DIAGRAM_HINT_RE =
		/(diagram|scheme|schema|flow|pipeline|sequence|chart|graph|erd|uml|mermaid|architecture|topology|state|tree|mindmap|wireframe|map|steps?)/i;
	const LOGO_HINT_RE = /(logo|brand|icon)/i;

	const {
		src,
		alt = '',
		title = '',
		class: className = '',
		'data-diagram': dataDiagram,
		...restProps
	} = $props();

	const normalizedSrc = $derived(
		typeof src === 'string' ? src.split('#')[0].split('?')[0].toLowerCase() : ''
	);
	const textHints = $derived(`${alt} ${title} ${normalizedSrc}`.trim());
	const isSvgImage = $derived(/\.svg$/i.test(normalizedSrc));
	const hasDiagramHint = $derived(DIAGRAM_HINT_RE.test(textHints));
	const hasLogoHint = $derived(LOGO_HINT_RE.test(textHints));
	const hasExplicitDiagramHint = $derived(
		Boolean(dataDiagram) || /(^|\s)(diagram|invert-dark)(\s|$)/i.test(className)
	);
	const isLikelyDiagram = $derived(
		hasExplicitDiagramHint || hasDiagramHint || (isSvgImage && !hasLogoHint)
	);

	let imageRef = $state();

	const handleClick = () => {
		zoom(imageRef);
	};
</script>

<img
	bind:this={imageRef}
	onclick={handleClick}
	class={[
		'w-full block rounded-md mt-4 mb-6 content-img',
		className,
		isLikelyDiagram && 'content-img--diagram'
	]}
	data-diagram={isLikelyDiagram ? 'true' : undefined}
	{src}
	{alt}
	{title}
	{...restProps}
/>

<style>
	:global {
		.medium-zoom-overlay {
			z-index: 1000;
			background: theme('colors.stone.50') !important;
		}

		.medium-zoom-image {
			z-index: 1001;
		}
	}
</style>
