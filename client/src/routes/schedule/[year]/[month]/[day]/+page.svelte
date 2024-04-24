<script>
	import { Meal } from '$ui';

	export let data = {};
</script>

<div class="grid grid-cols-7 mt-8 gap-2">
	{#each data.week as { day, breakfast, lunch, dinner }}
		<div class="flex flex-col gap-2">
			{day.toLocaleDateString('nl-NL', { day: 'numeric', weekday: 'long' })}
		</div>
	{/each}
	{#each ['breakfast', 'lunch', 'dinner'] as type}
		{#each data.week as day}
			{@const meal = day[type]}
			{#if meal}
				<Meal {...meal} />
			{:else}
				<div class="
					flex
					gap-4
					empty:border-[1px]
					empty:border-black/20
					aspect-square
					items-center
					justify-center
					"
				/>
			{/if}
		{/each}
	{/each}
</div>
