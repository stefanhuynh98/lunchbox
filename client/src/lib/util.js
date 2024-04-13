export function debounce(cb, delay = 300) {
	let timer;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(cb, delay);
	}
}
