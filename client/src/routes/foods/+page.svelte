<script>
	let foodName = '';
	let foodCalories = null;
	let foodSugars = null;
	let foodCarbs = null;
	let foodFats = null;
	let foodSalt = null;
	let foodUnit = 'g';

	function createFood() {
	}
</script>

<form on:submit={createFood}>
	<div>
		<label for="name">Name</label>
		<input id="name" type="text" bind:value={foodName} required />
	</div>

	<div>
		<label for="calories">Calories</label>
		<input id="calories" type="number" bind:value={foodCalories} required />
	</div>

	<div>
		<label for="sugars">Sugars</label>
		<input id="sugars" type="number" bind:value={foodSugars} required />
	</div>

	<div>
		<label for="carbs">Carbs</label>
		<input id="carbs" type="number" bind:value={foodCarbs} required />
	</div>

	<div>
		<label for="fats">Fats</label>
		<input id="fats" type="number" bind:value={foodFats} required />
	</div>

	<div>
		<label for="salt">Salt</label>
		<input id="salt" type="number" bind:value={foodSalt} />
	</div>

	<div>
		<label for="unit">Unit</label>
		<select id="unit" name="unit" bind:value={foodUnit}>
			<option value="g">g</option>
			<option value="ml">ml</option>
		</select>
	</div>
</form>
