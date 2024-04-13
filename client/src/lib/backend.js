export async function getFoods({ query, page, perPage }) {
	const params = new URLSearchParams({ query, page, perPage }).toString();

	return await fetch(`http://localhost:3000/v1/foods?${params}`, {
		credentials: 'include',
	}).then(res => res.json());
}
