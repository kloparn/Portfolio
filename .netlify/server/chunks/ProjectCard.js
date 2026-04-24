import { Q as attr, b as spread_props, et as escape_html, f as derived, l as attr_style, v as sanitize_props, x as stringify, y as slot } from "./environment.js";
import { t as Icon } from "./Icon.js";
import { t as GithubIcon } from "./GithubIcon.js";
//#region node_modules/lucide-svelte/dist/icons/external-link.svelte
function External_link($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "external-link" },
		sanitize_props($$props),
		{
			/**
			* @component @name ExternalLink
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgM2g2djYiIC8+CiAgPHBhdGggZD0iTTEwIDE0IDIxIDMiIC8+CiAgPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/external-link
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "M15 3h6v6" }],
				["path", { "d": "M10 14 21 3" }],
				["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
			],
			children: ($$renderer) => {
				$$renderer.push(`<!--[-->`);
				slot($$renderer, $$props, "default", {}, null);
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		}
	]));
}
//#endregion
//#region src/lib/types.ts
var LANGUAGE_COLORS = {
	TypeScript: "#3178c6",
	JavaScript: "#f1e05a",
	Python: "#3572A5",
	"C#": "#178600",
	Java: "#b07219",
	HTML: "#e34c26",
	CSS: "#563d7c",
	Vue: "#41b883",
	Svelte: "#ff3e00",
	Go: "#00ADD8",
	Rust: "#dea584",
	Shell: "#89e051",
	Dockerfile: "#384d54"
};
//#endregion
//#region src/lib/components/ProjectCard.svelte
function ProjectCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { project } = $$props;
		function timeAgo(dateStr) {
			const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1e3);
			for (const interval of [
				{
					label: "year",
					seconds: 31536e3
				},
				{
					label: "month",
					seconds: 2592e3
				},
				{
					label: "week",
					seconds: 604800
				},
				{
					label: "day",
					seconds: 86400
				}
			]) {
				const count = Math.floor(seconds / interval.seconds);
				if (count >= 1) return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
			}
			return "just now";
		}
		const langColor = derived(() => project.language ? LANGUAGE_COLORS[project.language] ?? "#888" : "#888");
		$$renderer.push(`<article class="group relative flex flex-col gap-4 rounded-2xl border border-soft-peach/20 bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-soft-peach/10 dark:border-accent/10 dark:hover:shadow-accent/5"><div class="flex items-start justify-between gap-3"><h3 class="font-display text-lg text-text transition-colors group-hover:text-accent">${escape_html(project.name)}</h3> <div class="flex shrink-0 items-center gap-2"><a${attr("href", project.url)} target="_blank" rel="noopener noreferrer" class="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10"${attr("aria-label", `View ${stringify(project.name)} on GitHub`)}>`);
		GithubIcon($$renderer, { class: "h-4 w-4" });
		$$renderer.push(`<!----></a> `);
		if (project.homepage) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", project.homepage)} target="_blank" rel="noopener noreferrer" class="flex h-8 w-8 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10"${attr("aria-label", `Visit ${stringify(project.name)} live site`)}>`);
			External_link($$renderer, { class: "h-4 w-4" });
			$$renderer.push(`<!----></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div> `);
		if (project.description) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<p class="text-sm leading-relaxed text-text-muted">${escape_html(project.description)}</p>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <div class="mt-auto flex items-center gap-4 text-xs text-text-muted">`);
		if (project.language) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span class="flex items-center gap-1.5"><span class="h-3 w-3 rounded-full"${attr_style(`background-color: ${stringify(langColor())}`)}></span> ${escape_html(project.language)}</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <span>${escape_html(timeAgo(project.updatedAt))}</span> `);
		if (project.stars > 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<span>${escape_html(project.stars)} stars</span>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></article>`);
	});
}
//#endregion
export { ProjectCard as t };
