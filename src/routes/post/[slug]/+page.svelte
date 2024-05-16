<script>
	import Meta from '$lib/components/meta.svelte';
	import { format } from 'date-fns';
	export let data;
</script>

<Meta description={data.post.meta_description} title={data.post.meta_title} />

<p><small>{format(data.post.date, 'dd MMM yyyy')}</small></p>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{data.post.subtitle}</h2>
</hgroup>

<img alt={data.post.imgAlt} src={data.post.imgSrc} />
<p>{@html data.post.imgCredit}</p>

{@html data.post.content}
