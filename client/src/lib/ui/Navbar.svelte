<script>
	import { page } from '$app/stores';

	let navItems = [
		{
			label: 'Schedule',
			url: '/schedule',
		},
		{
			label: 'Recipes',
			url: '/recipes',
		},
		{
			label: 'Foods',
			url: '/foods',
		},
	];

	const route = $page.route.id;
</script>

<div class="w-full bg-primary text-white pt-[35px] pb-[17px]">
	<div class="container mx-auto px-10">
		<div class="text-lg">Lunchbox</div>
		<div class="flex justify-between items-end">
			<div class="flex mt-[26px] gap-[32px]">
				{#each navItems as item}
					<a
						href={item.url}
						class="no-underline"
					>
						{item.label}
					</a>
				{/each}
			</div>
			<div class="flex gap-[6px]">
				stefanhuynh98@gmail.com
				<a href="/logout" class="no-underline opacity-50 hover:opacity-100">Logout</a>
			</div>
		</div>
	</div>
</div>
