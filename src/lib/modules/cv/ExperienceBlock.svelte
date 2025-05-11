<script lang="ts">
  import type { Experience } from '$mod/cv/types';
	import ContentH2 from '$components/Content/ContentH2.svelte';
	import Badge from '$components/Badge.svelte';
	import ContentUl from '$components/Content/ContentUl.svelte';
	import ContentLi from '$components/Content/ContentLi.svelte';

  export let experience: Experience;
  const { position, company, period, description } = experience;
</script>

<div>
  <ContentH2 custommark>
    {position} | {company}
  </ContentH2>

  <Badge class="mt-1">
    {period}
  </Badge>

  <ContentUl class="mt-2">
    {#each description as item (item)}
      <ContentLi>{item}</ContentLi>
    {/each}
  </ContentUl>
</div>
