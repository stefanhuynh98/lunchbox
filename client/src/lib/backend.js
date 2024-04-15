export async function getMeals(params) {
	params = new URLSearchParams(params).toString();

	return await fetch(`http://localhost:3000/v1/meals?${params}`, {
		credentials: 'include',
	}).then(res => res.json());
}

export async function getFoods({ query, page = 1, perPage = 10 }) {
	const params = new URLSearchParams({ query, page, perPage }).toString();

	return await fetch(`http://localhost:3000/v1/foods?${params}`, {
		credentials: 'include',
	}).then(res => res.json());
}

export async function getRecipes({ query, page, perPage }) {
	const params = new URLSearchParams({ query, page, perPage }).toString();

	return await fetch(`http://localhost:3000/v1/recipes?${params}`, {
		credentials: 'include',
	}).then(res => res.json());
}
