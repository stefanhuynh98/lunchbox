<script>
	import { Button } from '$ui';
	import { RecipePicker } from '$ui/parts';

	let recipe = null;
</script>

<form>
	<h2>New food entry</h2>
	<div class="grid grid-cols-2 gap-4">
		<RecipePicker bind:recipe />
		{#if recipe}
			{recipe.name}
		{/if}
	</div>
	<div class="items-start grow">
		<Button>Add meal</Button>
	</div>
</form>
