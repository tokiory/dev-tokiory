import { createSpring, type AnimationParams } from "animejs";

export const slideRight: AnimationParams = {
	x: { from: '-100%', to: '0%' },
	duration: 300,
	ease: createSpring({ stiffness: 100, damping: 8 }),
};
