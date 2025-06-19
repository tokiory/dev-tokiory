interface GeneralChecklistItem {
	title: string;
	done?: boolean;
	tags?: string[];
}

export interface ChecklistBook extends GeneralChecklistItem {
	description?: string;
	author: string;
}

export interface ChecklistArticle extends GeneralChecklistItem {
	link: string;
	description?: string;
}

export interface ChecklistVideo extends GeneralChecklistItem {
	link: string;
	description?: string;
	channel?: string;
}
