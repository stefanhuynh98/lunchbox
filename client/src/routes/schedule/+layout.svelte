<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Stepper } from '$ui';

	const dateOptions = {
		month: 'long',
		day: 'numeric',
	};

	$: firstDay = $page.data.week[0].day;
	$: lastDay = $page.data.week[6].day;
	$: weekLabel = `${firstDay.toLocaleDateString('nl-NL', dateOptions)} - ${lastDay.toLocaleDateString('nl-NL', dateOptions)}`;
	
	let date = new Date(
		$page.params.year,
		$page.params.month-1,
		$page.params.day,
	);

	function gotoPrevWeek() {
		date.setDate(date.getDate() - 7);
		rehydrate();
	}

	function gotoNextWeek() {
		date.setDate(date.getDate() + 7);
		rehydrate();
	}

	function gotoThisWeek() {
		date = new Date();
		rehydrate();
	}

	function rehydrate() {
		goto(`/schedule/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`);
	}
</script>

<div class="flex justify-between items-top">
	<div class="flex flex-col gap-4">
		<h1>Your weekly schedule</h1>
		<h3>{weekLabel}</h3>
	</div>
	<Stepper
		on:increment={gotoNextWeek}
		on:decrement={gotoPrevWeek}
		on:reset={gotoThisWeek}
		label={weekLabel}
		returnLabel="Go to this week"
	/>
</div>
<slot />
