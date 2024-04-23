<script>
	import { Meal } from '$ui';

	export let data = {};
</script>

<div class="grid grid-cols-7 mt-8 gap-4">
	{#each data.week as { day, breakfast, lunch, dinner }}
		<div class="flex flex-col gap-4">
			{day.toLocaleDateString('nl-NL', { day: 'numeric', weekday: 'long' })}
			<div class="flex gap-4 empty:border-[1px] empty:border-black/20 aspect-square items-center justify-center">
				{#if breakfast}
					<Meal {...breakfast} name={breakfast.recipe_name} />
				{/if}
			</div>
			<div class="flex gap-4 empty:border-[1px] empty:border-black/20 aspect-square">
				{#if lunch}
					<Meal {...lunch} name={lunch.recipe_name} />
				{/if}
			</div>
			<div class="flex gap-4 empty:border-[1px] empty:border-black/20 aspect-square">
				{#if dinner}
					<Meal {...dinner} name={dinner.recipe_name} />
				{/if}
			</div>
		</div>
	{/each}
</div>
