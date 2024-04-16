<script>
	import Form from '$lib/components/form.svelte';
</script>

<svelte:head>
	<title>simple lineup | sign in</title>
</svelte:head>

<h1>sign in</h1>

<Form
	label={{
		busy: 'signing in',
		default: 'sign in',
		error: 'sign in error',
		success: 'signed in successfully'
	}}
>
	<label for="email">email</label>
	<input
		required
		autocomplete="email"
		id="email"
		name="email"
		placeholder="email address"
		type="email"
	/>

	<label for="password">password</label>
	<input
		required
		autocomplete="current-password"
		name="password"
		placeholder="password"
		type="password"
	/>
</Form>

<p><a href="/auth/signup">need an account?</a></p>
<p><a href="/auth/forgot-password">forgot your password?</a></p>
