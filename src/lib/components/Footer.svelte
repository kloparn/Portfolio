<script lang="ts">
	import GithubIcon from './icons/GithubIcon.svelte';
	import LinkedinIcon from './icons/LinkedinIcon.svelte';
	import type { Translations } from '$lib/i18n';

	let { t }: { t: Translations } = $props();
</script>

<footer class="border-t border-soft-peach/20 dark:border-accent/10">
	<div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
		<p class="text-sm text-text-muted">
			&copy; {new Date().getFullYear()} {t.footerText}
		</p>

		<div class="flex items-center gap-4">
			<a
				href="https://github.com/kloparn"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-all hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10"
				aria-label="GitHub"
			>
				<GithubIcon />
			</a>
			<a
				href="https://www.linkedin.com/in/adam-h%C3%A5kansson-02a592196/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-all hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10"
				aria-label="LinkedIn"
			>
				<LinkedinIcon />
			</a>
		</div>
	</div>
</footer>
