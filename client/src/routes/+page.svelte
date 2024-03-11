<script>
    import {onMount} from "svelte";

	let recipes = [];

	onMount(async () => {
		const res = await fetch('http://localhost:3000/v1/recipes', {
			credentials: 'include'
		});
		recipes = await res.json();
	});
</script>

Your recipes:
{#each recipes as recipe, i}
	<div>
		{i+1}: {recipe.name}
	</div>
{:else}
	Loading...
{/each}
