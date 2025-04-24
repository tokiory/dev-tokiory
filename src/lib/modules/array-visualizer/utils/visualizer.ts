import type { Node } from '$lib/modules/array-visualizer/types/node';

export const randomizeNodes = (): Array<Node> => {
	return Array.from({ length: 10 }, () => ({
		id: crypto.randomUUID(),
		value: Math.floor(Math.random() * 100)
	}));
};

export const randomizeInput = (): string => {
	return Array.from({ length: 10 }, () => (Math.floor(Math.random() * 100))).toString();
};
