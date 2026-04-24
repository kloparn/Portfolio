<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { browser } from '$app/environment';

	let { theme = $bindable('light') }: { theme: string } = $props();

	function toggle() {
		theme = theme === 'light' ? 'dark' : 'light';
		if (browser) {
			document.documentElement.className = theme;
			document.cookie = `theme=${theme};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
		}
	}
</script>

<button
	onclick={toggle}
	class="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-soft-peach/30 dark:hover:bg-accent/20"
	aria-label="Toggle {theme === 'light' ? 'dark' : 'light'} mode"
>
	<span
		class="inline-flex transition-transform duration-500"
		style="transform: rotate({theme === 'dark' ? '180deg' : '0deg'})"
	>
		{#if theme === 'light'}
			<Moon class="h-5 w-5 text-warm-charcoal" />
		{:else}
			<Sun class="h-5 w-5 text-golden-hour" />
		{/if}
	</span>
</button>
