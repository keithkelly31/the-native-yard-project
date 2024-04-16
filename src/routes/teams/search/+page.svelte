<script>
	import Form from '$lib/components/form.svelte';
</script>

<h1>search teams</h1>

<p>
	Search teams by name. Once you found the team you are looking for you can send a request to the
	admin to join the team.
</p>

<Form label={{ busy: 'searching teams', default: 'search teams', success: 'search complete' }}>
	<label for="name">team name</label>
	<input required id="name" name="name" placeholder="team name" type="text" />
</Form>
