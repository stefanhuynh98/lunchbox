<script>
	const weekdays = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	];
</script>

<h1>Schedule</h1>

<div class="schedule">
	{#each weekdays as weekday}
		<div class="day">
			{weekday}
		</div>
	{/each}
</div>

<style>
	.schedule {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}

	.day.today {
		background-color: #FF000020;
	}
</style>
