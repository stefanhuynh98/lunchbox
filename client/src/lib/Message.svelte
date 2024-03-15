<script>
	export let variant = null;
	export let text;
</script>

<div
	class="message"
	class:error={variant === 'error'}
>
	{text}
</div>

<style>
	.error {
		background-color: #ff000022;
		color: black;
		padding: 20px;
		border-radius: 10px;
		position: relative;
	}

	.dismiss {
		position: absolute;
		top: 10px;
		right: 15px;
	}
</style>
