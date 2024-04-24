<script>
	import { writable } from 'svelte/store';
	import { Search } from '$ui/input';
	import { getRecipes } from '$lib/backend';
    import { onMount } from 'svelte';

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
