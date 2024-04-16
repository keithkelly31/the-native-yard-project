<script>
	import Form from '$lib/components/form.svelte';
</script>

<svelte:head>
	<title>simple lineup | contact me</title>
</svelte:head>

<h1>contact me</h1>

<Form label="send message">
	<label for="name">your name</label>
	<input id="name" name="name" type="text" required />

	<label for="email">email</label>
	<input type="email" name="email" id="email" required />

	<label for="message">message</label>
	<textarea name="message" id="message" rows="7" required></textarea>
</Form>
