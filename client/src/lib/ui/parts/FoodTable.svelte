<script>
    import { onMount } from 'svelte';
	import { debounce } from '$lib/util';
	import { getFoods } from '$lib/backend';
	import { Table } from '$ui';

	export let columns = [
		{
			label: 'Name',
			name: 'name',
		},
		{
			label: 'Calories',
			name: 'calories',
		},
		{
			label: 'Fats',
			name: 'fats',
		},
		{
			label: 'Carbs',
			name: 'carbs',
		},
		{
			label: 'Protein',
			name: 'protein',
		},
		{
			label: 'Sugars',
			name: 'sugars',
		},
	];

	let query = '';
	let page = 1;
	let perPage = 10;
	let foods = false;
	let searching = false;

	onMount(() => {
		refresh();
	});

	async function refresh() {
		foods = (await getFoods({
			query,
			page,
			perPage,
		}).then(res => {
			searching = false;
			return res;
		})).map(food => {
			if (food.trusted) {
				food.name = `<img src="/badge-icon.svg" alt="trusted" /> ${food.name}`
			}

			return food;
		});
	}
</script>

<input
	type="search"
	class="mb-[34px]"
	placeholder="Search for foods"
	bind:value={query}
	on:input={debounce(refresh)}
	on:keyup={() => searching = true}
/>

{#if foods && !searching}
	<Table rows={foods} {columns} />
{:else}
	Loading...
{/if}
