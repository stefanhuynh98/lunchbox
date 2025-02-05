<script>
	import { Meal } from '$ui';
	import { modal } from '$lib/stores';
	import { AddMeal } from '$lib/ui/forms';

	function dayString(day) {
		let string = day.toLocaleDateString('nl-NL', { day: 'numeric', weekday: 'long' });

		return string[0].toUpperCase() + string.slice(1);
	}

	function openCreateMealModal(date, type) {
		$modal.content = AddMeal;
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
					border-[1px]
					border-black/20
					aspect-square
					items-center
					justify-center
					text-transparent
					hover:text-black
					hover:bg-neutral-100
					cursor-pointer
					"
					on:click={() => openCreateMealModal(day.day, type)}
				>
					Add {type}
				</div>
			{/if}
		{/each}
	{/each}
</div>
