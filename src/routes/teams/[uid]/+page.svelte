<script>
	// import Details from '$lib/components/details.svelte';
	let { data } = $props();
</script>

<p><strong>{data.team.name}</strong></p>

{#if data.team.active}
	<p>team is active</p>
{:else}
	<h5>team subscription not active</h5>

	{#if data.isAdmin}
		<p>
			Please click the button below to complete the subscription process and activate this team.
		</p>
		<!-- <Form action="?/subscription" label="activate team">
			<input name="activating" type="hidden" value={true} />
			<input name="stripe_customer" type="hidden" value={data.team.stripe_customer} />
		</Form> -->
	{:else}
		<p>
			Please contact your team's administrator to make them aware that the subscription for this
			team is not active.
		</p>
	{/if}
{/if}
