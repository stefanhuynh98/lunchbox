<script>
	import { modal } from '$lib/stores';
	import { Button } from '$ui';

	import { FoodTable } from '$ui/parts';
	import { CreateFood } from '$ui/forms';

	export let data = {};
</script>

<div class="flex justify-between">
	<div>
		<h1 class="mb-[14px]">Food registry</h1>
		<p>Our complete library of foods contributed by us as well as users.</p>
	</div>
	<Button on:click={() => $modal.content = CreateFood}>Create new food entry</Button>
</div>

<div class="flex flex-col items-start mt-[34px]">
	<FoodTable />
</div>
