export async function load({ fetch }) {
	const meals = await fetch('http://localhost:3000/v1/meals')
		.then(res => res.json());

	return {
		meals,
	};
}
