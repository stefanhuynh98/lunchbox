import { redirect } from '@sveltejs/kit';

export async function load({ cookies, url }) {
	const token = cookies.get('jwt');

	if (!token && !['/register', '/login'].includes(url.pathname)) {
		return redirect(302, '/login');
	}

	return {}
}
