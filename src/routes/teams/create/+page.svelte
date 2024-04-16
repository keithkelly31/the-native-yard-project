<script>
	import Form from '$lib/components/form.svelte';
</script>

<h1>create a team</h1>

<p>
	Enter your team's name and click the "create a team" button. Once your team is created in the
	system you will be redirected to the payment processing page to setup your team's subscription.
</p>

<Form
	label={{ busy: 'creating team', default: 'create team', success: 'team created successfully' }}
>
	<label for="name"></label>
	<input required id="name" name="name" placeholder="team name" type="text" />
</Form>
