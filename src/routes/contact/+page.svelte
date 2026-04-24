<script lang="ts">
	import { Copy, Check, ArrowUpRight } from 'lucide-svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import BreezyBlob from '$lib/components/BreezyBlob.svelte';
	import { getTranslations } from '$lib/i18n';
	import { page } from '$app/state';

	const t = $derived(getTranslations(page.data.locale));

	const email = 'Adam.hakanson@hotmail.com';
	let copied = $state(false);

	async function copyEmail() {
		await navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	const socials = $derived([
		{
			label: 'GitHub',
			href: 'https://github.com/kloparn',
			icon: GithubIcon,
			description: t.contactGithubDesc
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/adam-h%C3%A5kansson-02a592196/',
			icon: LinkedinIcon,
			description: t.contactLinkedinDesc
		}
	]);
</script>

<svelte:head>
	<title>{t.contactTitle}</title>
	<meta name="description" content={t.contactDescription} />
	<link rel="canonical" href="https://adamhakansson.dev/contact" />
	<meta property="og:url" content="https://adamhakansson.dev/contact" />
	<meta property="og:title" content={t.contactTitle} />
</svelte:head>

<div class="flex min-h-screen items-center pt-20 pb-24">
	<section class="relative mx-auto w-full max-w-4xl px-6">
		<div class="absolute -right-20 top-1/4 -z-10">
			<BreezyBlob color="var(--color-golden-hour)" size={400} opacity={0.15} duration={26} />
		</div>
		<div class="absolute -left-16 bottom-0 -z-10">
			<BreezyBlob color="var(--color-soft-peach)" size={300} opacity={0.12} duration={22} />
		</div>

		<ScrollReveal>
			<p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">{t.contactLabel}</p>
			<h1 class="font-display text-4xl sm:text-5xl md:text-6xl">
				{t.contactHeading}
				<span class="relative inline-block">
					<span class="relative z-10">{t.contactHeadingHighlight}</span>
					<span class="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-soft-peach/50 sm:h-4"></span>
				</span>
			</h1>
			<p class="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">{t.contactDescription}</p>
		</ScrollReveal>

		<ScrollReveal delay={150}>
			<div class="mt-14">
				<button
					onclick={copyEmail}
					class="group flex w-full items-center justify-between rounded-2xl border border-soft-peach/20 bg-bg-card p-6 text-left transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 dark:border-accent/10 sm:p-8"
				>
					<div>
						<p class="mb-1 text-xs font-medium tracking-wider uppercase text-text-muted">{t.contactEmailLabel}</p>
						<p class="font-display text-xl text-text sm:text-2xl">{email}</p>
					</div>

					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all
							{copied ? 'bg-sage-green/20 text-sage-green' : 'bg-soft-peach/20 text-text-muted group-hover:bg-accent/10 group-hover:text-accent dark:bg-accent/10'}"
					>
						{#if copied}
							<Check class="h-5 w-5" />
						{:else}
							<Copy class="h-5 w-5" />
						{/if}
					</div>
				</button>

				{#if copied}
					<p class="mt-3 text-center text-sm font-medium text-sage-green">{t.contactCopied}</p>
				{/if}
			</div>
		</ScrollReveal>

		<ScrollReveal delay={300}>
			<div class="mt-10 grid gap-4 sm:grid-cols-2">
				{#each socials as social}
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 rounded-2xl border border-soft-peach/20 bg-bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 dark:border-accent/10"
					>
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft-peach/20 text-text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent dark:bg-accent/10">
							<social.icon class="h-5 w-5" />
						</div>
						<div class="flex-1">
							<p class="font-medium text-text">{social.label}</p>
							<p class="text-sm text-text-muted">{social.description}</p>
						</div>
						<ArrowUpRight class="h-4 w-4 text-text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
				{/each}
			</div>
		</ScrollReveal>
	</section>
</div>
