<script>
	import { createEventDispatcher } from 'svelte';

	export let variant = 'default';

	const dispatch = createEventDispatcher();
	const styles = {
		'default': 'bg-primary text-white',
	};
</script>

<button
	class="h-[40px] px-[16px] flex items-center justify-center hover:opacity-60 {styles[variant]}"
	on:click={() => dispatch('click')}
>
	<slot />
</button>
