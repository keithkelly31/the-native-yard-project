<script>
	import { format } from 'date-fns';

	export let categoryPage = true;
	export let post;
</script>

<article>
	<h2><a href="/post/{post.slug}">{post.title}</a></h2>
	<p><small>{format(post.date, 'dd MMM yyyy')}</small></p>

	<img src={post.imgSrc} alt={post.imgAlt} />
	<p><small>{@html post.imgCredit}</small></p>

	<h3>{post.subtitle}</h3>
	<p>{post.summary}</p>

	{#if !categoryPage}
		<nav>
			<ul>
				<li>
					<small><a href="/{post.category}">{post.category}</a></small>
				</li>
			</ul>
		</nav>
	{/if}
</article>
