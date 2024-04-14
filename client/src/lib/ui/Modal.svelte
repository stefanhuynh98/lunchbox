<script>
	import { fly, blur } from 'svelte/transition';
	import { backInOut, quintInOut } from 'svelte/easing';
	import * as Form from '$lib/ui/forms';

	let speed = 350;
	let easing = quintInOut;

	export let store = null;
</script>

{#if $store.form} <div class="absolute left-0 right-0 top-0 bottom-0 flex justify-end items-start">
		<div
			class="absolute w-full h-full left-0 top-0 bg-black/40"
			on:click={() => $store.form = false}
			transition:blur={{ duration: speed, easing }}
		/>
		<div
			class="relative z-100 w-[800px] max-w-[70%] h-full bg-white shadow-2xl px-[40px] py-[40px] rounded-l-2xl"
			transition:fly={{ x: 800, opacity: 1, duration: speed, easing }}
		>
			<div class="px-[2px] w-full h-full overflow-y-auto">
				<svelte:component this={$store.form} />
			</div>
		</div>
	</div>
{/if}
