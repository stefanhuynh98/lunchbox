<script>
	import { fly } from 'svelte/transition';
	import * as Form from '$lib/ui/forms';

	export let store = null;
</script>

{#if $store.form}
	<div
		class="absolute w-[800px] max-w-[70%] h-full bg-white right-0 top-0 shadow-2xl px-[60px] py-[90px]"
		transition:fly={{ x: 800, opacity: 1 }}
	>
		<svelte:component this={$store.form} />
	</div>
{/if}
