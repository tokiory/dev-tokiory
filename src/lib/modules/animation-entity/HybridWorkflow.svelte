<svg class="h-connection" height="300" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<!-- Background grid pattern for futuristic look -->
		<pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
			<circle cx="10" cy="10" r="0.5" fill="#000000" opacity="0.3" />
		</pattern>
	</defs>

	<!-- Transparent Background Layer with Subtle Dots -->
	<rect width="500" height="200" fill="url(#grid)" />

	<!-- ========================================== -->
	<!-- LEFT SIDE: HUMAN / MANUAL CODE             -->
	<!-- ========================================== -->
	<g id="human-source">
		<!-- Outer rotating hexagon -->
		<polygon
			points="100,65 130.3,82.5 130.3,117.5 100,135 69.7,117.5 69.7,82.5"
			fill="#ffffff"
			stroke="#000000"
			stroke-width="2"
			stroke-linejoin="round"
		>
			<animateTransform
				attributeName="transform"
				type="rotate"
				from="0 100 100"
				to="360 100 100"
				dur="20s"
				repeatCount="indefinite"
			/>
		</polygon>

		<!-- Inner orbital rings representing structured human logic -->
		<circle cx="100" cy="100" r="16" fill="none" stroke="#000000" stroke-width="1.5" />
		<path
			d="M 100 84 L 100 70 M 100 116 L 100 130 M 84 100 L 70 100 M 116 100 L 130 100"
			stroke="#000000"
			stroke-width="1.5"
			stroke-linecap="round"
		>
			<animateTransform
				attributeName="transform"
				type="rotate"
				from="360 100 100"
				to="0 100 100"
				dur="15s"
				repeatCount="indefinite"
			/>
		</path>
		<circle cx="100" cy="100" r="5" fill="#000000" />

		<!-- Pulse ring -->
		<circle cx="100" cy="100" r="45" fill="none" stroke="#000000" stroke-width="0.5">
			<animate attributeName="r" values="45; 55; 45" dur="3s" repeatCount="indefinite" />
			<animate attributeName="opacity" values="1; 0; 1" dur="3s" repeatCount="indefinite" />
		</circle>
	</g>

	<!-- ========================================== -->
	<!-- RIGHT SIDE: AI GENERATION                  -->
	<!-- ========================================== -->
	<g id="ai-source">
		<!-- Outer rotating dashed circle -->
		<circle
			cx="400"
			cy="100"
			r="38"
			fill="#ffffff"
			stroke="#000000"
			stroke-width="2"
			stroke-dasharray="6 6"
		>
			<animateTransform
				attributeName="transform"
				type="rotate"
				from="360 400 100"
				to="0 400 100"
				dur="15s"
				repeatCount="indefinite"
			/>
		</circle>

		<!-- Inner AI Neural Network geometry -->
		<path
			d="M 385 85 L 415 100 L 385 115 Z M 415 100 L 380 100"
			fill="none"
			stroke="#000000"
			stroke-width="1.5"
		/>
		<circle cx="385" cy="85" r="4" fill="#000000" />
		<circle cx="415" cy="100" r="5" fill="#000000">
			<animate attributeName="r" values="4; 6; 4" dur="2s" repeatCount="indefinite" />
		</circle>
		<circle cx="385" cy="115" r="4" fill="#000000" />
		<circle cx="380" cy="100" r="3" fill="#ffffff" stroke="#000" />

		<!-- Pulse ring -->
		<circle
			cx="400"
			cy="100"
			r="45"
			fill="none"
			stroke="#000000"
			stroke-width="0.5"
			stroke-dasharray="2 4"
		>
			<animate attributeName="r" values="45; 55; 45" dur="3s" repeatCount="indefinite" />
			<animate attributeName="opacity" values="1; 0; 1" dur="3s" repeatCount="indefinite" />
		</circle>
	</g>

	<!-- ========================================== -->
	<!-- DATA FLOW LINES (Animations)               -->
	<!-- ========================================== -->
	<g id="data-streams" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="6 6">
		<!-- Human to Center (Left to Right flowing dashes) -->
		<path d="M 140 100 H 205">
			<animate
				attributeName="stroke-dashoffset"
				from="12"
				to="0"
				dur="0.4s"
				repeatCount="indefinite"
			/>
		</path>
		<path d="M 140 75 H 160 L 180 65 H 221">
			<animate
				attributeName="stroke-dashoffset"
				from="12"
				to="0"
				dur="0.4s"
				repeatCount="indefinite"
			/>
		</path>
		<path d="M 140 125 H 160 L 180 135 H 221">
			<animate
				attributeName="stroke-dashoffset"
				from="12"
				to="0"
				dur="0.4s"
				repeatCount="indefinite"
			/>
		</path>

		<!-- AI to Center (Right to Left flowing dashes) -->
		<!-- Changed 'from/to' values so the dashes stream inward towards the center -->
		<path d="M 360 100 H 295">
			<animate
				attributeName="stroke-dashoffset"
				from="12"
				to="0"
				dur="0.4s"
				repeatCount="indefinite"
			/>
		</path>
		<path d="M 360 75 H 340 L 320 65 H 279">
			<animate
				attributeName="stroke-dashoffset"
				from="12"
				to="0"
				dur="0.4s"
				repeatCount="indefinite"
			/>
		</path>
		<path d="M 360 125 H 340 L 320 135 H 279">
			<animate
				attributeName="stroke-dashoffset"
				from="12"
				to="0"
				dur="0.4s"
				repeatCount="indefinite"
			/>
		</path>
	</g>

	<!-- ========================================== -->
	<!-- CENTER HYBRID ENGINE (The Merger)          -->
	<!-- ========================================== -->
	<g id="hybrid-core">
		<!-- The foundation circle -->
		<circle cx="250" cy="100" r="45" fill="#ffffff" stroke="#000000" stroke-width="2" />

		<!-- Left Half: Solid lines indicating human/manual structure -->
		<path d="M 250 65 A 35 35 0 0 0 250 135" fill="none" stroke="#000000" stroke-width="3" />

		<!-- Right Half: Dotted lines indicating AI/generative structure -->
		<path
			d="M 250 65 A 35 35 0 0 1 250 135"
			fill="none"
			stroke="#000000"
			stroke-width="3"
			stroke-dasharray="5 5"
		/>

		<!-- The central processing crystal -->
		<rect x="240" y="90" width="20" height="20" fill="#000000">
			<animateTransform
				attributeName="transform"
				type="rotate"
				from="0 250 100"
				to="360 250 100"
				dur="5s"
				repeatCount="indefinite"
			/>
		</rect>
		<circle cx="250" cy="100" r="5" fill="#ffffff" />
	</g>

	<!-- ========================================== -->
	<!-- OUTPUT / RESULT (Bottom)                   -->
	<!-- ========================================== -->
	<g id="output-stream">
		<!-- Downward data flow -->
		<path d="M 250 145 V 170" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="4 4">
			<animate
				attributeName="stroke-dashoffset"
				from="8"
				to="0"
				dur="0.3s"
				repeatCount="indefinite"
			/>
		</path>
		<!-- Arrowhead pointing to the final compiled build -->
		<polygon points="245,170 255,170 250,178" fill="#000000" />

		<!-- Final unified product block -->
		<rect x="215" y="178" width="70" height="12" fill="#000000" rx="3" />

		<!-- Subtle glow or pulse on finished product -->
		<rect
			x="215"
			y="178"
			width="70"
			height="12"
			fill="none"
			stroke="#000000"
			rx="3"
			stroke-width="1.5"
		>
			<animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite" />
			<animate
				attributeName="transform"
				type="scale"
				values="1; 1.05; 1"
				transform-origin="250 184"
				dur="1.5s"
				repeatCount="indefinite"
			/>
		</rect>
	</g>
</svg>

<style>
	.h-connection {
		margin-inline: auto;
	}
</style>
