<script>
	export let text;
</script>

<button>
	{text}
</button>

<style>
	button {
		background-color: black;
		color: white;
		min-height: 50px;
		border-radius: 10px;
		border: 0;
		outline: 0;
		font-family: inherit;
		font-size: inherit;
		transition: all .2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		cursor: pointer;
	}

	button:hover {
		opacity: .7;
	}
</style>
