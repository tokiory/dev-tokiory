<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 600 200"
	class="dial"
	style="background-color: transparent; font-family: monospace;"
>
	<!-- Grid Background (Adjusted for light visibility) -->
	<defs>
		<pattern id="dot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
			<circle cx="1" cy="1" r="1" fill="var(--dial-grid)" />
		</pattern>
	</defs>
	<rect width="100%" height="100%" fill="url(#dot-grid)" />

	<!-- Central Signaling Hub -->
	<g transform="translate(300, 50)">
		<rect
			x="-15"
			y="-15"
			width="30"
			height="30"
			fill="none"
			stroke="var(--dial-primary)"
			stroke-width="1.5"
		/>
		<circle r="4" fill="var(--dial-primary)">
			<animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
		</circle>
		<text y="-25" fill="var(--dial-primary)" font-size="8" text-anchor="middle" letter-spacing="2"
			>SIGNALING</text
		>
	</g>

	<!-- Connection Paths -->
	<!-- Signaling Curves -->
	<path
		d="M 100,80 C 100,40 200,50 280,50"
		fill="none"
		stroke="var(--dial-secondary)"
		stroke-width="1"
		stroke-dasharray="4 4"
	/>
	<path
		d="M 320,50 C 400,50 500,40 500,80"
		fill="none"
		stroke="var(--dial-secondary)"
		stroke-width="1"
		stroke-dasharray="4 4"
	/>

	<!-- P2P Direct Line -->
	<line
		x1="120"
		y1="130"
		x2="480"
		y2="130"
		stroke="var(--dial-primary)"
		stroke-width="1"
		stroke-dasharray="10 10"
	>
		<animate
			attributeName="stroke-dashoffset"
			from="20"
			to="0"
			dur="1s"
			calcMode="linear"
			repeatCount="indefinite"
		/>
	</line>

	<!-- Animated Signaling Particles -->
	<circle r="2" fill="var(--dial-primary)">
		<animateMotion dur="2s" repeatCount="indefinite" path="M 100,80 C 100,40 200,50 280,50" />
	</circle>
	<circle r="2" fill="var(--dial-primary)">
		<animateMotion
			dur="2s"
			begin="1s"
			repeatCount="indefinite"
			path="M 500,80 C 500,40 400,50 320,50"
		/>
	</circle>

	<!-- P2P Data Particles -->
	<rect width="4" height="4" fill="var(--dial-primary)">
		<animateMotion dur="1.5s" repeatCount="indefinite" path="M 120,130 L 480,130" />
	</rect>
	<rect width="4" height="4" fill="var(--dial-primary)">
		<animateMotion dur="1.5s" begin="0.75s" repeatCount="indefinite" path="M 480,130 L 120,130" />
	</rect>

	<!-- Left Peer (Caller) -->
	<g transform="translate(100, 130)">
		<circle r="30" fill="none" stroke="var(--dial-primary)" stroke-width="1" opacity="0.2">
			<animate attributeName="r" values="30;50" dur="2s" repeatCount="indefinite" />
			<animate attributeName="opacity" values="0.2;0" dur="2s" repeatCount="indefinite" />
		</circle>
		<rect
			x="-20"
			y="-30"
			width="40"
			height="60"
			fill="none"
			stroke="var(--dial-primary)"
			stroke-width="2"
		/>
	</g>

	<!-- Right Peer (Receiver) -->
	<g transform="translate(500, 130)">
		<circle r="30" fill="none" stroke="var(--dial-primary)" stroke-width="1" opacity="0.2">
			<animate attributeName="r" values="30;50" dur="2s" begin="1s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0.2;0"
				dur="2s"
				begin="1s"
				repeatCount="indefinite"
			/>
		</circle>
		<rect
			x="-20"
			y="-30"
			width="40"
			height="60"
			fill="none"
			stroke="var(--dial-primary)"
			stroke-width="2"
		/>
	</g>
</svg>

<style>
	.dial {
		--dial-primary: #111111;
		--dial-secondary: #a8a29e;
		--dial-grid: #e7e5e4;
	}

	:global(.theme-dark) .dial {
		--dial-primary: #f5f5f5;
		--dial-secondary: #737373;
		--dial-grid: #262626;
	}

	:global(.theme-gruvvy) .dial {
		--dial-primary: #ebdbb2;
		--dial-secondary: #928374;
		--dial-grid: #504945;
	}
</style>
