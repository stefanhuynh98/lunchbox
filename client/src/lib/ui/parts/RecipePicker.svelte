<script>
	import { Search } from '$ui/input';
	import { getRecipes } from '$lib/backend';

	export let recipe = null;

	let suggestions = [];
	let query = '';

	async function populate() {
		suggestions = await getRecipes({ query, perPage: 5 });
	}
</script>

<Search
	placeholder="Search recipes"
	bind:value={query}
	on:input={populate}
	on:select={({ detail }) => recipe = detail}
	{suggestions}
/>
