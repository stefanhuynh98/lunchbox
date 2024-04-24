<script>
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { modal, notification } from '$lib/stores';
	import { Navbar, Modal, Notification } from '$ui';
</script>

<Navbar />
<div class="xl:container px-10 mx-auto mt-[45px]">
	<slot />
</div>
<Modal store={modal} />
<Notification />
