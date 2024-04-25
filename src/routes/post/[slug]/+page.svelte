<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.post.meta_title}</title>
	<meta name="description" content={data.post.meta_description} />
</svelte:head>

{@html data.post.content}
