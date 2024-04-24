<script>
	import { createEventDispatcher } from 'svelte';

	export let name = '';
	export let value = null;
	export let queryable = false;
	export let options = null;

	let focused = false;

	const dispatch = createEventDispatcher();
</script>

<div class="w-full bg-gray h-[50px] relative select-none">
	<div
		on:click={() => focused = !focused}
		class="w-full h-full cursor-pointer flex items-center px-4"
	>
		{#if value}
			test
		{:else}
			<div class="opacity-50">Select {name}</div>
		{/if}
		<div class="absolute flex h-full top-0 right-5 items-center">
			<img
				src="/arrow-down.svg"
				alt="select"
				width="15"
				class="transition"
				style:transform="rotate({focused ? 180 : 0}deg)"
			/>
		</div>
	</div>
	{#if focused && options}
		<div class="flex abolute top-full">
			<div class="flex h-50px"></div>
			{#each options as option}
				<div class="flex h-[50px]"></div>
			{/each}
		</div>
	{/if}
</div>

{focused}
