<script>
const {class: className, code, title = 'Редактор кода', tip = 'Вы можете редактировать текст', onInput} = $props();

const formattedCode = $derived(code.trim());
</script>


<div class={["border border-frangipani-800/30 rounded-md", className]}>
  <div class="flex py-1 flex-wrap justify-between border-b border-frangipani-800/30 px-2 bg-frangipani-100/30">
    <div class="font-semibold text-sm">{title}</div>
    <div class="font-semibold text-xs text-driftwood-800/50">{tip}</div>
  </div>
	<textarea
		oninput={onInput}
		class="w-full text-[13px] h-full px-2 py-1 resize-none bg-inherit outline-none font-['Martian_Mono_Variable']"
		resize="none"
		rows="6"
		value={formattedCode}
	></textarea>
</div>
