<script>
	import { modal } from '$lib/stores';
	import { Table } from '$ui';

	const { id, recipeName, date, type } = $modal.context;
	const ingredients = {
		columns: [
			{
				name: 'food',
				label: 'Food',
			},
			{
				name: 'amount',
				label: 'Amount',
			},
		],
		rows: [
			{
				food: 'Bananas',
				amount: '100g'
			},
			{
				food: 'Oats',
				amount: '100g'
			},
			{
				food: 'Flour',
				amount: '100g'
			},
			{
				food: 'Honey',
				amount: '100g'
			},
			{
				food: 'Cinnamon',
				amount: '100g'
			},
			{
				food: 'Eggs',
				amount: '100g'
			},
			{
				food: 'Milk',
				amount: '100g'
			},
		],
	};
</script>

<h4>
	{date.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
	<span class="opacity-70">({type})</span>
</h4>
<h2>{recipeName}</h2>
<ol class="flex flex-col gap-4 my-12">
	{#each [...Array(4)] as _, i}
		<li class="flex gap-8 leading-loose">
			<span class="w-[150px] opacity-50">Step {i+1}</span>
			Consectetur nihil ea recusandae adipisci sunt Omnis natus explicabo.
			Consectetur nihil ea recusandae adipisci sunt Omnis natus explicabo.
			Consectetur nihil ea recusandae adipisci sunt Omnis natus explicabo.
			Consectetur nihil ea recusandae adipisci sunt Omnis natus explicabo.
		</li>
	{/each}
</ol>

<h2 class="font-md">
	Ingredients
</h2>
<Table {...ingredients} />
