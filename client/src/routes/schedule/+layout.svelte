<script>
	import { DateStepper } from '$ui';

	let date = new Date();
</script>

<h1>Your weekly schedule</h1>
<DateStepper bind:date />
<slot />
