type ChecklistData<T> = {data: T[]}

declare module '@/lib/data/checklist/books.toml' {
	import { ChecklistBook } from '$mod/checklist/types/checklist.types';

	interface Data {
		data: ChecklistBook[];
	};

  const data: Data;
	export default data;
}

declare module '@/lib/data/checklist/articles.toml' {
	import { ChecklistArticle } from '$mod/checklist/types/checklist.types';

	interface Data {
		data: ChecklistArticle[];
	};

  const data: Data;
	export default data;
}

declare module '@/lib/data/checklist/videos.toml' {
	import { ChecklistVideo } from '$mod/checklist/types/checklist.types';

	interface Data {
		data: ChecklistVideo[];
	};

  const data: Data;
	export default data;
}

declare module '@/lib/data/checklist/resources.toml' {
	import { ChecklistResources } from '$mod/checklist/types/checklist.types';
  const data: ChecklistData<ChecklistResources>;
	export default data;
}
