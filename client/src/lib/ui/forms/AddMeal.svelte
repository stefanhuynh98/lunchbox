<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { modal, notification } from '$lib/stores';
	import { Button } from '$ui';
	import { RecipePicker } from '$ui/parts';

	let recipe = null;

	async function onSubmit() {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/v1/meals`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				recipe_id: recipe.id,
			}),
		});

		if (res.status === 201) {
			$notification = 'Added meal entry';
			$modal.content = false;
		}
	}
</script>

<form on:submit={onSubmit}>
	<h2>New food entry</h2>
	<div class="grid grid-cols-2 gap-4">
		<RecipePicker bind:recipe />
	</div>
	<div class="grow items-start">
		<Button>Create food entry</Button>
	</div>
</form>
