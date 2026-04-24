<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import type { Translations } from '$lib/i18n';

	let { theme = $bindable('light'), t }: { theme: string; t: Translations } = $props();

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let lastScroll = $state(0);
	let hidden = $state(false);

	const links = $derived([
		{ href: '/', label: t.navHome },
		{ href: '/about', label: t.navAbout },
		{ href: '/projects', label: t.navProjects },
		{ href: '/contact', label: t.navContact }
	]);

	function handleScroll() {
		const y = window.scrollY;
		scrolled = y > 50;
		hidden = y > lastScroll && y > 200;
		lastScroll = y;
	}

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-500
		{hidden ? '-translate-y-full' : 'translate-y-0'}
		{scrolled ? 'bg-warm-white/80 dark:bg-[#1a1a2e]/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="font-display text-xl tracking-tight text-text transition-colors hover:text-accent">
			Adam H.
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="relative py-1 text-sm font-medium tracking-wide transition-colors
						{isActive(link.href) ? 'text-accent' : 'text-text-muted hover:text-text'}"
				>
					{link.label}
					{#if isActive(link.href)}
						<span class="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent"></span>
					{/if}
				</a>
			{/each}
			<ThemeToggle bind:theme />
		</div>

		<!-- Mobile toggle -->
		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle bind:theme />
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-soft-peach/30 dark:hover:bg-accent/20"
				aria-label="{mobileOpen ? 'Close' : 'Open'} menu"
			>
				{#if mobileOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-soft-peach/20 bg-warm-white/95 backdrop-blur-lg dark:border-accent/10 dark:bg-[#1a1a2e]/95 md:hidden">
			<div class="flex flex-col gap-1 px-6 py-4">
				{#each links as link}
					<a
						href={link.href}
						onclick={() => (mobileOpen = false)}
						class="rounded-lg px-4 py-3 text-base font-medium transition-colors
							{isActive(link.href) ? 'bg-soft-peach/20 text-accent dark:bg-accent/10' : 'text-text-muted hover:bg-soft-peach/10 hover:text-text'}"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
