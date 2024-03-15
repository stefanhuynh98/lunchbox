import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const token = cookies.get('jwt');

	if (token) {
		return redirect(302, '/schedule');
	} else {
		return redirect(302, '/login');
	}
}
