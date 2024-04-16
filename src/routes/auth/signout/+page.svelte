<script>
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	$effect(() => {
		$page.data.supabase.auth.signOut();
		invalidateAll();
	});
</script>

<article>signing out</article>
