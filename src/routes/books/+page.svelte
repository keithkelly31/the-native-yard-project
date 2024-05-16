<script>
	const books = [
		{
			alt: 'Natures Best Hope book cover',
			author: 'Douglas Tallamy',
			description:
				"Nature's Best Hope was the book that started me on the path of transforming our landscape. It opened my eyes to the importance of plant selection when designing our yards' landscapes, the detriment of buying into the turf lawn fallacy, our critical role in supporting our local habitats, and our power to make a difference even in our most urban areas.",
			src: '/images/books/natures-best-hope-book-cover.jpg',
			subtitle: 'A New Approach to Conservation That Starts in Your Yard',
			title: 'Nature’s Best Hope'
		},
		{
			alt: 'Planting In A Post-Wild World book cover',
			author: 'Thomas Rainer & Claudia West',
			description:
				'Planting In A Post-Wild World is the book I am currently reading. It dives into great detail about why certain landscapes, such as grasslands and forests, appeal to us humans and how to properly incorporate the concepts into our designs. Hence, they are appealing and avoid pitfalls that are off-putting.',
			src: '/images/books/planting-in-a-post-wild-world-book-cover.jpg',
			subtitle: 'Designing Plant Communities For Resiliant Landscapes',
			title: 'Planting In A Post-Wild World'
		}
	];
</script>

{#snippet summary({ alt, author, description, src, subtitle, title })}
	<article>
		<img {alt} {src} />
		<p><small>by {author}</small></p>

		<hgroup>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</hgroup>

		<p>{description}</p>
	</article>
{/snippet}

<h1>Books</h1>

<p>
	This page contains a list of book references I have read. If you want to read any of these books,
	check them out from your local library. If you prefer to purchase the book, please support your
	locally-owned small business bookshop. You can find an independent bookshop near you through <a
		href="https://bookshop.org/pages/bookstores">bookshop.org</a
	>.
</p>

{#each books as book}
	{@render summary(book)}
{/each}
