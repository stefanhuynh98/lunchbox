import { PUBLIC_BACKEND_URL } from '$env/static/public';

export function GET({ fetch, params, url }) {
	return fetch(`${PUBLIC_BACKEND_URL}/v1/${params.path + url.search}`);
}
