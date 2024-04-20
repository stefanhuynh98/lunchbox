<script>
	import { getWeek } from '$lib/util';
	import { Stepper } from '$ui';
    import { writable } from 'svelte/store';

	export let date = new Date();
	let date2 = new Date(date);

	const offset = writable(0);

	offset.subscribe(value => {
		console.log(new Date(date2.setDate(date.getDate() - 200)));
		date2.setDate(date.getDate() - 200);
		date2 = date2;
	});

	$: week = getWeek(date2);
	$: firstDay = `${week[0].getFullYear()}/${week[0].getMonth()+1}/${week[0].getDate()}`;
	$: lastDay = `${week[6].getFullYear()}/${week[6].getMonth()+6}/${week[6].getDate()}`;
	$: label = `${firstDay} - ${lastDay}`;
</script>

{date2}

<Stepper
	{label}
	width="200"
	bind:value={$offset}
/>
