import type { Education, PersonalInfo, SkillGroup } from '$mod/cv/types';

export const personalInfo: PersonalInfo = {
	name: 'Даниил Шило',
	email: 'tokiory.work@gmail.com',
	github: 'github.com/tokiory',
	desiredSalary: '320 000 -- 350 000 ₽'
};

export const education: Education[] = [
	{
		degree: 'Магистр',
		major: 'Программная инженерия',
		institution: 'Луганский Государственный Университет им. В. Даля',
		period: '2023 -- 2025'
	},
	{
		degree: 'Бакалавр',
		major: 'Программная инженерия',
		institution: 'Луганский Государственный Университет им. В. Даля',
		period: '2019 -- 2023'
	}
];

export const skills: SkillGroup[] = [
	{
		category: 'Языки',
		skills: ['Javascript', 'Typescript', 'Go']
	},
	{
		category: 'Фронтенд',
		skills: ['React', 'Vue', 'Nuxt', 'Next.js', 'Svelte', 'SvelteKit', 'Electron']
	},
	{
		category: 'Бэкенд',
		skills: ['Bun', 'Express.js', 'Gin']
	},
	{
		category: 'Базы данных',
		skills: ['PostgreSQL', 'Supabase', 'Firebase']
	},
	{
		category: 'DevOps',
		skills: ['Docker', 'Github Actions', 'Swarm', 'GitlabCI', 'Devpod']
	},
	{
		category: 'Cloud',
		skills: ['AWS']
	}
];

export const extendedSkills: SkillGroup[] = [
	{
		category: 'Сборщики',
		skills: ['Vite', 'Webpack', 'Parcel', 'ESBuild', 'Rollup', 'Gulp']
	},
	{
		category: 'API',
		skills: ['REST API', 'GraphQL', 'WebSocket', 'WebRTC', 'gRPC']
	},
	{
		category: 'Стейт-менеджеры',
		skills: ['Redux + RTK', 'Pinia', 'Vuex', 'Nanostores', 'Zustand']
	},
	{
		category: 'Кроссплатформенные фреймворки',
		skills: ['Electron', 'Tauri', 'Ionic', 'Capacitor']
	},
	{
		category: 'Тестирование',
		skills: ['Jest', 'Vitest', 'Playwright', 'Mocha', 'Chai', 'Supertest']
	},
	{
		category: 'Мониторинг',
		skills: ['Sentry', 'Grafana']
	},
	{
		category: 'Безопасность',
		skills: ['JWT', 'SSL/TLS']
	},
	{
		category: 'UI Библиотеки и CSS-фреймворки',
		skills: [
			'Material UI',
			'Chakra UI',
			'shadcn/ui',
			'PrimeVue',
			'Tailwind',
			'Bootstrap',
			'Vuetify',
			'Quasar'
		]
	},
	{
		category: 'Документация',
		skills: ['Swagger', 'Storybook', 'JSDoc', 'TypeDoc', 'Docz', 'VuePress', 'Docusaurus']
	},
	{
		category: 'Линтеры/Форматтеры',
		skills: ['ESLint', 'Prettier', 'SonarQube', 'Stylelint']
	},
	{
		category: 'Контейнеризация',
		skills: ['Docker', 'Docker Swarm', 'Kubernetes', 'OrbStack', 'Podman']
	},
	{
		category: 'Метрики и аналитика',
		skills: ['Google Analytics', 'Yandex Metrica', 'Umami']
	}
];
