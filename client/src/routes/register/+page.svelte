<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { Button, Message } from '$ui';
	import { Input } from '$ui/input';

	let username;
	let password;
	let passwordRepeat;
	let error;

	async function register() {
		const result = await fetch(`${PUBLIC_BACKEND_URL}/v1/auth/register`, {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			}
		});

		if (result.status === 201) {
			return goto('/');
		}

		const body = await result.json();

		if (body.error === 'user_conflict') {
			error = `A user with username "${username}" already exists.`
		}
	}
</script>

<div class="w-[500px] mx-auto">
	<h1 class="mb-8">Login</h1>
	{#if error}
		<Message variant="error" text={error} />
	{/if}
	<form on:submit={register} class="items-start">
		<div class="w-full gap-4">
			<Input
				type="text"
				placeholder="Username"
				bind:value={username}
				required
			/>
			<Input
				type="password"
				placeholder="Password"
				bind:value={password}
				required
			/>
			<Input
				type="password"
				placeholder="Repeat password"
				bind:value={passwordRepeat}
				required
			/>
		</div>
		<Button>Register</Button>
		<div class="block">
			Already registered? Login <a href="/login">here</a>.
		</div>
	</form>
</div>
