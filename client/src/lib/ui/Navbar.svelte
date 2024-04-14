<script>
	import { page } from '$app/stores';

	let navItems = [
		{
			label: 'Schedule',
			url: '/schedule',
			ref: null,
		},
		{
			label: 'Recipes',
			url: '/recipes',
			ref: null,
		},
		{
			label: 'Foods',
			url: '/foods',
			ref: null,
		},
	];

	$: route = $page.route.id;
	$: curr = navItems.findIndex(item => item.url === route);
	$: cursorWidth = navItems[curr]?.ref?.clientWidth * .50;
	$: cursorOffset = navItems[curr]?.ref?.offsetLeft + (((cursorWidth/50)*100) - cursorWidth) / 2;
</script>

<div class="w-full bg-primary text-white pt-[35px]">
	<div class="container mx-auto px-10">
		<div class="text-lg">Lunchbox</div>
		<div class="flex justify-between items-end">
			<div class="flex mt-[26px] gap-[32px] pb-[17px] relative">
				{#each navItems as item, i}
					<a
						href={item.url}
						class="no-underline {curr === i ? 'opacity-100' : 'opacity-50'} transition"
						bind:this={item.ref}
					>
						{item.label}
					</a>
				{/each}
				<div
					style:width="{cursorWidth}px"
					style:left="{cursorOffset}px"
					style:transition=".2s ease-in-out all"
					class="h-[2px] bg-white bottom-0 absolute transition"
				/>
			</div>
			<div class="flex gap-[6px] mb-[17px]">
				stefanhuynh98@gmail.com
				<a href="/logout" class="no-underline opacity-50 hover:opacity-100">Logout</a>
			</div>
		</div>
	</div>
</div>
