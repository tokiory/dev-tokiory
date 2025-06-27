import type { Education, PersonalInfo, SkillGroup } from '$mod/cv/types';

export const personalInfo: PersonalInfo = {
	name: 'Даниил Шило',
	email: 'tokiory.work@gmail.com',
	github: 'github.com/tokiory',
	telegram: 'tokiory',
	desiredSalary: '350 000 -- 370 000 ₽'
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
		skills: [
			{ name: 'Javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
			{ name: 'Typescript', link: 'https://www.typescriptlang.org' },
			{ name: 'Go', link: 'https://golang.org' },
			{ name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
			{ name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
		]
	},
	{
		category: 'Фронтенд',
		skills: [
			{ name: 'React', link: 'https://reactjs.org' },
			{ name: 'Vue', link: 'https://vuejs.org' },
			{ name: 'Nuxt', link: 'https://nuxtjs.org' },
			{ name: 'Next.js', link: 'https://nextjs.org' },
			{ name: 'Svelte', link: 'https://svelte.dev' },
			{ name: 'SvelteKit', link: 'https://kit.svelte.dev' },
			{ name: 'Electron', link: 'https://www.electronjs.org' }
		]
	},
	{
		category: 'Бэкенд',
		skills: [
			{ name: 'Bun', link: 'https://bun.sh' },
			{ name: 'Express.js', link: 'https://expressjs.com' },
			{ name: 'Gin', link: 'https://gin-gonic.com' }
		]
	},
	{
		category: 'Базы данных',
		skills: [
			{ name: 'PostgreSQL', link: 'https://www.postgresql.org' },
			{ name: 'Supabase', link: 'https://supabase.io' },
			{ name: 'Firebase', link: 'https://firebase.google.com' }
		]
	},
	{
		category: 'DevOps',
		skills: [
			{ name: 'Docker', link: 'https://www.docker.com' },
			{ name: 'Github Actions', link: 'https://github.com/features/actions' },
			{ name: 'Swarm', link: 'https://docs.docker.com/engine/swarm/' },
			{ name: 'GitlabCI', link: 'https://docs.gitlab.com/ee/ci/' },
			{ name: 'Devpod', link: 'https://devpod.sh/' }
		]
	},
	{
		category: 'Cloud',
		skills: [
			{ name: 'Vercel', link: 'https://vercel.com' },
			{ name: 'DigitalOcean', link: 'https://www.digitalocean.com' },
			{ name: 'AWS', link: 'https://aws.amazon.com' }
		]
	}
];

export const extendedSkills: SkillGroup[] = [
	{
		category: 'Сборщики',
		skills: [
			{ name: 'Vite', link: 'https://vitejs.dev' },
			{ name: 'Webpack', link: 'https://webpack.js.org' },
			{ name: 'Parcel', link: 'https://parceljs.org' },
			{ name: 'ESBuild', link: 'https://esbuild.github.io' },
			{ name: 'Rollup', link: 'https://rollupjs.org' },
			{ name: 'Gulp', link: 'https://gulpjs.com' }
		]
	},
	{
		category: 'API',
		skills: [
			{ name: 'REST API', link: 'https://restfulapi.net' },
			{ name: 'GraphQL', link: 'https://graphql.org' },
			{ name: 'WebSocket', link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket' },
			{ name: 'WebRTC', link: 'https://webrtc.org' },
			{ name: 'gRPC', link: 'https://grpc.io' }
		]
	},
	{
		category: 'Стейт-менеджеры',
		skills: [
			{ name: 'Redux + RTK', link: 'https://redux-toolkit.js.org' },
			{ name: 'Pinia', link: 'https://pinia.vuejs.org' },
			{ name: 'Vuex', link: 'https://vuex.vuejs.org' },
			{ name: 'Nanostores', link: 'https://github.com/nanostores/nanostores' },
			{ name: 'Zustand', link: 'https://zustand-demo.pmnd.rs' }
		]
	},
	{
		category: 'Препроцессоры',
		skills: [
			{ name: 'SCSS', link: 'https://sass-lang.com' },
			{ name: 'Sass', link: 'https://sass-lang.com' },
			{ name: 'Less', link: 'https://lesscss.org' },
			{ name: 'Stylus', link: 'https://stylus-lang.com' },
			{ name: 'PostCSS', link: 'https://postcss.org' }
		]
	},
	{
		category: 'Кроссплатформенные фреймворки',
		skills: [
			{ name: 'Electron', link: 'https://www.electronjs.org' },
			{ name: 'Tauri', link: 'https://tauri.app' },
			{ name: 'Ionic', link: 'https://ionicframework.com' },
			{ name: 'Capacitor', link: 'https://capacitorjs.com' }
		]
	},
	{
		category: 'Тестирование',
		skills: [
			{ name: 'Jest', link: 'https://jestjs.io' },
			{ name: 'Vitest', link: 'https://vitest.dev' },
			{ name: 'Playwright', link: 'https://playwright.dev' },
			{ name: 'Mocha', link: 'https://mochajs.org' },
			{ name: 'Chai', link: 'https://www.chaijs.com' },
			{ name: 'Supertest', link: 'https://github.com/visionmedia/supertest' }
		]
	},
	{
		category: 'Мониторинг',
		skills: [
			{ name: 'Sentry', link: 'https://sentry.io' },
			{ name: 'Grafana', link: 'https://grafana.com' }
		]
	},
	{
		category: 'Безопасность',
		skills: [
			{ name: 'JWT', link: 'https://jwt.io' },
			{ name: 'SSL/TLS', link: 'https://www.ssl.com/article/ssl-tls-handshake-overview/' }
		]
	},
	{
		category: 'UI Библиотеки и CSS-фреймворки',
		skills: [
			{ name: 'Tailwind', link: 'https://tailwindcss.com' },
			{ name: 'UnoCSS', link: 'https://github.com/unocss/unocss' },
			{ name: 'Material UI', link: 'https://mui.com' },
			{ name: 'Chakra UI', link: 'https://chakra-ui.com' },
			{ name: 'shadcn/ui', link: 'https://ui.shadcn.com' },
			{ name: 'PrimeVue', link: 'https://primevue.org' },
			{ name: 'Bootstrap', link: 'https://getbootstrap.com' },
			{ name: 'Vuetify', link: 'https://vuetifyjs.com' },
			{ name: 'Quasar', link: 'https://quasar.dev' }
		]
	},
	{
		category: 'Документация',
		skills: [
			{ name: 'Swagger', link: 'https://swagger.io' },
			{ name: 'Storybook', link: 'https://storybook.js.org' },
			{ name: 'JSDoc', link: 'https://jsdoc.app' },
			{ name: 'TypeDoc', link: 'https://typedoc.org' },
			{ name: 'VuePress', link: 'https://vuepress.vuejs.org' },
			{ name: 'Docusaurus', link: 'https://docusaurus.io' }
		]
	},
	{
		category: 'Линтеры/Форматтеры',
		skills: [
			{ name: 'ESLint', link: 'https://eslint.org' },
			{ name: 'Prettier', link: 'https://prettier.io' },
			{ name: 'SonarQube', link: 'https://www.sonarqube.org' },
			{ name: 'Stylelint', link: 'https://stylelint.io' }
		]
	},
	{
		category: 'Контейнеризация',
		skills: [
			{ name: 'Docker', link: 'https://www.docker.com' },
			{ name: 'Docker Swarm', link: 'https://docs.docker.com/engine/swarm/' },
			{ name: 'Kubernetes', link: 'https://kubernetes.io' },
			{ name: 'OrbStack', link: 'https://orbstack.dev' },
			{ name: 'Podman', link: 'https://podman.io' }
		]
	},
	{
		category: 'Метрики и аналитика',
		skills: [
			{ name: 'Google Analytics', link: 'https://analytics.google.com' },
			{ name: 'Yandex Metrica', link: 'https://metrica.yandex.com' },
			{ name: 'Umami', link: 'https://umami.is' }
		]
	},
	{
		category: 'Библиотеки общего назначения',
		skills: [
			{ name: 'Socket.IO', link: 'https://socket.io' },
			{ name: 'Axios', link: 'https://axios-http.com' },
			{ name: 'ofetch', link: 'https://github.com/unjs/ofetch' },
			{ name: 'Underscore', link: 'https://underscorejs.org' },
			{ name: 'Lodash', link: 'https://lodash.com' },
			{ name: 'jQuery', link: 'https://jquery.com' },
			{ name: 'Immer', link: 'https://immerjs.github.io/immer/' },
			{ name: 'Zod', link: 'https://zod.dev' },
			{ name: 'Yup', link: 'https://github.com/jquense/yup' },
			{ name: 'Sharp', link: 'https://sharp.pixelplumbing.com' },
			{ name: 'Chalk', link: 'https://github.com/chalk/chalk' },
			{ name: 'Commander', link: 'https://github.com/tj/commander.js' },
			{ name: 'Nanoid', link: 'https://github.com/ai/nanoid' },
			{ name: 'Moment.js', link: 'https://momentjs.com' },
			{ name: 'Day.js', link: 'https://day.js.org' },
			{ name: 'date-fns', link: 'https://date-fns.org' }
		]
	}
];
