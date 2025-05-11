<script lang="ts">
	import EducationEntry from './EducationEntry.svelte';
	import SkillGroup from './SkillGroup.svelte';
	import ContentH1 from '$components/Content/ContentH1.svelte';
	import Link from '$components/Link.svelte';
	import ContentH2 from '$components/Content/ContentH2.svelte';
	import ResumeGroupList from './ResumeGroupList.svelte';
	import { education, personalInfo, skills } from './data/sidebar';
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
		</ResumeGroupList>
	</section>
</aside>
