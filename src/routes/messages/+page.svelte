<script>
	import EmptySection from '$lib/components/empty-section.svelte';

	let { data } = $props();
</script>

<h1>messages</h1>

<section><a href="/messages/send" role="button">send message</a></section>

{#each data.messages as { id } (id)}
	<div>{id}</div>
{:else}
	<EmptySection icon="unsubscribe" label="no messages" text="you do not have any messages">
		<a href="/messages/send" role="button">send message</a>
	</EmptySection>
{/each}
