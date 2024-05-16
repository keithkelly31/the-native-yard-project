<script lang="ts">
	const links = [
		{ href: '/books', text: 'Books' },
		{ href: '/planning', text: 'Planning' },
		{ href: '/plants', text: 'Plants' },
		{ href: '/websites', text: 'Websites' },
		{ href: '/wildlife', text: 'Wildlife' }
	];

	let open = $state(false);
</script>

{#snippet link(href, text)}
	<li>
		<a {href} class="secondary" onclick={() => (open = false)}>{text}</a>
	</li>
{/snippet}

<ul class="desktop">
	{#each links as { href, text }}
		{@render link(href, text)}
	{/each}
</ul>

<li class="mobile">
	<details class="dropdown" bind:open>
		<summary>Menu</summary>

		<ul dir="rtl">
			{#each links as { href, text }}
				{@render link(href, text)}
			{/each}
		</ul>
	</details>
</li>

<style lang="scss">
	@use 'sass:map';
	@use '@picocss/pico/scss/settings';

	.desktop {
		display: none;
	}

	@media screen and (min-width: map.get(settings.$breakpoints, md, breakpoint)) {
		.desktop {
			display: flex;
		}

		.mobile {
			display: none;
		}
	}
</style>
