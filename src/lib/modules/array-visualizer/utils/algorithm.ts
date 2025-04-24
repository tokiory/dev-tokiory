import type {
	AlgorithmYellow,
	AlgorithmYellowOptions
} from '$lib/modules/array-visualizer/types/algorithm';
import type { Node } from '$lib/modules/array-visualizer/types/node';

export const composeStep = (nodes: Node[], options?: AlgorithmYellowOptions): AlgorithmYellow => ({
	nodes,
	...options
});
