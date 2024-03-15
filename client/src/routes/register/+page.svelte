<script>
	import { goto } from '$app/navigation';
	import Message from '$lib/Message.svelte';
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';

	let username;
	let password;
	let error;

	async function register() {
		const result = await fetch('http://localhost:3000/v1/auth/register', {
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

<main>
	<h1>Register</h1>
	{#if error}
		<Message variant="error" text={error}>
		</Message>
	{/if}
	<form on:submit={register}>
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
			bind:value={password}
			required
		/>
		<Button text="Register" />
		<div class="login-text">
			Already registered? Login <a href="/login">here</a>
		</div>
	</form>
</main>

<style>
	main {
		width: 500px;
		margin: 100px auto 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	h1 {
		margin: 0;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.login-text {
		margin-top: 20px;
		text-align: center;
	}
</style>
