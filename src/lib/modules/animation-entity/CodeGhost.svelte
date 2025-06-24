<script>
const {class: className = ''} = $props()
</script>

<div class={["flex flex-col gap-2", className]}>
  <div class="code-ghost w-full max-w-80 h-4 rounded-md bg-driftwood-700" />
  <div class="code-ghost max-w-120 h-4 rounded-md bg-driftwood-700" />
  <div class="code-ghost w-full max-w-40 h-4 rounded-md bg-driftwood-700" />
  <div class="code-ghost w-full max-w-90 h-4 rounded-md bg-driftwood-700" />
  <div class="code-ghost w-full h-4 rounded-md bg-driftwood-700" />
</div>

<style>
.code-ghost {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: 300ms;
  }
  &:nth-child(3) {
    animation-delay: 1.5s;
  }
  &:nth-child(4) {
    animation-delay: 600ms;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
</style>
