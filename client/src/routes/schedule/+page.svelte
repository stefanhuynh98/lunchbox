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

<div class="container mx-auto px-4">
	<h1>Schedule</h1>
	<div class="grid grid-cols-7">
		{#each weekdays as weekday}
			<div class="">
				{weekday}
			</div>
		{/each}
	</div>
</div>
