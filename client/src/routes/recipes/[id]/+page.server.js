export async function load({ fetch, params }) {
	const { id } = params;
	const recipe = await fetch(`http://localhost:3000/v1/recipes/${id}`)
		.then(res => res.json());

	return recipe;
}
