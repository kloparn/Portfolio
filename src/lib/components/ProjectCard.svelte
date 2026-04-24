<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import GithubIcon from './icons/GithubIcon.svelte';
	import { LANGUAGE_COLORS } from '$lib/types';
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();

	function timeAgo(dateStr: string): string {
		const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
		const intervals = [
			{ label: 'year', seconds: 31536000 },
			{ label: 'month', seconds: 2592000 },
			{ label: 'week', seconds: 604800 },
			{ label: 'day', seconds: 86400 }
		];

		for (const interval of intervals) {
			const count = Math.floor(seconds / interval.seconds);
			if (count >= 1) {
				return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
			}
		}
		return 'just now';
	}

	const langColor = $derived(project.language ? LANGUAGE_COLORS[project.language] ?? '#888' : '#888');
</script>

<article
	class="group relative flex flex-col gap-4 rounded-2xl border border-soft-peach/20 bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-soft-peach/10 dark:border-accent/10 dark:hover:shadow-accent/5"
>
	<div class="flex items-start justify-between gap-3">
		<h3 class="font-display text-lg text-text transition-colors group-hover:text-accent">
			{project.name}
		</h3>
		<div class="flex shrink-0 items-center gap-2">
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10"
				aria-label="View {project.name} on GitHub"
			>
				<GithubIcon class="h-4 w-4" />
			</a>
			{#if project.homepage}
				<a
					href={project.homepage}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10"
					aria-label="Visit {project.name} live site"
				>
					<ExternalLink class="h-4 w-4" />
				</a>
			{/if}
		</div>
	</div>

	{#if project.description}
		<p class="text-sm leading-relaxed text-text-muted">
			{project.description}
		</p>
	{/if}

	<div class="mt-auto flex items-center gap-4 text-xs text-text-muted">
		{#if project.language}
			<span class="flex items-center gap-1.5">
				<span class="h-3 w-3 rounded-full" style="background-color: {langColor}"></span>
				{project.language}
			</span>
		{/if}
		<span>{timeAgo(project.updatedAt)}</span>
		{#if project.stars > 0}
			<span>{project.stars} stars</span>
		{/if}
	</div>
</article>
