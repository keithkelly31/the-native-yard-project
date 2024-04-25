<script>
	import PostSummary from '$lib/components/post-summary.svelte';
	export let data;
</script>

# Wildlife

## Posts

{#each data.posts as post}
<PostSummary {post} />
{:else}

There are no posts in wildlife...yet

{/each}
