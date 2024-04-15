<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { modal } from '$lib/stores';
	import { Button } from '$ui';

	let name = '';
	let calories = null;
	let protein = null;
	let carbs = null;
	let sugars = null;
	let fats = null;

	function onSubmit() {
		const res = fetch(`${PUBLIC_BACKEND_URL}/v1/foods`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				calories,
				protein,
				carbs,
				sugars,
				fats,
				unit: 'g',
			}),
		});
		$modal.form = false;
	}
</script>

<form on:submit={onSubmit}>
	<h2>New food entry</h2>
	<input
		type="text"
		placeholder="Name"
		bind:value={name}
		autofocus
		required
	/>
	<div>
		<label class="font-bold">Macros</label>
		<p>All values are per 100g</p>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<input
			type="number"
			placeholder="Calories (per 100g)"
			bind:value={calories}
			required
		/>
		<input
			type="number"
			placeholder="Protein (per 100g)"
			min="0"
			bind:value={protein}
			required
		/>
		<input
			type="number"
			placeholder="Carbs (per 100g)"
			bind:value={carbs}
			required
		/>
		<input
			type="number"
			placeholder="Sugars (per 100g)"
			bind:value={sugars}
			required
		/>
		<input
			type="number"
			placeholder="Fats (per 100g)"
			bind:value={fats}
			required
		/>
	</div>
	<div class="grow items-start">
		<Button>Create food entry</Button>
	</div>
</form>
