import { handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://8bfc5c41617d329f8b1f1d0ae8e96d5c@o4509690632798208.ingest.de.sentry.io/4509690700300368'
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
