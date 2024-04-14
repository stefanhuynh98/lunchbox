<script>
	import '../app.css';
	import { modal } from '$lib/stores';
	import { Navbar, Modal } from '$ui';
</script>
<Navbar />
<div class="container px-10 mx-auto mt-[45px]">
	<slot />
</div>
<Modal store={modal} />
