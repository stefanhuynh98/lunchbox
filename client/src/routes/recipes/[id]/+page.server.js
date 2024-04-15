import { PUBLIC_BACKEND_URL } from '$env/static/public';

export async function load({ fetch, params }) {
	const { id } = params;
	const recipe = await fetch(`${PUBLIC_BACKEND_URL}/v1/recipes/${id}`)
		.then(res => res.json());

	return recipe;
}
