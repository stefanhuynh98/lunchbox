<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let label = null;
	export let returnLabel = null;
	export let counter = 0;

	function increment() {
		counter++;
		dispatch('increment');
	}

	function decrement() {
		counter--;
		dispatch('decrement');
	}

	function reset() {
		counter = 0;
		dispatch('reset');
	}

	const dispatch = createEventDispatcher();
</script>

<div class="flex h-[40px] items-stretch gap-[1px] relative">
	<button
		class="group flex w-[40px] items-center justify-center bg-gray hover:bg-primary"
		on:click={decrement}
	>
		<img
			src="/arrow-down.svg"
			class="rotate-90 group-hover:invert"
			alt="decrement"
		/>
	</button>
	<button
		class="w-[200px] h-full px-4 bg-gray text-xs"
		on:click={reset}
	>
		{label}
	</button>
	<button
		class="group flex w-[40px] items-center justify-center bg-gray hover:bg-primary"
		on:click={increment}
	>
		<img
			src="/arrow-down.svg"
			class="-rotate-90 group-hover:invert"
			alt="decrement"
		/>
	</button>
	{#if returnLabel && counter !== 0}
		<div
			class="absolute flex justify-center w-full top-full mt-[3px] left"
			
		>
			<button
				class="text-xs hover:underline opacity-80"
				on:click={reset}
			>
				{returnLabel}
			</button>
	</div>
	{/if}
</div>
