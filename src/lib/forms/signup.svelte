<script>
	import Form from '$lib/components/form.svelte';
</script>

<p>
	Create a <strong>FREE</strong> account to get started. After submitting the form you will receive an
	email to confirm your signup. Once confirmed you will be ready to create your own team or join an existing
	team.
</p>

<Form
	action="/auth/signup"
	label={{
		busy: 'signing up',
		default: 'sign up',
		error: 'unable to sign up',
		success: 'sign up successful'
	}}
	test="sign-up-form"
>
	<label for="email">email</label>
	<input required autocomplete="email" id="email" name="email" placeholder="email" type="email" />

	<label for="password">password (at least 6 characters)</label>
	<input
		required
		autocomplete="new-password"
		id="password"
		name="password"
		placeholder="password (at least 6 characters)"
		type="password"
	/>

	<label for="first-name">first name</label>
	<input
		required
		autocomplete="given-name"
		id="first-name"
		name="first_name"
		placeholder="first name"
		type="text"
	/>

	<label for="last-name">last name</label>
	<input
		required
		autocomplete="family-name"
		id="last-name"
		name="last_name"
		placeholder="last name"
		type="text"
	/>
	<p>
		<small>
			You are not requred to use your real name, but this is what is displayed across all of your
			teams. Rosters and member lists are sorted by last name.
		</small>
	</p>
</Form>
