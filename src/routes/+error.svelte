<script>
	import { page } from '$app/stores';
</script>

<h1>An Error Occurred</h1>

<p>{$page.error?.message}</p>

{#if $page.error?.details}
	<p>Code: {$page.form.details.code}</p>
	<p>Details: {$page.form.details.message}</p>
{/if}

<a href="/"> Head home </a>
