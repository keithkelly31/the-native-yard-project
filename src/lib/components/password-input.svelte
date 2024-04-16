<script>
	import Icon from './icon.svelte';

	let {
		autocomplete = 'current-password',
		label = 'password',
		name = 'password',
		placeholder = 'password',
		required = true
	} = $props();

	const id =
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

	let hidden = $state(true);
</script>

<div class="relative">
	<label for={id}>{label}</label>
	<input {autocomplete} {id} {name} {placeholder} {required} type={hidden ? 'password' : 'text'} />
	<Icon
		class="absolute top-0 right-0 !text-3xl text-secondary-400 py-3 px-4 cursor-pointer z-10"
		icon={hidden ? 'visibility' : 'visibility_off'}
		onclick={() => (hidden = !hidden)}
	/>
</div>
