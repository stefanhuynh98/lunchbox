<script>
    import { onMount } from 'svelte';
	import { debounce } from '$lib/util';
	import { getRecipes } from '$lib/backend';
	import { Table } from '$ui';

	export let columns = [
		{
			label: 'Name',
			name: 'name',
		}
	];

	let query = '';
	let page = 1;
	let perPage = 10;
	let recipes = false;
	let searching = false;

	onMount(() => {
		refresh();
	});

	async function refresh() {
		recipes = await getRecipes({
			query,
			page,
			perPage,
		}).then(res => {
			searching = false;
			return res;
		});
	}
</script>

<input
	type="search"
	class="mb-[34px]"
	placeholder="Search for recipes"
	bind:value={query}
	on:input={debounce(refresh)}
	on:keyup={() => searching = true}
/>

{#if recipes && !searching}
	<Table rows={recipes} {columns} />
{:else}
	Loading...
{/if}
