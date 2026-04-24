<script lang="ts">
	let { label, color = 'var(--color-accent)' }: { label: string; color?: string } = $props();
</script>

<span
	class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105"
	style="border-color: {color}40; color: {color}; background-color: {color}10;"
>
	{label}
</span>
