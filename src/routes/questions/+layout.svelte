<header class="p-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center">
	<a class="text-2xl no-underline" href="/">Simple Lineup</a>
	<nav class="flex items-center gap-4">
		<a href="/auth/signin">Sign In</a>
		<a href="/auth/signup">Sign up</a>
	</nav>
</header>

<main class="h-screen w-screen flex flex-col justify-center px-4 max-w-3xl mx-auto">
	<slot />
</main>
