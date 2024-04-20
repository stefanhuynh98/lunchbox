import { getWeek } from '$lib/util';

export async function load({ params, url }) {
	const { year, month, day } = params;
	const test = `${year}-${month}-${day}`;
	const date = new Date(Date.UTC(year, month-1, day));
	const week = getWeek(date);

	return { week };
}
