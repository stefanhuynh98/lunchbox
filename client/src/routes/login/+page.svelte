<script>
	import { goto } from '$app/navigation';

	let username;
	let password;

	async function login() {
		const result = await fetch('http://localhost:3000/v1/auth/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json',
			}
		});

		if (result.status === 200) {
			goto('/');
		}
	}
</script>

<main>
	<h1>Login</h1>
	<form on:submit={login}>
		<input type="text" bind:value={username} />
		<input type="password" bind:value={password} />
		<input type="submit" value="Login" />
	</form>
</main>

<style>
	main {
		width: 500px;
		margin: 100px auto 0;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		text-align: center;
	}
</style>
