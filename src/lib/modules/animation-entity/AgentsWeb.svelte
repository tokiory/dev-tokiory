<svg
	class="agents-web"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 600 200"
	role="img"
	aria-label="Network of agents with animated data flows"
>
	<title>Agents network visualization</title>

	<defs>
		<!-- Octagon used to draw concentric rings -->
		<polygon
			id="oct"
			points="1,0 0.7071,0.7071 0,1 -0.7071,0.7071 -1,0 -0.7071,-0.7071 0,-1 0.7071,-0.7071"
			vector-effect="non-scaling-stroke"
		/>

		<!-- Reusable Agent node template -->
		<g id="agent">
			<!-- Pulsing aura -->
			<circle r="6" fill="none" stroke="var(--stroke)" stroke-width="1">
				<animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
				<animate attributeName="opacity" values="0.6;0;0" dur="3s" repeatCount="indefinite" />
			</circle>

			<!-- Agent base -->
			<circle r="7" fill="var(--fill)" stroke="var(--stroke)" stroke-width="2" />

			<!-- Agent core activity light -->
			<circle r="2" fill="var(--av-active)">
				<animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
			</circle>
		</g>
	</defs>

	<!-- LAYER 1: Rotating spider-web background (subtle) -->
	<g stroke="var(--stroke)" stroke-width="1" opacity="0.08">
		<animateTransform
			attributeName="transform"
			type="rotate"
			from="0 300 100"
			to="360 300 100"
			dur="100s"
			repeatCount="indefinite"
		/>
		<use href="#oct" transform="translate(300,100) scale(40)" fill="none" />
		<use href="#oct" transform="translate(300,100) scale(80)" fill="none" />
		<use href="#oct" transform="translate(300,100) scale(120)" fill="none" />
		<use href="#oct" transform="translate(300,100) scale(160)" fill="none" />
		<use href="#oct" transform="translate(300,100) scale(200)" fill="none" />
		<use href="#oct" transform="translate(300,100) scale(240)" fill="none" />
		<use href="#oct" transform="translate(300,100) scale(300)" fill="none" />

		<!-- Radial spokes -->
		<g transform="translate(300,100)">
			<line x1="0" y1="0" x2="300" y2="0" />
			<line x1="0" y1="0" x2="212" y2="212" />
			<line x1="0" y1="0" x2="0" y2="300" />
			<line x1="0" y1="0" x2="-212" y2="212" />
			<line x1="0" y1="0" x2="-300" y2="0" />
			<line x1="0" y1="0" x2="-212" y2="-212" />
			<line x1="0" y1="0" x2="0" y2="-300" />
			<line x1="0" y1="0" x2="212" y2="-212" />
		</g>
	</g>

	<!-- LAYER 2: Primary network connections -->
	<g stroke="var(--stroke)" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.25">
		<line x1="300" y1="100" x2="430" y2="100" />
		<line x1="300" y1="100" x2="390" y2="160" />
		<line x1="300" y1="100" x2="250" y2="170" />
		<line x1="300" y1="100" x2="160" y2="100" />
		<line x1="300" y1="100" x2="210" y2="30" />
		<line x1="300" y1="100" x2="360" y2="20" />
		<line x1="300" y1="100" x2="310" y2="180" />
	</g>

	<!-- Extended horizontal sub-connections -->
	<g stroke="var(--stroke)" stroke-width="1" stroke-dasharray="2 2" opacity="0.15">
		<line x1="430" y1="100" x2="520" y2="100" />
		<line x1="520" y1="100" x2="570" y2="60" />
		<line x1="520" y1="100" x2="570" y2="140" />

		<line x1="160" y1="100" x2="80" y2="100" />
		<line x1="80" y1="100" x2="30" y2="60" />
		<line x1="80" y1="100" x2="30" y2="140" />

		<line x1="250" y1="170" x2="180" y2="190" />
		<line x1="360" y1="20" x2="440" y2="10" />
	</g>

	<!-- LAYER 3: Data dot transfer animations (use accent color) -->
	<g fill="var(--accent)">
		<!-- Main routes -->
		<circle r="3">
			<animateMotion path="M300,100 L430,100" dur="2s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0;1;1;0"
				keyTimes="0;0.1;0.9;1"
				dur="2s"
				repeatCount="indefinite"
			/>
		</circle>

		<circle r="3">
			<animateMotion path="M160,100 L300,100" dur="2.8s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0;1;1;0"
				keyTimes="0;0.1;0.9;1"
				dur="2.8s"
				repeatCount="indefinite"
			/>
		</circle>

		<!-- Far horizontal routes -->
		<circle r="2">
			<animateMotion path="M430,100 L520,100" dur="1.5s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0;1;1;0"
				keyTimes="0;0.1;0.9;1"
				dur="1.5s"
				repeatCount="indefinite"
			/>
		</circle>

		<circle r="2">
			<animateMotion path="M80,100 L160,100" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0;1;1;0"
				keyTimes="0;0.1;0.9;1"
				dur="1.5s"
				begin="0.5s"
				repeatCount="indefinite"
			/>
		</circle>

		<!-- Secondary routes -->
		<circle r="1.5">
			<animateMotion path="M520,100 L570,60" dur="1.2s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0;1;1;0"
				keyTimes="0;0.1;0.9;1"
				dur="1.2s"
				repeatCount="indefinite"
			/>
		</circle>

		<circle r="1.5">
			<animateMotion path="M80,100 L30,140" dur="1.4s" repeatCount="indefinite" />
			<animate
				attributeName="opacity"
				values="0;1;1;0"
				keyTimes="0;0.1;0.9;1"
				dur="1.4s"
				repeatCount="indefinite"
			/>
		</circle>

		<circle r="3">
			<animateMotion path="M390,160 L300,100" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
		</circle>

		<circle r="3">
			<animateMotion path="M300,100 L210,30" dur="2.1s" begin="0.8s" repeatCount="indefinite" />
		</circle>
	</g>

	<!-- LAYER 4: Agent nodes -->
	<!-- Primary agents -->
	<use href="#agent" x="430" y="100" />
	<use href="#agent" x="390" y="160" />
	<use href="#agent" x="250" y="170" />
	<use href="#agent" x="160" y="100" />
	<use href="#agent" x="210" y="30" />
	<use href="#agent" x="360" y="20" />
	<use href="#agent" x="310" y="180" />

	<!-- Peripheral sub-agents -->
	<g fill="var(--fill)" stroke="var(--stroke)" stroke-width="1.5">
		<circle cx="520" cy="100" r="5" />
		<circle cx="570" cy="60" r="4" />
		<circle cx="570" cy="140" r="4" />

		<circle cx="80" cy="100" r="5" />
		<circle cx="30" cy="60" r="4" />
		<circle cx="30" cy="140" r="4" />

		<circle cx="180" cy="190" r="4" />
		<circle cx="440" cy="10" r="4" />
	</g>

	<!-- Sub-agent inner dots -->
	<g fill="var(--av-active)">
		<circle cx="520" cy="100" r="2" />
		<circle cx="570" cy="60" r="1.5" />
		<circle cx="570" cy="140" r="1.5" />
		<circle cx="80" cy="100" r="2" />
		<circle cx="30" cy="60" r="1.5" />
		<circle cx="30" cy="140" r="1.5" />
	</g>

	<!-- LAYER 5: Central DEV node -->
	<g transform="translate(300,100)">
		<!-- Rotating dashed tech ring -->
		<circle r="26" fill="none" stroke="var(--stroke)" stroke-width="1.5" stroke-dasharray="6 6">
			<animateTransform
				attributeName="transform"
				type="rotate"
				from="0"
				to="-360"
				dur="20s"
				repeatCount="indefinite"
			/>
		</circle>

		<!-- Expanding pulse -->
		<circle r="18" fill="none" stroke="var(--stroke)" stroke-width="2">
			<animate attributeName="r" values="18;38;18" dur="4s" repeatCount="indefinite" />
			<animate attributeName="opacity" values="0.8;0;0" dur="4s" repeatCount="indefinite" />
		</circle>

		<!-- Dev core -->
		<circle r="18" fill="var(--av-active)" />

		<!-- DEV label -->
		<text
			x="0"
			y="4"
			font-family="monospace, sans-serif"
			font-size="11"
			fill="var(--dev-text)"
			text-anchor="middle"
			font-weight="bold"
			letter-spacing="1"
		>
			DEV
		</text>
	</g>
</svg>

<style>
	/* Local mapping to the app theme variables (defined in src/styles/app.css) */
	svg.agents-web {
		width: 100%;
		height: auto;
		display: block;
		background: transparent;

		/* Primary aliases mapped to app.css tokens */
		--stroke: var(--theme-text, #000); /* lines, strokes */
		--fill: var(--theme-surface, #fff); /* node fill */
		--accent: var(--theme-text, #000); /* animated dots / accent */
		--av-base: var(--theme-av-node-base, #78716c);
		--av-cursor: var(--theme-av-node-cursor, #57534e);
		--av-active: var(
			--theme-av-node-active,
			var(--theme-surface, #000)
		); /* active node / dev core */
		--dev-text: var(--theme-surface, #fff); /* text inside DEV circle */

		/* small tuning tokens (optional) */
		--muted-weak: rgba(0, 0, 0, 0.08);
		--muted-mid: rgba(0, 0, 0, 0.15);
		--muted-dash: rgba(0, 0, 0, 0.25);
	}

	/* Prevent focus outline if accidentally tabbable (keeps visuals clean) */
	:global(svg.agents-web:focus) {
		outline: none;
	}
</style>
