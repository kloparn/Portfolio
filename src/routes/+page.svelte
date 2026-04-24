<script lang="ts">
	import { ArrowRight, ChevronDown } from 'lucide-svelte';
	import BreezyBlob from '$lib/components/BreezyBlob.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import SkillPill from '$lib/components/SkillPill.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getTranslations } from '$lib/i18n';
	import { page } from '$app/state';

	let { data } = $props();
	const t = $derived(getTranslations(page.data.locale));

	const skills = [
		{ label: 'TypeScript', color: '#3178c6' },
		{ label: 'React', color: '#61dafb' },
		{ label: 'Svelte', color: '#ff3e00' },
		{ label: 'Node.js', color: '#68a063' },
		{ label: 'Python', color: '#3572A5' },
		{ label: 'Google Cloud', color: '#4285F4' },
		{ label: 'PostgreSQL', color: '#336791' },
		{ label: 'Docker', color: '#2496ed' },
		{ label: 'Kubernetes', color: '#326ce5' },
		{ label: 'Terraform', color: '#7b42bc' },
		{ label: 'Git', color: '#f05032' },
		{ label: 'REST APIs', color: '#5BA4CF' }
	];
</script>

<svelte:head>
	<title>{t.siteTitle}</title>
	<meta name="description" content={t.siteDescription} />
	<link rel="canonical" href="https://adamhakansson.dev" />
	<meta property="og:url" content="https://adamhakansson.dev" />
	<meta property="og:title" content={t.siteTitle} />
	<meta property="og:description" content={t.siteDescription} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={t.siteTitle} />
	<meta name="twitter:description" content={t.siteDescription} />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Adam Hakansson",
		"url": "https://adamhakansson.dev",
		"jobTitle": "Software Engineer",
		"sameAs": [
			"https://github.com/kloparn",
			"https://www.linkedin.com/in/adam-h%C3%A5kansson-02a592196/"
		],
		"knowsAbout": ["TypeScript", "React", "Svelte", "Node.js", "Python", "Google Cloud", "PostgreSQL", "Docker", "Kubernetes", "Terraform"]
	})}</script>`}
</svelte:head>

<!-- Hero Section -->
<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
	<div
		class="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
		style="background: linear-gradient(-45deg, var(--color-soft-peach), var(--color-sky-blue), var(--color-sage-green), var(--color-golden-hour)); background-size: 400% 400%; animation: gradient-shift 15s ease infinite;"
	></div>

	<div class="absolute -left-20 -top-20">
		<BreezyBlob color="var(--color-soft-peach)" size={400} opacity={0.2} duration={25} />
	</div>
	<div class="absolute -right-10 top-1/3">
		<BreezyBlob color="var(--color-sky-blue)" size={350} opacity={0.15} duration={30} />
	</div>
	<div class="absolute -bottom-10 left-1/4">
		<BreezyBlob color="var(--color-sage-green)" size={300} opacity={0.15} duration={22} />
	</div>

	<div class="relative max-w-3xl text-center">
		<p class="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-text-muted">
			{t.heroLabel}
		</p>
		<h1 class="font-display text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
			{t.heroGreeting}
			<span class="relative inline-block">
				<span class="relative z-10">{t.heroName}</span>
				<span class="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-golden-hour/40 sm:h-4"></span>
			</span>
		</h1>
		<p class="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-muted sm:text-xl">
			{t.heroDescription}
		</p>

		<div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
			<a
				href="/projects"
				class="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-deep-sky hover:shadow-lg hover:shadow-accent/20"
			>
				{t.heroCtaWork}
				<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
			</a>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-full border border-text/10 px-6 py-3 text-sm font-medium text-text transition-all hover:border-accent hover:text-accent"
			>
				{t.heroCtaContact}
			</a>
		</div>
	</div>

	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<ChevronDown class="h-6 w-6 text-text-muted/50" />
	</div>
</section>

<!-- Skills ribbon -->
<section class="border-y border-soft-peach/20 bg-bg-card py-16 dark:border-accent/10">
	<div class="mx-auto max-w-6xl px-6">
		<ScrollReveal>
			<h2 class="mb-8 text-center font-display text-2xl">{t.skillsTitle}</h2>
			<div class="flex flex-wrap items-center justify-center gap-3">
				{#each skills as skill, i}
					<ScrollReveal delay={i * 50}>
						<SkillPill label={skill.label} color={skill.color} />
					</ScrollReveal>
				{/each}
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- Featured projects -->
{#if data.featured.length > 0 || data.githubError}
	<section class="py-24 px-6">
		<div class="mx-auto max-w-6xl">
			<ScrollReveal>
				<div class="mb-12 flex items-end justify-between">
					<div>
						<p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">{t.featuredLabel}</p>
						<h2 class="font-display text-3xl sm:text-4xl">{t.featuredTitle}</h2>
						{#if data.githubError}
							<p class="mt-2 text-sm text-text-muted">
								<span class="mr-1">:(</span> {t.featuredGithubError}
							</p>
						{/if}
					</div>
					<a
						href="/projects"
						class="group hidden items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-accent sm:flex"
					>
						{t.featuredViewAll}
						<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</ScrollReveal>

			<div class="grid gap-6 sm:grid-cols-2">
				{#each data.featured as project, i}
					<ScrollReveal delay={i * 100}>
						<ProjectCard {project} />
					</ScrollReveal>
				{/each}
			</div>

			<div class="mt-8 text-center sm:hidden">
				<a href="/projects" class="inline-flex items-center gap-1 text-sm font-medium text-accent">
					{t.featuredViewAllMobile}
					<ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</section>
{/if}

<!-- Echo spotlight -->
<section class="border-y border-soft-peach/20 bg-bg-card py-24 px-6 dark:border-accent/10">
	<div class="mx-auto max-w-4xl">
		<ScrollReveal>
			<div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
				<div class="flex-1">
					<p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">{t.echoLabel}</p>
					<h2 class="font-display text-3xl sm:text-4xl">Echo</h2>
					<p class="mt-4 text-base leading-relaxed text-text-muted">{t.echoDescription}</p>
					<p class="mt-3 text-base leading-relaxed text-text-muted">{t.echoSubtext}</p>
					<div class="mt-6 flex flex-wrap gap-3">
						<a
							href="https://goecho.xyz"
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-deep-sky hover:shadow-lg hover:shadow-accent/20"
						>
							{t.echoCtaText}
							<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
						</a>
					</div>
				</div>
				<div class="flex shrink-0 flex-wrap gap-2 lg:max-w-[200px]">
					{#each ['TypeScript', 'Node.js', 'Discord.js', 'Nuxt', 'Tailwind'] as tech}
						<span class="rounded-full border border-accent/20 px-3 py-1 text-xs font-medium text-accent">{tech}</span>
					{/each}
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- Call to action -->
<section class="relative overflow-hidden py-24 px-6">
	<div class="absolute inset-0 -z-10 opacity-20">
		<BreezyBlob color="var(--color-golden-hour)" size={500} opacity={0.3} duration={28} />
	</div>

	<ScrollReveal>
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="font-display text-3xl sm:text-4xl">{t.ctaTitle}</h2>
			<p class="mt-4 text-lg text-text-muted">{t.ctaDescription}</p>
			<a
				href="/contact"
				class="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-all hover:bg-deep-sky hover:shadow-lg hover:shadow-accent/20"
			>
				{t.ctaButton}
				<ArrowRight class="h-4 w-4" />
			</a>
		</div>
	</ScrollReveal>
</section>
