<script>
	import '../app.css';
	import { modal } from '$lib/stores';
	import { Navbar, Modal, Notification } from '$ui';
</script>

<Navbar />
<div class="xl:container px-10 mx-auto my-[45px]">
	<slot />
</div>
<Modal store={modal} />
<Notification />
