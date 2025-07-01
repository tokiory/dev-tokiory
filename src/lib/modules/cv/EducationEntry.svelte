<script lang="ts">
	import type { Education } from '$mod/cv/types';

	interface Props {
		education: Education;
	}

	const { education }: Props = $props();
	const { degree, major, institution } = $derived(education);
</script>

<div>
	<div class="font-semibold">
		{degree}: {major}
	</div>
	<div>
		{institution}
	</div>
</div>

<style>
	div {
		line-height: 1.5;
	}
</style>
