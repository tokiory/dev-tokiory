<svg class="w-full bg-inherit" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
	<style>
		.node {
			r: 6;
		}
		.ping {
			animation: ping 2s infinite;
		}
		.dot {
			r: 4;
			animation: travel 2s infinite;
		}

		@keyframes ping {
			0% {
				r: 10;
				opacity: 0.8;
			}
			100% {
				r: 100;
				opacity: 0;
			}
		}

		@keyframes travel {
			0% {
				transform: translate(0, 0);
				opacity: 1;
			}
			100% {
				transform: translate(var(--tx), var(--ty));
				opacity: 0;
			}
		}
	</style>

	<rect class="fill-frangipani-50" width="800" height="200" />

	<!-- Central node -->
	<circle class="fill-driftwood-700" cx="400" cy="100" r="8" />

	<!-- Ping pulse -->
	<circle class="stroke-2 stroke-driftwood-700 opacity-0 fill-none ping" cx="400" cy="100" />

	<!-- Lines to nodes -->
	<line class="stroke-driftwood-700 stroke-2" x1="400" y1="100" x2="200" y2="50" />
	<line class="stroke-driftwood-700 stroke-2" x1="400" y1="100" x2="600" y2="50" />
	<line class="stroke-driftwood-700 stroke-2" x1="400" y1="100" x2="200" y2="150" />
	<line class="stroke-driftwood-700 stroke-2" x1="400" y1="100" x2="600" y2="150" />
	<line class="stroke-driftwood-700 stroke-2" x1="400" y1="100" x2="100" y2="100" />
	<line class="stroke-driftwood-700 stroke-2" x1="400" y1="100" x2="700" y2="100" />

	<!-- Nodes -->
	<circle class="fill-driftwood-700 node" cx="200" cy="50" />
	<circle class="fill-driftwood-700 node" cx="600" cy="50" />
	<circle class="fill-driftwood-700 node" cx="200" cy="150" />
	<circle class="fill-driftwood-700 node" cx="600" cy="150" />
	<circle class="fill-driftwood-700 node" cx="100" cy="100" />
	<circle class="fill-driftwood-700 node" cx="700" cy="100" />

	<!-- Data dots -->
	<circle class="fill-driftwood-700 dot" cx="400" cy="100" style="--tx:-200px; --ty:-50px; animation-delay: 0s;" />
	<circle class="fill-driftwood-700 dot" cx="400" cy="100" style="--tx:200px; --ty:-50px; animation-delay: 0.3s;" />
	<circle class="fill-driftwood-700 dot" cx="400" cy="100" style="--tx:-200px; --ty:50px; animation-delay: 0.6s;" />
	<circle class="fill-driftwood-700 dot" cx="400" cy="100" style="--tx:200px; --ty:50px; animation-delay: 0.9s;" />
	<circle class="fill-driftwood-700 dot" cx="400" cy="100" style="--tx:-300px; --ty:0px; animation-delay: 1.2s;" />
	<circle class="fill-driftwood-700 dot" cx="400" cy="100" style="--tx:300px; --ty:0px; animation-delay: 1.5s;" />
</svg>
