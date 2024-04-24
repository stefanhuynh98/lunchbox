<script>
	export let tabs = [];
	export let current = tabs[0].name;
</script>

<div class="flex">
	{#each tabs as tab}
		<div class="">{tab}</div>
	{/each}
</div>
