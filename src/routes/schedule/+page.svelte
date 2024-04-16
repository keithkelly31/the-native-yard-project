<script>
	import EmptySection from '$lib/components/empty-section.svelte';

	let { data } = $props();
</script>

<h1>schedule</h1>

{#each data.games as { id } (id)}
	<div>{id}</div>
{:else}
	<EmptySection icon="event_busy" label="no games" text="you do not have any upcomging games" />
{/each}
