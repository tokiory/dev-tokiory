<script lang="ts">
	import EducationEntry from './EducationEntry.svelte';
	import SkillGroup from './SkillGroup.svelte';
	import ContentH1 from '$components/Content/ContentH1.svelte';
	import Link from '$components/Link.svelte';
	import ContentH2 from '$components/Content/ContentH2.svelte';
	import ResumeGroupList from './ResumeGroupList.svelte';
	import { education, extendedSkills, personalInfo, skills } from './data/sidebar';
	import Button from '@/lib/components/Button.svelte';

	let isExtendedSkills = $state(false);
</script>

<aside class="flex flex-col gap-8 lg:w-[320px]">
	<div class="text-right">
		<ContentH1 custommark>{personalInfo.name}</ContentH1>
		<Link href="mailto:{personalInfo.email}">{personalInfo.email}</Link>
		<Link href="https://{personalInfo.github}" target="_blank" rel="noopener noreferrer"
			>{personalInfo.github}</Link
		>
	</div>

	<section>
		<ContentH2 custommark>Образование</ContentH2>
		<ResumeGroupList gap="small">
			{#each education as edu (edu.period)}
				<EducationEntry education={edu} />
			{/each}
		</ResumeGroupList>
	</section>

	<section>
		<ContentH2 custommark>Скиллы</ContentH2>
		<ResumeGroupList gap="extrasmall">
			{#each skills as skill (skill.category)}
				<SkillGroup skillGroup={skill} />
			{/each}
			{#if !isExtendedSkills}
				<Button
					onclick={() => (isExtendedSkills = true)}
					outlined
					class="px-0 text-sm whitespace py-2 font-bold mt-2"
				>
					<div>Показать расширеный список технологий</div>
				</Button>
			{:else}
				<div class="font-semibold mt-4">Дополнительные технологии:</div>
				{#each extendedSkills as skill (skill.category)}
					<SkillGroup skillGroup={skill} />
				{/each}
				<Button
					onclick={() => (isExtendedSkills = false)}
					outlined
					class="text-[13px] flex item-center justify-center gap-1 font-semibold mt-2"
					>Свернуть расширеный список технологий</Button
				>
			{/if}
		</ResumeGroupList>
	</section>
</aside>
