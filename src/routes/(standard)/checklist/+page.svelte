<script lang="ts">
	import ContentH1 from '@/lib/components/Content/ContentH1.svelte';
	import ContentParagraph from '@/lib/components/Content/ContentParagraph.svelte';
	import ChecklistBrowser from '$mod/checklist/ChecklistBrowser.svelte';
	import ChecklistHeader from '$mod/checklist/ChecklistHeader.svelte';
	import ChecklistTab from '$mod/checklist/ChecklistTab.svelte';
	import ChecklistBookItem from '$mod/checklist/ChecklistBookItem.svelte';
	import ChecklistArticleItem from '$mod/checklist/ChecklistArticleItem.svelte';
	import ChecklistVideoItem from '$mod/checklist/ChecklistVideoItem.svelte';
	import ChecklistProjectItem from '$mod/checklist/ChecklistProjectItem.svelte';
	import BOOKS from '@/lib/data/checklist/books.toml';
	import ARTICLES from '@/lib/data/checklist/articles.toml';
	import VIDEOS from '@/lib/data/checklist/videos.toml';
	import PROJECTS from '@/lib/data/checklist/projects.toml';
  import RESOURCES from '@/lib/data/checklist/resources.toml'
	import { type ComponentProps } from 'svelte';
	import ChecklistProgress from '@/lib/modules/checklist/ChecklistProgress.svelte';
	import ChecklistSearch from '@/lib/modules/checklist/ChecklistSearch.svelte';
	import ChecklistResourceItem from '@/lib/modules/checklist/ChecklistResourceItem.svelte';

	const CHECKLIST_TABS = [
		{
			id: 'articles',
			title: 'Статьи'
		},
		{
			id: 'books',
			title: 'Книги'
		},
		{
			id: 'videos',
			title: 'Видео'
		},
		{
			id: 'projects',
			title: 'Проекты'
		},
		{
			id: 'resources',
			title: 'Другое'
		}
	] as const;

	let activeTab: (typeof CHECKLIST_TABS)[number]['id'] = $state('articles');

	const currentList = $derived.by<{ data: ComponentProps<typeof CurrentItemComponent>[] }>(() => {
		switch (activeTab) {
			case 'articles':
				return ARTICLES;
			case 'books':
				return BOOKS;
			case 'videos':
				return VIDEOS;
			case 'projects':
				return PROJECTS;
			case 'resources':
				return RESOURCES;
		}
	});

	const CurrentItemComponent = $derived.by(() => {
		switch (activeTab) {
			case 'articles':
				return ChecklistArticleItem;
			case 'books':
				return ChecklistBookItem;
			case 'videos':
				return ChecklistVideoItem;
			case 'projects':
				return ChecklistProjectItem;
			case 'resources':
				return ChecklistResourceItem;
		}
	});

	let searchQuery = $state('');

	const filteredList = $derived.by(() => {
		const list = currentList.data;
		if (!searchQuery) return list;
		return list.filter(
			(item) =>
				item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
		);
	});

	const currentListProgress = $derived.by(() => {
		const list = currentList.data;
		const doneCount = list.filter((item) => item.done).length;
		const totalCount = list.length;
		return (doneCount / totalCount) * 100;
	});
</script>

<div>
	<ContentH1>Чеклист</ContentH1>
	<ContentParagraph
		><span class="font-semibold">Чеклист</span> — это маленькая страница с бесконечным списком того,
		что я хочу изучить/сделать/посмотреть. Изначально я держал данный список у себя в заметках, однако,
		решил поделиться им, для того чтобы любой желающий мог повторить мой путь и открыть для себя что-то
		новое.</ContentParagraph
	>
	<ChecklistSearch bind:value={searchQuery} class="mt-2" />
	<ChecklistHeader class="mt-2">
		{#each CHECKLIST_TABS as tab (tab.id)}
			<ChecklistTab onclick={() => (activeTab = tab.id)} active={activeTab === tab.id}
				>{tab.title}</ChecklistTab
			>
		{/each}
	</ChecklistHeader>
	<ChecklistProgress class="mt-2" progress={currentListProgress} />
	<ChecklistBrowser class="mt-3">
		{#each filteredList as item (item.title)}
			<CurrentItemComponent {...item}></CurrentItemComponent>
		{/each}
	</ChecklistBrowser>
</div>
