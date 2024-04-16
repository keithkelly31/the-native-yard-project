<script>
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import Icon from './icon.svelte';
	import Spinner from './spinner.svelte';

	/** @typedef { Object } Label
	 * @prop { string } busy
	 * @prop { string } default
	 * @prop { string } success
	 */

	/**
	 * @typedef { Object } Props
	 * @prop { string } [action]
	 * @prop { Label } [label]
	 * @prop { boolean } [reset]
	 * @prop { string } [test]
	 */

	/** @type { Props } */
	let {
		action: _action,
		label = {
			busy: 'saving',
			default: 'save',
			success: 'saved'
		},
		reset = true,
		test = ''
	} = $props();

	/** @type { string } */
	let action = $state(_action || $page.url.pathname);

	/** @type { "busy" | "success" | null } */
	let button = $state(null);

	/** @type { string | null } */
	let error = $state(null);

	/** @type { string | null } */
	let success = $state(null);

	/** @type { boolean } */
	let visible = $state(false);

	/** @type { import("@sveltejs/kit").SubmitFunction } */
	function submit() {
		error = null;
		button = 'busy';
		return async ({ result, update }) => {
			if (result.type === 'failure') {
				error = result.data?.error;
			}

			if (result.type === 'success' && result.data?.success) {
				success = result.data.success;
			}

			result.type === 'success' || result.type === 'redirect'
				? (button = 'success')
				: (button = null);

			await update({ reset });
			await applyAction(result);
		};
	}

	$effect(() => {
		if (error || success) {
			visible = true;
		}
	});

	$effect(() => {
		if (button === 'success') {
			setTimeout(() => (button = null), 5000);
		}
	});
</script>

<form {action} data-testid={test} method="post" use:enhance={submit}>
	<slot />

	{#if visible}
		<div
			class=" rounded my-8 p-6 text-white flex items-center"
			class:bg-error-500={error}
			class:bg-success-500={success}
			transition:slide
		>
			<div class="flex-1">{error || success}</div>

			{#if error}
				<Icon class="cursor-pointer" icon="close" onclick={() => (visible = false)} />
			{/if}
		</div>
	{/if}

	<button
		class:!bg-success-500={button === 'success'}
		disabled={button === 'busy' || button === 'success'}
		type="submit"
	>
		{#if button === 'busy'}
			<Spinner svg_classes="text-primary-100" wrapper_classes="h-5 w-5" />
			<span>{label.busy}</span>
		{:else if button === 'success'}
			<Icon icon="check_circle" />
			<span>{label.success}</span>
		{:else}
			{label.default}
		{/if}
	</button>
</form>
