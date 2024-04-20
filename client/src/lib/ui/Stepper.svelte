<script>
	import { fly } from 'svelte/transition';

	export let value = 0;
	export let label = '';
	export let width = 30;

	let lastValue = value;
	const initValue = value;
	const speed = 100;

	function increment() {
		lastValue = value;
		value++;
	}

	function decrement() {
		lastValue = value;
		value--;
	}

	function reset() {
		value = initValue;
	}
</script>

<div class="inline-flex h-[30px] items-center gap-[1px]">
	<div
		class="group w-[30px] bg-gray h-full bg-gray hover:bg-primary cursor-pointer flex items-center justify-center"
		on:click={decrement}
	>
		<img src="/arrow-down.svg" class="rotate-90 group-hover:invert" />
	</div>
	<div
		style:width="{width}px"
		class="h-full px-4 bg-gray text-xs font-mono cursor-pointer overflow-hidden"
		on:click={reset}
	>
		{#key value}
			<div
				class="w-full h-full flex items-center justify-center"
				in:fly={{ y: lastValue < value ? -30 : 30, duration: speed, delay: speed }}
				out:fly={{ y: lastValue < value ? 30 : -30, duration: speed }}
			> 
				{label || value}
			</div>
		{/key}
	</div>
	<div
		class="group w-[30px] bg-gray h-full bg-gray hover:bg-primary cursor-pointer flex items-center justify-center"
		on:click={increment}
	>
		<img src="/arrow-down.svg" class="-rotate-90 group-hover:invert" />
	</div>
</div>
