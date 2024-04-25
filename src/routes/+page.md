<script>
	import PostSummary from '$lib/components/post-summary.svelte';
	import Meta from "$lib/components/meta.svelte";
	export let data;
</script>

<Meta title="The Native Yard Project" />

# Mission

This website is dedicated to documenting the transition of our traditionally landscaped lawn to an
ecologically beneficial waypoint for a diverse cross section of flora and fauna with a particular
focus on native plants.

The goals we are hoping to accomplish with this transformation are:

1. Create a wildlife habitat that supports as many of our residential and migratory animals as possible. The main focus being placed on increasing the beneficial insects that are the base of the food web for a wide variety of birds, amphibians, reptiles, and mammals.

2. Become certified as a [Nation Wildlife Federation: Wildlife Habitat](https://www.nwf.org/CERTIFY), [Penn State University: Pollinator Friendly Garden](https://pollinators.psu.edu/landscaping-for-pollinators/pollinator-habitat-certification), [North American Butterfly Association: Butterfly Garden](https://naba.org/butterfly-gardens/certification-program/), and the [Audubon Society of Western Pennsylvania Habitat Hero](http://www.aswp.org/pages/backyard-habitat-program).

3. Be a local example and resource for the community.

## Latest Posts

{#each data.posts as post}
<PostSummary categoryPage={false} {post} />
{/each}
