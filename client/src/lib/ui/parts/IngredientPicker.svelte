<script>
	import { writable } from 'svelte/store';
	import { Search } from '$ui/input';
	import { getFoods } from '$lib/backend';
    import {onMount} from 'svelte';

	export let ingredients = [];

	// Use a temporary local store to capture the inputs' state
	const _ingredients = writable([]);

	let suggestions = [];
	let query = '';

	async function populate() {
		suggestions = await getFoods({ query, perPage: 5 });
	}

	function addIngredient(ingredient) {
		ingredients = [...ingredients, { ...ingredient, amount: null }];
	}

	onMount(() => {
		return _ingredients.subscribe(value => {
			ingredients = value;
		});
	});
</script>

<Search
	placeholder="Search ingredients"
	bind:value={query}
	on:input={populate}
	on:select={({ detail }) => addIngredient(detail)}
	{suggestions}
/>
{#if ingredients?.length > 0}
	<div class="flex flex-col gap-4 max-h-[500px] py-[2px] overflow-y-auto">
		{#each ingredients as ingredient}
			<div class="flex justify-between gap-4">
				<div class="flex items-center gap-2">
					{#if ingredient.trusted}
						<img src="/badge-icon.svg" alt="verified" />
					{/if}
					<div class="text-ellipsis overflow-hidden">
						{ingredient.name}
					</div>
				</div>
				<div class="flex gap-4 items-center">
					<input
						type="number"
						placeholder="amount ({ingredient.unit})"
						class="w-[150px]"
						bind:value={ingredient.amount}
						required
					/>
					{ingredient.unit}
				</div>
			</div>
		{/each}
	</div>
{/if}
