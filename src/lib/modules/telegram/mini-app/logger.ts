const PREFIX = '[TMA]';

export const warn = (message: string, args?: Record<string, unknown>) => {
	console.warn(
		`${PREFIX} message="${message}" ` +
			Object.entries(args || {})
				.map(([k, v]) => `${k}="${v}"`)
				.join(' ')
	);
};
