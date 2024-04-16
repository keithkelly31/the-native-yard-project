<script>
	import Spinner from '$lib/components/spinner.svelte';

	let { label } = $props();
</script>

<section
	class="flex flex-col items-center h-screen justify-center absolute left-0 top-0 w-screen z-10"
>
	<Spinner wrapper_classes="h-12 w-12" />
	<h2 class="mb-0">{label}</h2>
</section>
