<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.scss';
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">The Native Yard Project</a></li>
		</ul>

		<Nav />
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<nav>
		<ul>
			<li>&copy; The Native Yard Project. All rights reserved.</li>
		</ul>
		<ul>
			<li><a class="secondary" href="/privacy">Privacy</a></li>
			<li><a class="secondary" href="/tos">Terms</a></li>
		</ul>
	</nav>
</footer>

<style lang="scss">
	@use 'sass:map';
	@use '@picocss/pico/scss/settings';

	footer nav {
		flex-wrap: wrap;
		justify-content: center;
	}

	@media screen and (min-width: map.get(settings.$breakpoints, md, breakpoint)) {
		footer nav {
			flex-wrap: nowrap;
			justify-content: space-between;
		}
	}
</style>
