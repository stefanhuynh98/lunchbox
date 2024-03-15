<script>
	let week = 0;
	const weekdays = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	];

	function getDate(offset = 0) {
		const _date = new Date(Date.now());
		const date = new Date(_date);
		date.setDate(date.getDate() + offset);
		return date;
	}
</script>

<h1>Schedule</h1>

<div class="schedule">
	{#each weekdays as weekday}
		<div class="day">
		</div>
	{/each}
</div>

<style>
	.schedule {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
</style>
