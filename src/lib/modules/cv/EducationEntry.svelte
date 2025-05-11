<script lang="ts">
  import type { Education } from '$mod/cv/types';

  export let education: Education;
  const { degree, major, institution, period } = education;
</script>

<div>
  <div class="font-semibold">
    {degree}: {major}
  </div>
  <div>
    {institution}
  </div>
  <div class="text-sm mt-0.5">
    {period}
  </div>
</div>

<style>
  div {
    line-height: 1.5;
  }
</style>
