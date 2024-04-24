<script>
	import { IngredientsTable } from '$ui/parts';

	export let data = {};

	const ingredients = data.ingredients;
	const total = {
		'Calories': ingredients.reduce((a, b) => a + b.calories, 0),
		'Protein': ingredients.reduce((a, b) => a + b.protein, 0),
		'Carbs': ingredients.reduce((a, b) => a + b.carbs, 0),
		'Sugars': ingredients.reduce((a, b) => a + b.sugars, 0),
		'Fats': ingredients.reduce((a, b) => a + b.fats, 0),
		'Salt': ingredients.reduce((a, b) => a + b.salt, 0),
	};
</script>

<div class="grid grid-cols-2 gap-4 mb-20">
	<h2>{data.name}</h2>
	<div class="p-8 my-4 bg-gray inline-flex flex-col gap-4">
		<h2>Summary</h2>
		<div class="grid grid-cols-3 gap-4">
			{#each Object.entries(total) as [key, value]}
				<div class="flex flex-col">
					<b>{key}</b>
					<div class="text-2xl">{typeof value === 'number' ? value.toFixed() : value}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
<IngredientsTable {ingredients} />
