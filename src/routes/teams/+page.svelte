<script>
	import EmptySection from '$lib/components/empty-section.svelte';
	import CreateJoinButtons from './create-join-buttons.svelte';

	let { data } = $props();
</script>

<h1>my teams</h1>

{#each data.teams as { teams: { active, id, name } } (id)}
	<a href="/teams/{id}">{name}</a>
{:else}
	<EmptySection icon="group_off" label="no teams" text="you are not an active member of any team">
		<CreateJoinButtons />
	</EmptySection>
{/each}
