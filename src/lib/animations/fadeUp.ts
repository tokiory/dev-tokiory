import { createSpring, type AnimationParams } from 'animejs';

export const fadeUp: AnimationParams = {
	opacity: { from: 0, to: 1 },
	y: { from: '.25em', ease: createSpring({ stiffness: 100, damping: 8 }), },
	duration: 300,
	ease: 'outCirc'
};
