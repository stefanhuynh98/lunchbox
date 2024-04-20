export function debounce(cb, delay = 300) {
	let timer;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(cb, delay);
	}
}

export function getWeek(date) {
	const d = new Date(date);
	let day = d.getDay() - 1;
	if (day < 0) day = 6;

	return [...Array(7)].map((_, i) => {
		const date = new Date(d);
		date.setDate(date.getDate() - day + i);
		return date;
	});
}
