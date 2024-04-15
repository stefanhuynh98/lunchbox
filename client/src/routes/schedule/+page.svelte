<script>
	import { goto } from '$app/navigation';
	import { Stepper } from '$ui';
	import { getMeals } from '$lib/backend';

	const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	export let data = {};

	let offset = 0;
	let meals = false;

	function getWeek(offset = 0) {
		const d = new Date();
		d.setDate(d.getDate() + offset * 7);
		let day = d.getDay() - 1;
		if (day < 0) day = 6;

		const week = weekdays.map((_, i) => {
			const date = new Date(d);
			date.setDate(date.getDate() - day + i);
			return date;
		});

		return {
			curr: day,
			days: week,
		}
	}

	$: week = getWeek(offset);
	$: firstDay = {
		day: week.days[0].getDate(),
		month: months[week.days[0].getMonth()],
	};
	$: lastDay = {
		day: week.days[6].getDate(),
		month: months[week.days[6].getMonth()],
	};
</script>

<div class="flex items-start gap-4 mb-8 justify-between">
	<div>
		<h1>Your weekly schedule</h1>
		{firstDay.month} {firstDay.day} - {lastDay.month} - {lastDay.day}
	</div>
	<div class="flex gap-4 items-center">
		Week: 
		<Stepper
			bind:value={offset}
			label="{offset > 0 ? '+' : ''}{offset < 0 ? '-' : ''}{offset.toString().replace('-', '')}"
		/>
	</div>
</div>
<div class="flex flex-col gap-4">
		<div class="grid grid-cols-7 gap-4">
			{#each week.days as day, i}
				<div class="flex flex-col {week.curr === i ? 'font-bold' : ''}">
					{weekdays[i]} {day.getDate()}
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-7 gap-4 relative">
			<div class="flex justify-center absolute top-0 right-full -rotate-90 translate-x-[-1.9rem] origin-top-right">Breakfast</div>
			{#each weekdays as weekday, i}
				<div class="flex flex-col bg-gray text-sm p-4">
					Gado Gado
					<div class="grid grid-cols-1 mt-[36px] text-xs font-mono leading-tight">
						<div>123 kcal</div>
						<div>10 protein</div>
						<div>30 fats</div>
						<div>30g carbs</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-7 gap-4 relative">
			<div class="flex justify-center absolute top-0 right-full -rotate-90 translate-x-[-1.9rem] origin-top-right">Lunch</div>
			{#each weekdays as weekday}
				<div class="flex flex-col bg-gray text-sm p-4">
					Gado Gado
					<div class="grid grid-cols-1 mt-[36px] text-xs font-mono leading-tight">
						<div>123 kcal</div>
						<div>10 protein</div>
						<div>30 fats</div>
						<div>30g carbs</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="grid grid-cols-7 gap-4 relative">
			<div class="flex justify-center absolute top-0 right-full -rotate-90 translate-x-[-1.9rem] origin-top-right">Dinner</div>
			{#each weekdays as weekday}
				<div class="flex flex-col bg-gray text-sm p-4">
					Gado Gado
					<div class="grid grid-cols-1 mt-[36px] text-xs font-mono leading-tight">
						<div>123 kcal</div>
						<div>10 protein</div>
						<div>30 fats</div>
						<div>30g carbs</div>
					</div>
				</div>
			{/each}
		</div>
</div>
