<script lang="ts">
	import ArticleNav from '$mod/article-nav/ArticleNav.svelte';
 	const { children } = $props();
</script>

<ArticleNav>
	{@render children?.()}
</ArticleNav>
