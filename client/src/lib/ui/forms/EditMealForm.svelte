<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { getRecipes } from '$lib/backend';
	import { modal, notification } from '$lib/stores';
	import { Button } from '$ui';
	import { RecipePicker } from '$ui/parts';
	import { Select } from '$ui/input';

	let recipes = null;
	let recipe = $modal.context.recipe_id;
	let date = $modal.context.date;

	function onSubmit() {
		const res = fetch(`${PUBLIC_BACKEND_URL}/v1/meals/${$modal.context.id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			}),
		});

		if (res.status === 200) {
			$modal.content = false;
			$notification = 'Changes to meal saved successfully';
		}
	}
</script>

<form on:submit={onSubmit}>
	<h2>Edit meal</h2>
	<div class="flex flex-col gap-2">
		<label for="date">Date</label>
		<input id="date" type="date" bind:value={date} />
	</div>
	<Select
		bind:options={recipes}
		on:search={(query) => recipes = getRecipes({ query })}
		queryable
	/>
	<div class="grow items-start mt-[100px]">
		<Button>Save changes</Button>
	</div>
</form>
