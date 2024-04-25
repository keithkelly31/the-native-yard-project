<script>
	import { format } from 'date-fns';

	export let categoryPage = true;
	export let post;
</script>

<article>
	<a href="/post/{post.slug}">{post.title}</a>

	{#if !categoryPage}
		<span>&middot;</span>
		<a class="text-secondary-400 hover:text-secondary-500 text-sm" href="/{post.category}"
			>{post.category}</a
		>
	{/if}

	<span>&middot;</span>
	<span class="text-secondary-400 text-sm">{format(post.date, 'dd MMM yyyy')}</span>
	<p>{post.summary}</p>
</article>
