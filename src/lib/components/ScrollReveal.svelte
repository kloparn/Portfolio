<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		delay = 0,
		threshold = 0.15
	}: {
		children: Snippet;
		delay?: number;
		threshold?: number;
	} = $props();

	let el: HTMLDivElement | undefined = $state();
	let visible = $state(false);

	$effect(() => {
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold }
		);

		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={el}
	class="transition-all duration-700 ease-out"
	style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? 0 : 30}px); transition-delay: {delay}ms;"
>
	{@render children()}
</div>
