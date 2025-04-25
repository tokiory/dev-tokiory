export interface Article {
	title: string;
	slug: string;
	description: string;
	tags: string[];
  date: string;
  draft?: boolean;
  visualized?: boolean;
}

export interface ArticlesResponse {
	amount: number;
	articles: Article[];
}
