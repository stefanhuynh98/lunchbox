<script>
	import { createEventDispatcher } from 'svelte';
	import { debounce } from '$lib/util';

	export let value = '';
	export let placeholder = '';
	export let suggestions = [];

	const dispatch = createEventDispatcher();

	function select(i) {
		dispatch('select', suggestions[i]);
		suggestions = [];
		value = '';
	}
</script>

<div class="relative">
	<input
		type="search"
		bind:value
		on:input={debounce(() => dispatch('input'))}
		{placeholder}
	/>
	{#if suggestions?.length > 0}
		<div class="absolute w-full top-full mt-[2px] py-[10px] left-0 flex flex-col bg-gray z-100 shadow-sm">
			{#each suggestions as suggestion, i}
				<div
					class="h-[40px] px-4 flex items-center hover:bg-primary hover:text-white cursor-pointer select-none"
					on:click={() => select(i)}
				>
					{suggestion.name}
				</div>
			{/each}
		</div>
	{/if}
</div>
