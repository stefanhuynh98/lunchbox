<script>
	import { sideModal } from '$lib/stores';
	import { Button } from '$ui';

	let name = '';
	let ingredients = [];

	function onSubmit() {
		const res = fetch('http://localhost:3000/v1/recipes', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				ingredients,
			}),
		});
		$sideModal.form = false;
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
	<input
		type="search"
	/>
	<div class="grow items-start">
		<Button>Create recipe</Button>
	</div>
</form>
