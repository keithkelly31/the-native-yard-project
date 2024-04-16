<script>
	import Form from '$lib/components/form.svelte';
</script>

<h1>join a team</h1>

<p>
	Enter the team id and password from the email you received. If you have not received an email
	invitation please reach out to the team's admin and request an invite or you can <a
		href="/teams/search">search teams</a
	> and request to join.
</p>

<Form label={{ busy: 'joining team', default: 'join team', success: 'team joined successfully' }}>
	<label for="id">team id</label>
	<input required id="id" name="id" placeholder="team id" type="text" />

	<label for="password">team password</label>
	<input required id="password" name="password" placeholder="team password" type="text" />
</Form>
