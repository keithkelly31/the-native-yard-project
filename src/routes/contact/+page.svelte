<script>
	import Form from '$lib/components/form.svelte';
</script>

<svelte:head>
	<title>simple lineup | contact me</title>
</svelte:head>

<h1>contact me</h1>

<Form
	label={{
		busy: 'sending message',
		default: 'send message',
		error: 'error sending message',
		success: 'message sent successfully'
	}}
>
	<label for="name">your name</label>
	<input required id="name" name="name" placeholder="your name" type="text" />

	<label for="email">email</label>
	<input required id="email" name="email" placeholder="your email" type="email" />

	<label for="message">message</label>
	<textarea required id="message" name="message" placeholder="your message" rows="7"></textarea>
</Form>
