<script>
	import { goto } from '$app/navigation';
	import { Button, Message } from '$ui';
	import { Input } from '$ui/input';

	let username;
	let password;
	let error;

	async function login() {
		const result = await fetch('http://localhost:3000/v1/auth/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			}
		});

		if (result.status === 200) {
			return goto('/');
		}

		const body = await result.json();

		if (body.error === 'user_not_found') {
			error = `User with username "${username}" could not be found.`;
		}

		if (body.error === 'invalid_credentials') {
			error = 'Invalid credentials';
		}
	}
</script>

<div class="w-[500px] mx-auto">
	<h1 class="mb-8">Login</h1>
	{#if error}
		<Message variant="error" text={error} />
	{/if}
	<form on:submit={login}>
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
		<Button>Login</Button>
		<div class="block">
			Don't have an account yet? Register <a class="inline" href="/register">here</a>
		</div>
	</form>
</div>
