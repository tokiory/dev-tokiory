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
		Настоящая Политика конфиденциальности составлена в соответствии с Федеральным законом РФ от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки и защиты информации, которую пользователь предоставляет при использовании данного сайта.
	</ContentParagraph>

	<ContentH2>1. Общие положения</ContentH2>
	<ContentParagraph>
		1.1. Администрация сайта (далее — "Администрация") уважает право пользователей на конфиденциальность.
	</ContentParagraph>
	<ContentParagraph>
		1.2. При посещении сайта может осуществляться автоматизированный сбор технической информации для целей аналитики и обеспечения стабильной работы сайта.
	</ContentParagraph>
	<ContentParagraph>
		1.3. Сайт использует аналитическую систему Umami для сбора обезличенных данных о посещениях страниц и технических характеристиках устройства пользователя.
	</ContentParagraph>
	<ContentParagraph>
		1.4. Для мониторинга ошибок и повышения стабильности сайта используется сервис Sentry, предоставляемый Functional Software, Inc.
	</ContentParagraph>
	<ContentParagraph>
		1.5. Мы не собираем и не обрабатываем персональные данные пользователей в понимании законодательства РФ, за исключением случаев их добровольного предоставления пользователем.
	</ContentParagraph>

	<ContentH2>2. Состав собираемой информации</ContentH2>
	<ContentUl>
		<ContentLi>Посещённые страницы</ContentLi>
		<ContentLi>Тип устройства и браузера</ContentLi>
		<ContentLi>Разрешение экрана</ContentLi>
		<ContentLi>Примерное географическое местоположение (на основе IP без его хранения)</ContentLi>
		<ContentLi>Данные об ошибках, включая stack traces, URL страниц и параметры запросов (через Sentry)</ContentLi>
	</ContentUl>

	<ContentH2>3. Цель сбора данных</ContentH2>
	<ContentParagraph>
		Сбор технических и обезличенных данных осуществляется исключительно для анализа производительности сайта, выявления и устранения ошибок, а также для обеспечения информационной безопасности.
	</ContentParagraph>

	<ContentH2>4. Использование сервиса Sentry</ContentH2>
	<ContentParagraph>
		Sentry собирает технические данные, такие как тип устройства, браузера, URL страниц, а также информацию об ошибках (stack traces, параметры запросов). Эти данные помогают выявлять и устранять проблемы в работе сайта.
	</ContentParagraph>
	<ContentParagraph>
		Мы стремимся минимизировать передачу любых данных, которые могут содержать личную информацию. Обработка данных осуществляется в соответствии с <Link href="https://sentry.io/privacy/">Политикой конфиденциальности Sentry</Link>. Данные защищены соответствующими техническими и организационными мерами.
	</ContentParagraph>

	<ContentH2>5. Хранение и защита информации</ContentH2>
	<ContentParagraph>
		Данные хранятся на серверах Администрации или её технических партнёров (Umami, Sentry). Доступ к данным ограничен и защищён техническими средствами. Применяются меры для предотвращения несанкционированного доступа.
	</ContentParagraph>

	<ContentH2>6. Трансграничная передача данных</ContentH2>
	<ContentParagraph>
		В отдельных случаях данные могут обрабатываться на серверах, расположенных за пределами Российской Федерации, включая страны, не обеспечивающие адекватный уровень защиты персональных данных. Такая передача осуществляется исключительно в рамках обеспечения работы сайта.
	</ContentParagraph>

	<ContentH2>7. Права пользователей</ContentH2>
	<ContentParagraph>
		Пользователи имеют право запрашивать информацию о характере собираемых данных, а также обращаться с вопросами и запросами, связанными с конфиденциальностью.
	</ContentParagraph>

	<ContentH2>8. Контакты</ContentH2>
	<ContentParagraph>
		Если у вас есть вопросы, вы можете связаться с Администрацией:
	</ContentParagraph>
	<ContentParagraph>
		Администратор: Шило Даниил Вадимович<br />
		Email: <Link href="mailto:tokiory.work@gmail.com">tokiory.work@gmail.com</Link>
	</ContentParagraph>
</div>
