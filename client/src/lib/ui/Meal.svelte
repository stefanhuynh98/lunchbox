<script>
	import { modal } from '$lib/stores';
	import { MealDetail } from '$ui/parts';

	export let id = null;
	export let recipe_id = null;
	export let recipe_name = '';
	export let date = null;
	export let calories = '';
	export let protein = '';
	export let carbs = '';
	export let fats = '';
	export let sugars = '';
	export let meal_type = '';

	function onClick() {
		const d = new Date(date);

		$modal.content = MealDetail;
		$modal.context = {
			id,
			date: d,
			recipeName: recipe_name,
			type: meal_type,
		};
	}
</script>

<div
	class="flex flex-col justify-between w-full h-full p-4 text-sm cursor-pointer select-none bg-gray hover:opacity-80 hover:ring-1 ring-primary"
	on:click={onClick}
>
	<b class="text-sm">{recipe_name}</b>
	<ul class="flex flex-col font-mono text-xs">
		<li>{calories}kcal</li>
		<li>{protein}g protein</li>
		<li>{carbs}g carbs</li>
		<li>{fats}g fats</li>
		<li>{sugars}g sugars</li>
	</ul>
</div>
