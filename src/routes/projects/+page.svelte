<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import BreezyBlob from '$lib/components/BreezyBlob.svelte';
	import type { Project } from '$lib/types';
	import { getTranslations } from '$lib/i18n';
	import { page } from '$app/state';

	let { data } = $props();
	const t = $derived(getTranslations(page.data.locale));

	let filter = $state('all');
	let sortBy = $state<'updated' | 'stars' | 'name'>('updated');

	const languages = $derived(
		[...new Set(data.projects.map((p: Project) => p.language).filter(Boolean))] as string[]
	);

	const filtered = $derived.by(() => {
		let result = data.projects;
		if (filter !== 'all') {
			result = result.filter((p: Project) => p.language === filter);
		}
		return [...result].sort((a: Project, b: Project) => {
			if (sortBy === 'stars') return b.stars - a.stars;
			if (sortBy === 'name') return a.name.localeCompare(b.name);
			return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
		});
	});
</script>

<svelte:head>
	<title>{t.projectsTitle}</title>
	<meta name="description" content={t.projectsDescription} />
	<link rel="canonical" href="https://adamhakansson.dev/projects" />
	<meta property="og:url" content="https://adamhakansson.dev/projects" />
	<meta property="og:title" content={t.projectsTitle} />
</svelte:head>

<div class="pt-28 pb-24">
	<section class="relative mx-auto max-w-6xl px-6">
		<div class="absolute -left-20 top-0 -z-10">
			<BreezyBlob color="var(--color-sky-blue)" size={350} opacity={0.12} duration={28} />
		</div>

		<ScrollReveal>
			<p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">{t.projectsLabel}</p>
			<h1 class="font-display text-4xl sm:text-5xl">{t.projectsHeading}</h1>
			<p class="mt-4 max-w-lg text-lg text-text-muted">{t.projectsDescription}</p>
			{#if data.githubError}
				<div class="mt-4 flex items-center gap-2 rounded-lg border border-golden-hour/30 bg-golden-hour/5 px-4 py-3 text-sm text-text-muted">
					<span class="text-lg">:(</span>
					<span>{t.projectsGithubError} {data.projects.length > 0 ? t.projectsGithubErrorCached : t.projectsGithubErrorRetry}</span>
				</div>
			{/if}
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<div class="mt-12 flex flex-wrap items-center gap-6">
				<div class="flex flex-wrap items-center gap-2">
					<button
						onclick={() => (filter = 'all')}
						class="rounded-full px-3 py-1.5 text-xs font-medium transition-all
							{filter === 'all' ? 'bg-accent text-white' : 'bg-bg-card text-text-muted hover:text-text dark:bg-bg-card'}"
					>
						{t.projectsFilterAll}
					</button>
					{#each languages as lang}
						<button
							onclick={() => (filter = lang)}
							class="rounded-full px-3 py-1.5 text-xs font-medium transition-all
								{filter === lang ? 'bg-accent text-white' : 'bg-bg-card text-text-muted hover:text-text dark:bg-bg-card'}"
						>
							{lang}
						</button>
					{/each}
				</div>

				<div class="ml-auto flex items-center gap-2 text-xs text-text-muted">
					<span>{t.projectsSortLabel}</span>
					<button onclick={() => (sortBy = 'updated')} class="rounded px-2 py-1 transition-colors {sortBy === 'updated' ? 'bg-bg-card text-text font-medium' : 'hover:text-text'}">{t.projectsSortRecent}</button>
					<button onclick={() => (sortBy = 'stars')} class="rounded px-2 py-1 transition-colors {sortBy === 'stars' ? 'bg-bg-card text-text font-medium' : 'hover:text-text'}">{t.projectsSortStars}</button>
					<button onclick={() => (sortBy = 'name')} class="rounded px-2 py-1 transition-colors {sortBy === 'name' ? 'bg-bg-card text-text font-medium' : 'hover:text-text'}">{t.projectsSortAz}</button>
				</div>
			</div>
		</ScrollReveal>

		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as project, i (project.name)}
				<ScrollReveal delay={i * 60}>
					<ProjectCard {project} />
				</ScrollReveal>
			{/each}
		</div>

		{#if filtered.length === 0}
			<div class="mt-20 text-center">
				<p class="text-text-muted">{t.projectsEmpty}</p>
				<button onclick={() => (filter = 'all')} class="mt-3 text-sm font-medium text-accent hover:underline">{t.projectsClearFilter}</button>
			</div>
		{/if}
	</section>
</div>
