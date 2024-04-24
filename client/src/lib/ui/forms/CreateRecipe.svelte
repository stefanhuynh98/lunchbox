<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { modal, notification } from '$lib/stores';
	import { Button } from '$ui';
	import { IngredientPicker } from '$ui/parts';

	let name = '';
	let ingredients = [];

	async function onSubmit() {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/v1/recipes`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				ingredients: ingredients.map(ingredient => {
					return {
						food_id: ingredient.id,
						amount: ingredient.amount,
					}
				}),
			}),
		});

		if (res.status === 201) {
			$notification = 'Recipe successfully created';
			$modal.content = false;
		} else {
			$notification = 'Something went wrong';
		}
	}
</script>

<form on:submit={onSubmit}>
	<h2>New recipe</h2>
	<input
		type="text"
		placeholder="Name"
		bind:value={name}
		autofocus
		required
	/>
	<div class="flex flex-col gap-4 w-full items-stretch">
		<div class="font-bold">Add ingredients</div>
		<IngredientPicker bind:ingredients />
	</div>
	<div class="grow items-start mt-[100px]">
		<Button>Create recipe</Button>
	</div>
</form>
