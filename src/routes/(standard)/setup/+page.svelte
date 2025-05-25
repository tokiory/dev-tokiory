<script>
	import SetupList from '@/lib/modules/setup-list/SetupList.svelte';
	import SetupItem from '@/lib/modules/setup-list/SetupItem.svelte';
	import Tabulator from '@/lib/modules/tabulator/Tabulator.svelte';
	import TabulatorTab from '@/lib/modules/tabulator/TabulatorTab.svelte';

	const tabs = [
		{
			title: 'Основной сетап',
			items: [
				{
					icon: 'i-tabler-device-desktop',
					label: 'Устройство',
					value: 'Macbook Pro M3 Pro (512GB / 18GB / MRX33LL/A)',
					link: 'https://www.apple.com/macbook-pro/'
				},
				{
					icon: 'i-tabler-planet',
					label: 'Браузер',
					value: 'Arc',
					link: 'https://arc.net/'
				},
				{
					icon: 'i-tabler-terminal-2',
					label: 'Терминал',
					value: 'Ghostty',
					link: 'https://ghostty.org/'
				},
				{
					icon: 'i-tabler-note',
					label: 'Заметки',
					value: 'Bear',
					link: 'https://bear.app/'
				},
				{
					icon: 'i-tabler-list-numbers',
					label: 'Редактор',
					value: 'Zed',
					link: 'https://zed.dev/'
				},
				{
					icon: 'i-tabler-terminal',
					label: 'Терминальный редактор',
					value: 'Neovim',
					link: 'https://neovim.io/'
				},
				{
					icon: 'i-tabler-robot',
					label: 'AI',
					value: 'Ollama',
					link: 'https://ollama.ai/'
				},
				{
					icon: 'i-tabler-code',
					label: 'Тестирование API',
					value: 'Hoppscotch',
					link: 'https://hoppscotch.io/'
				},
				{
					icon: 'i-tabler-book',
					label: 'Ридер',
					value: 'Skim',
					link: 'https://skim-app.sourceforge.io/'
				}
			]
		},
		{
			title: 'Домашний сетап',
			items: [
				{
					icon: 'i-tabler-device-desktop',
					label: 'Устройство',
					value: 'Mac Mini M1 (512GB / 16GB / Z12P0007MD/A)',
					link: 'https://www.apple.com/mac-mini/'
				},
				{
					icon: 'i-tabler-planet',
					label: 'Браузер',
					value: 'Arc',
					link: 'https://arc.net/'
				},
				{
					icon: 'i-tabler-terminal-2',
					label: 'Терминал',
					value: 'Warp',
					link: 'https://warp.dev/'
				},
				{
					icon: 'i-tabler-note',
					label: 'Заметки',
					value: 'Bear',
					link: 'https://bear.app/'
				},
				{
					icon: 'i-tabler-list-numbers',
					label: 'Редактор',
					value: 'Zed',
					link: 'https://zed.dev/'
				},
				{
					icon: 'i-tabler-robot',
					label: 'AI',
					value: 'Ollama',
					link: 'https://ollama.ai/'
				},
				{
					icon: 'i-tabler-code',
					label: 'Тестирование API',
					value: 'Insomnia',
					link: 'https://insomnia.rest/'
				}
			]
		}
	];
</script>

<div>
	<Tabulator class="!gap-1 mt-8">
		{#each tabs as tab, tabIdx (`tab-${tabIdx}`)}
			<TabulatorTab title={tab.title}>
				<SetupList>
					{#each tab.items as item, idx (`tab-${tabIdx}-tech-${idx}`)}
						<SetupItem icon={item.icon} label={item.label} value={item.value} link={item.link}
						></SetupItem>
					{/each}
				</SetupList>
			</TabulatorTab>
		{/each}
	</Tabulator>
</div>
