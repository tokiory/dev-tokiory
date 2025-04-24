import { clearStates, setActive, setCursor } from '$lib/modules/array-visualizer/utils/node';
import type { AlgorithmFunc } from '$mod/array-visualizer/types/algorithm';
import { composeStep } from '$mod/array-visualizer/utils/algorithm';

export const selectionSort: AlgorithmFunc = function* (nodes) {
	const nodesDuplicate = [...nodes];

	for (let i = nodes.length - 1; i >= 0; i--) {
		// yield setOnlyCursor(nodesDuplicate, i);
		let maxIndex = i;
		yield composeStep(setActive(nodesDuplicate, maxIndex), {
			description: 'Беру последний неотсортированный элемент'
		});

		for (let j = 0; j < i; j++) {
			yield composeStep(setCursor(nodesDuplicate, j), {
				description: 'Ищу максимальный элемент среди неотсортированных'
			});

			if (nodesDuplicate[j].value > nodesDuplicate[maxIndex].value) {
				if (maxIndex !== i) {
					yield composeStep(setActive(nodesDuplicate, maxIndex, false));
				}
				maxIndex = j;
				yield composeStep(setActive(nodesDuplicate, maxIndex), {
					description: 'Нашел новый максимальный элемент'
				});
			}
			setCursor(nodesDuplicate, j, false);
		}

		[nodesDuplicate[maxIndex], nodesDuplicate[i]] = [nodesDuplicate[i], nodesDuplicate[maxIndex]];
		yield composeStep(nodesDuplicate, {
			description: 'Меняю местами максимальный элемент и последний неотсортированный элемент'
		});
		yield composeStep(clearStates(nodesDuplicate));
	}
};
