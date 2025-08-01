interface GeneralChecklistItem {
	title: string;
	done?: boolean;
	tags?: string[];
}

export interface ChecklistBook extends GeneralChecklistItem {
	description?: string;
	publisher?: string;
	author: string;
}

export interface ChecklistArticle extends GeneralChecklistItem {
	link: string;
  rating?: number;
	description?: string;
}

export interface ChecklistVideo extends GeneralChecklistItem {
	link: string;
	description?: string;
	channel?: string;
}

export interface ChecklistResource extends GeneralChecklistItem {
  link: string;
	description?: string;
  type: 'walkthrough' | 'course' | 'repo';
}
