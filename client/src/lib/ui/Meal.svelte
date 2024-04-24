<script>
	import { modal } from '$lib/stores';
	import { EditMealForm } from '$ui/forms';

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

	function onEdit() {
		$modal.context = {
			id,
			recipe_name,
			recipe_id,
			meal_type,
			date,
		};
		$modal.form = EditMealForm;
	}
</script>

<div
	class="flex flex-col w-full h-full p-3 bg-gray justify-between select-none cursor-pointer hover:opacity-80 hover:ring-1 ring-primary"
	on:click={onEdit}
>
	<b class="text-xs">{recipe_name}</b>
	<ul class="flex flex-col text-xs font-mono">
		<li>{calories}kcal</li>
		<li>{protein}g protein</li>
		<li>{carbs}g carbs</li>
		<li>{fats}g fats</li>
		<li>{sugars}g sugars</li>
	</ul>
</div>
