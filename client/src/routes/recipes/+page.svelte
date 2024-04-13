<script>
	import { sideModal } from '$lib/stores';
	import { Button } from '$ui';
	import { RecipesTable } from '$ui/parts';
	import { CreateRecipe } from '$ui/forms';
</script>

<div class="flex justify-between">
	<div>
		<h1 class="mb-[14px]">Recipes</h1>
		<p>All your recipes in one place.</p>
	</div>
	<Button on:click={() => $sideModal.form = CreateRecipe}>Create new recipe</Button>
</div>

<div class="flex flex-col items-start mt-[34px]">
	<RecipesTable />
</div>
