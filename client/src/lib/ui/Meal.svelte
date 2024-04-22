<script>
	export let name = '';
	export let calories = '';
	export let protein = '';
	export let carbs = '';
	export let fats = '';
	export let sugars = '';
</script>

<div class="flex flex-col w-full h-full p-4 bg-gray justify-between select-none cursor-pointer">
	<b>{name}</b>
	<ul class="flex flex-col text-xs font-mono">
		<li>{calories}kcal</li>
		<li>{protein}g protein</li>
		<li>{carbs}g carbs</li>
		<li>{fats}g fats</li>
		<li>{sugars}g sugars</li>
	</ul>
</div>
