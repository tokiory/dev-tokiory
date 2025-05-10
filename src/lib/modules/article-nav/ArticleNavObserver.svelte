<script lang="ts">
	import type { Heading } from './types/heading';

	interface Props {
		currentHeadingId: number;
		headings: Heading[];
		onupdateheading: (id: number) => void;
	}
	const { currentHeadingId, headings, onupdateheading }: Props = $props();

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const idx = headings.findIndex((h) => h.element === entry.target);
						if (idx !== -1) {
							onupdateheading(idx);
						}
					}
				});
			},
			{
				root: null,
				threshold: 0,
				rootMargin: '-10% 0px -80% 0px'
			}
		);

		headings.forEach((h) => {
			observer.observe(h.element);
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<div class="w-fit text-sm mt-1">
	{headings?.[currentHeadingId]?.text}
</div>
