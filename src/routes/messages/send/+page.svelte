<script>
	import EmptySection from '$lib/components/empty-section.svelte';

	let { data } = $props();
</script>

{#if data.teams.length}
	<p>Which team would you like to use to send your message?</p>
{/if}

{#each data.teams as { teams: { id, name } } (id)}
	<a href="/teams/{id}">{name}</a>
{:else}
	<EmptySection
		icon="group_off"
		label="no active teams"
		text="you are not a member of any active teams"
	>
		<p>you must be a member of at least one active team to send a message</p>
		<p><a href="/teams">back to my teams</a></p>
	</EmptySection>
{/each}
