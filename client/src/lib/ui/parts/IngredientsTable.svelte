<script>
	import { Table } from '$ui';

	export let ingredients;
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
</script>

<Table rows={ingredients} {columns} />
