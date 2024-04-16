<script>
	import Form from '$lib/components/form.svelte';
	import PasswordInput from '$lib/components/password-input.svelte';

	let { data } = $props();
</script>

<h1>profile</h1>

<section>
	<h2>update email</h2>

	<Form
		action="?/email"
		label={{ busy: 'updating email', default: 'update email', success: 'email updated' }}
	>
		<label for="email">new email</label>
		<input
			required
			autocomplete="email"
			id="email"
			name="email"
			placeholder="new email"
			type="email"
		/>
	</Form>
</section>

<section>
	<h2>update name</h2>

	<Form
		action="?/name"
		label={{ busy: 'updating name', default: 'update name', success: 'name updated' }}
	>
		<label for="first-name">first name</label>
		<input
			autocomplete="given-name"
			id="first-name"
			name="first"
			placeholder="first name"
			type="text"
		/>

		<label for="last-name">last name</label>
		<input
			autocomplete="family-name"
			id="last-name"
			name="last"
			placeholder="last name"
			type="text"
		/>
	</Form>
</section>

<section>
	<h2>update password</h2>

	<p>New password is required to be six (6) characters or longer.</p>

	<Form
		action="?/password"
		label={{ busy: 'updating password', default: 'update password', success: 'password updated' }}
	>
		<PasswordInput
			autocomplete="new-password"
			label="new password"
			name="password"
			placeholder="new password"
		/>
		<PasswordInput
			autocomplete="off"
			label="confirm password"
			name="confirm"
			placeholder="confirm new password"
		/>
	</Form>
</section>

<hr class="h-px my-8 bg-secondary-200 border-0 dark:bg-secondary-700" />

<section>
	<a class="secondary" href="/auth/signout" role="button">sign out</a>
</section>
