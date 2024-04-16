<script>
	import Details from '$lib/components/details.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title
		>simple lineup | {data.session?.user.user_metadata.first_name}
		{data.session?.user.user_metadata.last_name}</title
	>
</svelte:head>

<article>
	<header><strong>games</strong></header>

	<ul>
		<li>you have no upcoming games</li>
	</ul>
</article>

<article>
	<header><strong> teams</strong></header>

	<ul>
		{#each data.teams.sort( (/** @type {{ teams: { name: string; }; }} */ a, /** @type {{ teams: { name: any; }; }} */ b) => a.teams.name.localeCompare(b.teams.name) ) as { teams: { active, id, name } } (id)}
			<li>
				<a href="/teams/{id}">{name}</a>
			</li>
		{:else}
			<li>you are not a member of any teams</li>
		{/each}
	</ul>

	<footer>
		<Details label="create a team">
			<p>
				Enter your team's name and click the "create a team" button. Once your team is created in
				the system you will be redirected to the payment processing page to setup your team's
				subscription.
			</p>
			<!-- <Form action="?/create" label="create team">
				<label for="name">name</label>
				<input type="text" name="name" id="name" required />
			</Form> -->
		</Details>
		<Details label="join a team" secondary>
			<!-- <Form action="?/join" label="join team">
				<label for="id">id</label>
				<input id="id" name="id" type="text" required />
				<label for="password">password</label>
				<input id="password" name="password" type="text" required />
			</Form> -->
		</Details>
	</footer>
</article>

<article>
	<p><strong>settings: email</strong></p>
	<!-- <Form action="?/email" label="update email">
		<label for="email">email</label>
		<input
			aria-describedby="emal-helper"
			autocomplete="email"
			type="email"
			name="email"
			id="email"
			placeholder={data.session?.user.email}
			required
		/>
		<small id="email-helper">Please enter your new email address</small>
	</Form> -->
</article>

<article>
	<p><strong>settings: password</strong></p>
	<!-- <Form action="?/password" label="update password">
		<label for="password">password</label>
		<input
			aria-describedby="password-helper"
			autocomplete="new-password"
			type="password"
			name="password"
			id="password"
			required
		/>
		<small id="password-helper">please enter your new password</small>

		<label for="confirm-password">confirm password</label>
		<input
			aria-describedby="confirm-helper"
			type="password"
			name="confirm-password"
			id="confirm-password"
			required
		/>
		<small id="confirm-helper">please confirm the new password you entered</small>
	</Form> -->
</article>

<article>
	<p><strong>settings: sign out</strong></p>

	<a class="secondary" href="/auth/signout" role="button">sign out</a>
</article>
