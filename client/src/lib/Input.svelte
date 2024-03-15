<script>
	export let placeholder;
	export let value;
	export let type = "text";
</script>

{#if type === 'text'}
	<input type="text" {placeholder} bind:value />
{:else}
	<input type="password" {placeholder} bind:value />
{/if}

<style>
	input {
		background-color: #eee;
		padding: 0 20px;
		height: 50px;
		border-radius: 10px;
		border: 0;
		outline: 0;
		font-family: inherit;
		font-size: inherit;
	}
</style>
