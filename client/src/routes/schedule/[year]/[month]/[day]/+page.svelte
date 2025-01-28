<script>
	import { Meal } from '$ui';

	const dayString = (day) => {
		return day
			.toLocaleDateString('nl-NL', { day: 'numeric', weekday: 'long' })
			.slice(0, 1)
			.toUpperCase() +
		day
			.toLocaleDateString('nl-NL', { day: 'numeric', weekday: 'long' })
			.slice(1)
	}

	export let data = {};
</script>

<div class="mt-8 grid grid-cols-7 gap-4">
	{#each data.week as { day, breakfast, lunch, dinner }}
		<div class="flex flex-col gap-4">
			{dayString(day)}
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
