import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const token = cookies.get('jwt');

	if (token) {
		return {};
	} else {
		return redirect(302, '/login');
	}
}
