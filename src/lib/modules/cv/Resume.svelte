<script lang="ts">
	import ExperienceBlock from './ExperienceBlock.svelte';
	import ProjectEntry from './ProjectEntry.svelte';
	import ContentH1 from '$components/Content/ContentH1.svelte';
	import ResumeGroupList from './ResumeGroupList.svelte';
	import { experiences, projects } from './data/resume';
</script>

<main class="w-full flex flex-col gap-8">
	<section>
		<ContentH1 custommark>Опыт работы</ContentH1>
		<ResumeGroupList class="mt-2">
			{#each experiences as experience, idx (idx)}
				<ExperienceBlock {experience} />
			{/each}
		</ResumeGroupList>
	</section>

	<section>
		<ContentH1 custommark>Пет-проекты</ContentH1>
		<ResumeGroupList gap="small" class="mt-2">
			{#each projects as project, idx (idx)}
				<ProjectEntry {project} />
			{/each}
		</ResumeGroupList>
	</section>
</main>
