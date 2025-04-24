import type { Node } from '$lib/modules/array-visualizer/types/node';

/**
 * @warn This function is modifying node inplace
 */
export const setCursor = (nList: Node[], cursor: number, state = true) => {
	nList[cursor].cursor = state;
	return nList;
};

/**
 * @warn This function is modifying node inplace
 */
export const setOnlyCursor = (nList: Node[], cursor: number, state = true) => {
	nList.forEach((node) => {
		node.cursor = false;
	});
	return setCursor(nList, cursor, state);
};

/**
 * @warn This function is modifying node inplace
 */
export const setActive = (nList: Node[], active: number, state = true) => {
	nList[active].active = state;
	return nList;
};

/**
 * @warn This function is modifying node inplace
 */
export const clearStates = (nList: Node[]) => {
	nList.forEach((node) => {
		node.cursor = false;
		node.active = false;
	});
	return nList;
};

export const numsToNodes = (nums: number[]): Node[] => {
  return nums.map((num, i) => ({
    id: i.toString(),
    value: num,
    cursor: false,
    active: false,
  }));
};
