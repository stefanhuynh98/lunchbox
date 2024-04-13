<script>
	export let placeholder = '';
	export let value = '';
	export let type = "text";

	function handleInput(e) {
		value = e.target.value;
	}
</script>

<input
	{type}
	{placeholder}
	{value}
	on:input={handleInput}
/>
