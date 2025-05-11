<script>
	import ContentH1 from '@/lib/components/Content/ContentH1.svelte';
	import ContentH2 from '@/lib/components/Content/ContentH2.svelte';
	import ContentLi from '@/lib/components/Content/ContentLi.svelte';
	import ContentParagraph from '@/lib/components/Content/ContentParagraph.svelte';
	import ContentUl from '@/lib/components/Content/ContentUl.svelte';
</script>

<div>
	<ContentH1>Политика конфиденциальности</ContentH1>
	<ContentParagraph>Дата публикации: 07.05.2025</ContentParagraph>

	<ContentParagraph>
		Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации, которую
		пользователь предоставляет при использовании данного сайта.
	</ContentParagraph>

	<ContentH2>1. Общие положения</ContentH2>
	<ContentParagraph>
		1.1. Владелец сайта (далее — "Администрация") уважает право пользователей на конфиденциальность.
	</ContentParagraph>

	<ContentParagraph>
		1.2. На сайте используется аналитическая система Umami, которая собирает обезличенные данные о
		посещениях страниц и технические характеристики устройства пользователя.
	</ContentParagraph>

	<ContentParagraph>
		1.3. Umami не использует cookies и не сохраняет полные IP-адреса.
	</ContentParagraph>

	<ContentH2>2. Состав собираемой информации</ContentH2>
	<ContentUl>
		<ContentLi>Посещённые страницы</ContentLi>
		<ContentLi>Тип устройства и браузера</ContentLi>
		<ContentLi>Разрешение экрана</ContentLi>
		<ContentLi>Примерное географическое местоположение (на основе IP без его хранения)</ContentLi>
	</ContentUl>

	<ContentH2>3. Цель сбора данных</ContentH2>
	<ContentParagraph>
		Сбор обезличенных статистических данных необходим для анализа производительности сайта и его
		улучшения.
	</ContentParagraph>

	<ContentH2>4. Хранение и защита информации</ContentH2>
	<ContentParagraph>
		Данные хранятся на сервере Администрации или его технического партнёра. Доступ к данным защищён
		техническими и организационными мерами.
	</ContentParagraph>

	<ContentH2>5. Контакты</ContentH2>
	<ContentParagraph>
		Если у вас есть вопросы, вы можете связаться с Администрацией:
	</ContentParagraph>
	<ContentParagraph
		>Администратор: Шило Даниил Вадимович<br />
		Адрес электронной почты: <a href="mailto:tokiory.work@gmail.com">tokiory.work@gmail.com</a>
	</ContentParagraph>
</div>
