<script>
	import Form from '$lib/components/form.svelte';
</script>

<svelte:head>
	<title>simple lineup | forgot password</title>
</svelte:head>

<h1>forgot password?</h1>

<p>
	Please enter the email address associated with your account. If the email address is in our system
	you will receive an email with instructions to reset your password.
</p>

<Form
	label={{
		busy: 'sending password reset',
		default: 'send password reset',
		error: 'unable to reset password',
		success: 'password reset email sent'
	}}
>
	<label for="email">email</label>
	<input id="email" name="email" type="email" required />
</Form>
