<script>
	import ContentH1 from '@/lib/components/Content/ContentH1.svelte';
	import ContentParagraph from '@/lib/components/Content/ContentParagraph.svelte';
	const {class: className = ''} = $props()
</script>

<section class={className}>
	<ContentH1 custommark>О себе</ContentH1>
	<ContentParagraph class="!mt-1"
		>Фулл-стек разработчик с 5-ти летним опытом в разработке корпоративных решений.</ContentParagraph
	>
	<ContentParagraph class="!mt-1"
		>Я работал над большими корпоративными платформами, мессенджерами, платформами для обучения,
		таск-трекерами, e-commerce, приложениями для онлайн-совещаний, консольными утилитами для
		использования внутри компаний и многим другим.
	</ContentParagraph>
	<ContentParagraph class="!mt-1">
		У меня есть опыт тимлидства, менторинга коллег, хорошо прокачан навык рефакторинга, а также
		разработки архитектур как для отдельных фич и модулей, так и для приложений и платформ в целом.</ContentParagraph
	>
</section>
