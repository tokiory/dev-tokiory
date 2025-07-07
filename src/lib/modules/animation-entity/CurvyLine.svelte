<script>
	const { class: className = '' } = $props();
</script>

<svg
	class={['w-full', className]}
	viewBox="0 0 400 20"
	xmlns="http://www.w3.org/2000/svg"
>
	<path fill="none" stroke="#7b4a2d" stroke-width="1">
		<animate
			attributeName="d"
			dur="4s"
			repeatCount="indefinite"
			values="
        M0,10 C80,10 80,10 160,10 C240,10 240,10 320,10 C400,10 400,10 400,10;
        M0,10 C40,0 120,20 160,10 C200,0 280,20 320,10 C360,0 440,20 400,10;
        M0,10 C80,10 80,10 160,10 C240,10 240,10 320,10 C400,10 400,10 400,10"
			keyTimes="0; 0.5; 1"
			calcMode="spline"
			keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
		/>
	</path>
</svg>
