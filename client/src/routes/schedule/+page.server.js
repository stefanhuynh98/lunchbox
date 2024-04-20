import { redirect } from '@sveltejs/kit';

export async function load() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	redirect(302, `/schedule/${year}/${month}/${day}`);
}
