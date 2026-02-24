<script lang="ts">
	const { value = false, id = '', onchange }: Props = $props();

	interface Props {
		value?: boolean;
		id?: string;
		onchange?: (value: boolean) => void;
	}
</script>

<button
	class={['switch w-10 h-5 shrink-0 rounded-[4px] border relative', value && 'switch--on']}
	aria-label="Toggle switch"
	onclick={() => onchange?.(!value)}
	role="switch"
	{id}
	aria-checked={value}
>
	<div
		class={[
			'switch__thumb h-3 w-4 rounded-[3px] transition-transform left-1 top-.75 absolute',
			value && 'translate-x-3.5 switch__thumb--on'
		]}
	></div>
</button>

<style>
	.switch {
		background-color: var(--switch-track-off);
		border-color: var(--switch-border);
		transition:
			background-color 120ms ease,
			border-color 120ms ease;
	}

	.switch--on {
		background-color: var(--switch-track-on);
	}

	.switch__thumb {
		background-color: var(--switch-thumb);
	}

	.switch__thumb--on {
		background-color: var(--switch-thumb-on);
	}
</style>
