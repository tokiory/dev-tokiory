export const trackEvent = (name: string, properties?: Record<string, unknown>) => {
	if (window.umami) {
		umami.track(name, properties);
	}
};

export enum LinkEvent {
	ArticleListing = 'article-listing-link',
	SourceCode = 'source-code-link',
	ChecklistItem = 'checklist-item-link',
	Social = 'social-link'
}
