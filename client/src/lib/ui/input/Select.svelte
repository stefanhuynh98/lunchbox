<script>
	export let name = '';
	export let value = null;
	export let options = null;

	let focused = false;
</script>

<div class="w-full bg-gray h-[50px] relative select-none">
	<div
		on:click={() => focused = !focused}
		class="flex items-center w-full h-full px-4 cursor-pointer"
	>
		{#if value}
			test
		{:else}
			<div class="opacity-50">Select {name}</div>
		{/if}
		<div class="absolute top-0 flex items-center h-full right-5">
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
