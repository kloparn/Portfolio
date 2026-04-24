<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import SkillPill from '$lib/components/SkillPill.svelte';
	import { Award } from 'lucide-svelte';
	import { getTranslations } from '$lib/i18n';
	import { page } from '$app/state';

	const t = $derived(getTranslations(page.data.locale));

	const skills = [
		{ label: 'TypeScript', color: '#3178c6' },
		{ label: 'React', color: '#61dafb' },
		{ label: 'Svelte', color: '#ff3e00' },
		{ label: 'Vue', color: '#41b883' },
		{ label: 'Node.js', color: '#68a063' },
		{ label: 'Python', color: '#3572A5' },
		{ label: 'Google Cloud', color: '#4285F4' },
		{ label: 'Kubernetes', color: '#326ce5' },
		{ label: 'Terraform', color: '#7b42bc' },
		{ label: 'Docker', color: '#2496ed' },
		{ label: 'Linux', color: '#FCC624' },
		{ label: 'PostgreSQL', color: '#336791' },
		{ label: 'Git', color: '#f05032' },
		{ label: 'Tailwind CSS', color: '#06b6d4' },
		{ label: 'REST APIs', color: '#5BA4CF' },
		{ label: 'CI/CD', color: '#B2C9AB' }
	];
</script>

<svelte:head>
	<title>{t.aboutTitle}</title>
	<meta name="description" content={t.siteDescription} />
	<link rel="canonical" href="https://adamhakansson.dev/about" />
	<meta property="og:url" content="https://adamhakansson.dev/about" />
	<meta property="og:title" content={t.aboutTitle} />
</svelte:head>

<div class="pt-32 pb-24">
	<section class="mx-auto max-w-2xl px-6">

		<ScrollReveal>
			<div class="flex items-center gap-5 mb-10">
				<img
					src="/profile.jpg"
					alt="Adam Hakansson"
					width="72"
					height="72"
					class="h-[72px] w-[72px] rounded-full ring-2 ring-soft-peach/40 ring-offset-2 ring-offset-bg"
				/>
				<div>
					<h1 class="font-display text-3xl sm:text-4xl">Adam Hakansson</h1>
					<p class="text-text-muted">{t.aboutRole}</p>
				</div>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={80}>
			<div class="space-y-4 text-base leading-relaxed text-text-muted">
				<p>
					{t.aboutBio1}
					{' '}
					<a
						href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1439878&dswid=-67"
						target="_blank"
						rel="noopener noreferrer"
						class="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
					>{t.aboutThesisLink}</a>.
				</p>
				<p>{t.aboutBio2}</p>
				<p>{t.aboutBio3}</p>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={160}>
			<a
				href="https://www.credly.com/badges/eeafe348-cb24-4586-91f7-00c08b1464ee/linked_in_profile"
				target="_blank"
				rel="noopener noreferrer"
				class="group mt-10 flex items-center gap-4 rounded-xl border border-soft-peach/20 p-4 transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 dark:border-accent/10"
			>
				<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4285F4]/10 text-[#4285F4]">
					<Award class="h-5 w-5" />
				</div>
				<div class="min-w-0">
					<p class="text-sm font-medium text-text group-hover:text-accent transition-colors">
						{t.aboutCertTitle}
					</p>
					<p class="text-xs text-text-muted">{t.aboutCertSub}</p>
				</div>
			</a>
		</ScrollReveal>

		<ScrollReveal delay={240}>
			<div class="mt-14">
				<h2 class="mb-5 font-display text-xl">{t.aboutSkillsTitle}</h2>
				<div class="flex flex-wrap gap-2">
					{#each skills as skill}
						<SkillPill label={skill.label} color={skill.color} />
					{/each}
				</div>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={320}>
			<div class="mt-14">
				<h2 class="mb-6 font-display text-xl">{t.aboutTimelineTitle}</h2>
				<div class="space-y-6 border-l-2 border-soft-peach/30 pl-6 dark:border-accent/15">
					{#each t.aboutTimeline as item}
						<div>
							<p class="text-xs font-medium tracking-wider uppercase text-accent">{item.year}</p>
							<p class="mt-1 text-sm text-text">{item.title}</p>
							<p class="mt-0.5 text-sm text-text-muted">{item.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</ScrollReveal>

	</section>
</div>
