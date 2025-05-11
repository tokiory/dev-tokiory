<script lang="ts">
  import type { SkillGroup } from '$mod/cv/types';

  export let skillGroup: SkillGroup;
  const { category, skills } = skillGroup;
</script>

<div class="border-b-2 pb-0.5 border-driftwood-800/70 border-dashed">
  <span class="font-semibold">{category}:</span>
  <span>
    {skills.join(', ')}
  </span>
</div>
