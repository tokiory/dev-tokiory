<script>
	import ContentH1 from '@/lib/components/Content/ContentH1.svelte';
	import ContentH2 from '@/lib/components/Content/ContentH2.svelte';
	import ContentLi from '@/lib/components/Content/ContentLi.svelte';
	import ContentParagraph from '@/lib/components/Content/ContentParagraph.svelte';
	import ContentUl from '@/lib/components/Content/ContentUl.svelte';
	import Link from '@/lib/components/Link.svelte';
</script>

<div>
	<ContentH1>Политика конфиденциальности</ContentH1>
	<ContentParagraph>Дата публикации: 07.05.2025</ContentParagraph>
	<ContentParagraph>Дата обновления: 18.07.2025</ContentParagraph>

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

	<ContentParagraph>
		1.4. Для мониторинга ошибок и улучшения работы сайта используется сервис Sentry, предоставляемый
		Functional Software, Inc.
	</ContentParagraph>

	<ContentH2>2. Состав собираемой информации</ContentH2>
	<ContentUl>
		<ContentLi>Посещённые страницы</ContentLi>
		<ContentLi>Тип устройства и браузера</ContentLi>
		<ContentLi>Разрешение экрана</ContentLi>
		<ContentLi>Примерное географическое местоположение (на основе IP без его хранения)</ContentLi>
		<ContentLi
			>Данные об ошибках, включая stack traces, URL страниц и параметры запросов (через Sentry)</ContentLi
		>
	</ContentUl>

	<ContentH2>3. Цель сбора данных</ContentH2>
	<ContentParagraph>
		Сбор обезличенных статистических данных через Umami необходим для анализа производительности
		сайта и его улучшения. Данные, собранные Sentry, используются для выявления и устранения ошибок
		в работе сайта.
	</ContentParagraph>

	<ContentH2>4. Использование сервиса Sentry</ContentH2>
	<ContentParagraph>
		Sentry собирает технические данные, такие как тип устройства, браузера, URL страниц, а также
		информацию об ошибках (stack traces, параметры запросов). Эти данные помогают нам выявлять и
		устранять проблемы в работе сайта.
	</ContentParagraph>
	<ContentParagraph>
		Sentry не собирает персональные данные, если они не передаются в настройках нашего приложения.
		Мы минимизируем передачу чувствительной информации, исключая личные данные, такие как имена или
		адреса электронной почты. Данные обрабатываются в соответствии с политикой конфиденциальности
		Sentry (<Link href="https://sentry.io/privacy/">https://sentry.io/privacy/</Link>) и защищены
		техническими мерами.
	</ContentParagraph>

	<ContentH2>5. Хранение и защита информации</ContentH2>
	<ContentParagraph>
		Данные хранятся на серверах Администрации или её технических партнёров (Umami, Sentry). Доступ к
		данным защищён техническими и организационными мерами.
	</ContentParagraph>

	<ContentH2>6. Права пользователей</ContentH2>
	<ContentParagraph>
		Пользователи могут запросить информацию о собираемых данных или обратиться с другими вопросами,
		связанными с конфиденциальностью, через контактные данные, указанные ниже.
	</ContentParagraph>

	<ContentH2>7. Контакты</ContentH2>
	<ContentParagraph>
		Если у вас есть вопросы, вы можете связаться с Администрацией:
	</ContentParagraph>
	<ContentParagraph>
		Администратор: Шило Даниил Вадимович<br />
		Адрес электронной почты: <Link href="mailto:tokiory.work@gmail.com">tokiory.work@gmail.com</Link>
	</ContentParagraph>
</div>
