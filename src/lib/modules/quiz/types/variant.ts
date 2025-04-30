export interface Variant {
  id: string;
	name: string;
  variant?: 'correct' | 'incorrect' | 'selected' | null;
  correct?: boolean;
}
