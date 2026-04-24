<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { getTranslations, type Locale } from '$lib/i18n';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: { theme: string; locale: Locale }; children: Snippet } = $props();
	let theme = $state('light');
	const t = $derived(getTranslations(data.locale));

	$effect(() => {
		theme = data.theme;
	});
</script>

<svelte:head>
	<title>{t.siteTitle}</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
		Skip to content
	</a>

	<Nav bind:theme {t} />

	<main id="main" class="flex-1">
		{@render children()}
	</main>

	<Footer {t} />
</div>
