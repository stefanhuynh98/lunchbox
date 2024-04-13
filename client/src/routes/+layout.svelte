<script>
	import '../app.css';
	import { blur } from 'svelte/transition';
	import { sideModal } from '$lib/stores';
	import { Navbar, SideModal } from '$ui';
</script>

<Navbar />
<div class="container px-10 mx-auto mt-[45px]">
	<slot />
</div>
{#if $sideModal.form}
	<div
		class="absolute left-0 right-0 top-0 bottom-0 bg-black/50"
		on:click={() => $sideModal.form = false}
		transition:blur
	/>
{/if}
<SideModal store={sideModal} />
