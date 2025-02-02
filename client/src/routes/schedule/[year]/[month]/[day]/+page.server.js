import { getWeek } from '$lib/util';

function findMeal(type, day) {
	return function(meal) {
		const target = new Date(meal.date);
		return meal.meal_type === type && target.getTime() === day.getTime();
	}
}

export async function load({ params, fetch }) {
	const { year, month, day } = params;
	const date = new Date(Date.UTC(year, month-1, day));

	let week = getWeek(date);
	const from = week[0].toISOString();
	const to = week[6].toISOString();
	const search = new URLSearchParams({ from, to }).toString();
	const meals = await fetch(`/api/meals?${search}`)
		.then(res => res.json());

	week = week.map(day => {
		const breakfast = meals.find(findMeal('breakfast', day));
		const lunch = meals.find(findMeal('lunch', day));
		const dinner = meals.find(findMeal('dinner', day));

		return {
			day,
			breakfast,
			lunch,
			dinner,
		}
	});

	return { week };
}
