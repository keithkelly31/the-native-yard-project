<script>
	import '@fontsource/courier-prime';
	import '../app.css';
</script>

<main>
	<header class="py-12 flex justify-between items-center">
		<a class="text-xl md:text-2xl" href="/">The Native Yard Project</a>
	</header>

	<nav>
		<a class="hidden sm:inline mr-4" href="/planning">Planning</a>
		<a class="hidden sm:inline mr-4" href="/plants">Plants</a>
		<a class="hidden sm:inline mr-4" href="/wildlife">Wildlife</a>
		<a class="mr-4" href="/resources">Resources</a>
		<a href="/shop">Shop</a>
	</nav>

	<hr />

	<slot />

	<hr />

	<nav>
		<a class="mr-4" href="/privacy">Privacy</a>
		<a class="mr-4" href="/tos">Terms</a>
		<a class="mr-4" href="https://www.facebook.com/thenativeyardproject">Facebook</a>
		<a class="mr-4" href="https://www.instagram.com/thenativeyardproject/">Instagram</a>
		<a href="https://twitter.com/thenativeyard">Twitter</a>
	</nav>

	<p>&copy; The Native Yard Project. All rights reserved.</p>
</main>
