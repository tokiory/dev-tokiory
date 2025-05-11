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
		skills: ['React', 'Vue', 'Nuxt', 'Next.js', 'Svelte', 'SvelteKit']
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
