<script lang="ts">
	import * as protobuf from 'protobufjs';
	import Textarea from '$components/Textarea.svelte';

	interface Props {
		class?: string;
	}

	let { class: className } = $props();

	let protoText = $state(`syntax = "proto3";
message OurMessage {
  string name = 1;
  int32 age = 2;
}`);

	let messageJson = $state(`{
  "name": "Alice",
  "age": 30
}`);

	let compilationError = $state('');

	let jsOutput = $state('');
	let binaryOutput = $state('');

	$effect(() => {
		try {
			const root = protobuf.parse(protoText, { keepCase: true }).root;
			const Message = root.lookupType('OurMessage');

			let messageData;
			try {
				messageData = JSON.parse(messageJson);
			} catch {
				binaryOutput = 'Invalid JSON in data editor';
				return;
			}

			const errMsg = Message.verify(messageData);
			if (errMsg) throw new Error(errMsg);

			const message = Message.create(messageData);
			const buffer = Message.encode(message).finish();
			binaryOutput = Array.from(buffer)
				.map((b) => b.toString(16).padStart(2, '0'))
				.join(' ');

			jsOutput = JSON.stringify(Message.toJSON(), null, 2);
		} catch (err) {
			if (err instanceof Error) compilationError = `Error: ${err.message}`;
			jsOutput = '';
			binaryOutput = '';
		}
	});
</script>

<div
	class={[
		'flex border-2 border-dashed border-frangipani-800/30 rounded-md p-3 flex-col gap-4',
		className
	]}
>
	<div>
  	<div class="text-bold text-xl text-center">Сериализация Proto</div>
		<div class="mt-2">В данном редакторе вы можете посмотреть как сериализуется Protobuf.</div>
		<div>
			В процессе того, как будете играться, обратите внимание, что сериализиуется тут только
			структура под название <strong>OurMessage</strong>. Такие рамки поставлены из-за того что <strike>я ленивый</strike>
			серилизация множества структур заняла бы намного больше места.
		</div>
	</div>
	<div class="border-b-2 border-dashed border-frangipani-800/30"></div>
	<div class="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
		<div class="h-full sm:w-1/2 flex flex-col grow">
			<div class="mb-0.25">
				<div class="inline font-semibold">Прото-схема</div>
				<div class="inline text-[10px]">(можно редактировать)</div>
			</div>
			<Textarea autoresize class="h-full items-stretch" bind:value={protoText} />
		</div>
		<div class="hidden sm:block i-tabler-arrow-right"></div>
		<div class="sm:hidden i-tabler-arrow-down mx-auto"></div>
		<div class="h-full sm:w-1/2 grow">
			<div class="font-semibold">Сгенерированный JS (в формате JSON)</div>
			<Textarea autoresize readonly value={jsOutput || compilationError} />
		</div>
	</div>
	<div class="w-full sm:hidden border-b opacity-50 border-dashed border-frangipani-800"></div>
	<div class="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
		<div class="h-fit sm:w-1/2 grow">
			<div class="mb-0.25">
				<div class="inline font-semibold">Данные для схемы</div>
				<div class="inline text-[10px]">(можно редактировать)</div>
			</div>
			<Textarea autoresize bind:value={messageJson} />
		</div>
		<div class="hidden sm:block i-tabler-arrow-right"></div>
		<div class="sm:hidden i-tabler-arrow-down mx-auto"></div>
		<div class="h-fit sm:w-1/2 grow">
			<div class="font-semibold">Сериализованные данные (в формате HEX)</div>
			<Textarea autoresize readonly value={binaryOutput} />
		</div>
	</div>
</div>
