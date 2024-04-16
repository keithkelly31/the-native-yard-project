<script>
	import Icon from '$lib/components/icon.svelte';

	let { icon, label, text } = $props();
</script>

<section class="flex flex-col items-center">
	<Icon class="!text-5xl text-primary-500 dark:text-primary-400" {icon} />
	<strong>{label}</strong>
	<p class="text-secondary-500">{text}</p>
	<slot />
</section>
