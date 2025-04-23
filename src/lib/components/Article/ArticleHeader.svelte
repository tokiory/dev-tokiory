<script lang="ts">
	import ArticleTitle from './ArticleTitle.svelte';

	interface Props {
		title: string;
		description: string;
	}

	const { title, description }: Props = $props();
</script>

<hgroup>
	<ArticleTitle {title} />
	<div class="whitespace-pre-line text-driftwood-700">{description}</div>
</hgroup>
