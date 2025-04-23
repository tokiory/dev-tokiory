import { createSpring, type AnimationParams } from "animejs";

export const fadeRight: AnimationParams = {
	x: { from: '-1.25em', ease: createSpring({ stiffness: 100, damping: 8 }), },
	duration: 300,
	opacity: { from: 0, to: 1 },
	ease: 'outCirc'
};
