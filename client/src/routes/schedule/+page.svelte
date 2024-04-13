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

	export let data;
</script>

<h1>Schedule</h1>
<div class="grid grid-cols-7">
	{#each weekdays as weekday}
		<div class="">
			{weekday}
		</div>
	{/each}
</div>
