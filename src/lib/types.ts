export interface Article {
	title: string;
	slug: string;
	description: string;
	tags: string[];
  date: string;
}

export interface ArticlesResponse {
	amount: number;
	articles: Article[];
}
