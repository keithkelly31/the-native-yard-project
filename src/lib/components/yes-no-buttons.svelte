<script>
	let { pathname } = $props();
</script>

<div class="grid grid-cols-2 gap-4 w-full">
	<a class="secondary" href="{pathname}/no" role="button">No</a>
	<a href="{pathname}/yes" role="button">Yes</a>
</div>
