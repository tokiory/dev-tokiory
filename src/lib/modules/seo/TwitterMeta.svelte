<script>
	const { title, description, image } = $props();
</script>

<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={image} />
<meta property="twitter:image:height" content="512" />
<meta property="twitter:image:width" content="1024" />
<meta property="twitter:card" content="summary_large_image" />
