<script>
	import { fly } from 'svelte/transition';
	import { onMount } from "svelte";
	import { notification } from '$lib/stores';

	export let duration = 5000;

	onMount(() => {
		let timeout;

		const unsubscribe = notification.subscribe(value => {
			if (!!value) {
				timeout = setTimeout(() => {
					notification.set(null);
				}, duration);
			}
		});

		return () => {
			clearTimeout(timeout);
			unsubscribe();
		};
	});
</script>

{#if $notification}
	<div
		transition:fly={{ y: -100 }}
		class="fixed top-[20px] left-[50%] -translate-x-[50%] bg-white text-primary px-[20px] py-[10px] rounded-[200px] select-none empty:hidden shadow-xl ring-1 ring-primary"
	>
		{$notification}
	</div>
{/if}
