import { Q as attr, b as spread_props, et as escape_html, f as derived, h as head, m as ensure_array_like, v as sanitize_props, y as slot } from "../../../chunks/environment.js";
import { t as page } from "../../../chunks/state.js";
import { t as Icon } from "../../../chunks/Icon.js";
import { n as getTranslations } from "../../../chunks/i18n.js";
import { t as ScrollReveal } from "../../../chunks/ScrollReveal.js";
import { t as SkillPill } from "../../../chunks/SkillPill.js";
//#region node_modules/lucide-svelte/dist/icons/award.svelte
function Award($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "award" },
		sanitize_props($$props),
		{
			/**
			* @component @name Award
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUuNDc3IDEyLjg5IDEuNTE1IDguNTI2YS41LjUgMCAwIDEtLjgxLjQ3bC0zLjU4LTIuNjg3YTEgMSAwIDAgMC0xLjE5NyAwbC0zLjU4NiAyLjY4NmEuNS41IDAgMCAxLS44MS0uNDY5bDEuNTE0LTguNTI2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/award
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }], ["circle", {
				"cx": "12",
				"cy": "8",
				"r": "6"
			}]],
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
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const t = derived(() => getTranslations(page.data.locale));
		const skills = [
			{
				label: "TypeScript",
				color: "#3178c6"
			},
			{
				label: "React",
				color: "#61dafb"
			},
			{
				label: "Svelte",
				color: "#ff3e00"
			},
			{
				label: "Vue",
				color: "#41b883"
			},
			{
				label: "Node.js",
				color: "#68a063"
			},
			{
				label: "Python",
				color: "#3572A5"
			},
			{
				label: "Google Cloud",
				color: "#4285F4"
			},
			{
				label: "Kubernetes",
				color: "#326ce5"
			},
			{
				label: "Terraform",
				color: "#7b42bc"
			},
			{
				label: "Docker",
				color: "#2496ed"
			},
			{
				label: "Linux",
				color: "#FCC624"
			},
			{
				label: "PostgreSQL",
				color: "#336791"
			},
			{
				label: "Git",
				color: "#f05032"
			},
			{
				label: "Tailwind CSS",
				color: "#06b6d4"
			},
			{
				label: "REST APIs",
				color: "#5BA4CF"
			},
			{
				label: "CI/CD",
				color: "#B2C9AB"
			}
		];
		head("cwls5q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(t().aboutTitle)}</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", t().siteDescription)}/> <link rel="canonical" href="https://adamhakansson.dev/about"/> <meta property="og:url" content="https://adamhakansson.dev/about"/> <meta property="og:title"${attr("content", t().aboutTitle)}/>`);
		});
		$$renderer.push(`<div class="pt-32 pb-24"><section class="mx-auto max-w-2xl px-6">`);
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex items-center gap-5 mb-10"><img src="/profile.jpg" alt="Adam Hakansson" width="72" height="72" class="h-[72px] w-[72px] rounded-full ring-2 ring-soft-peach/40 ring-offset-2 ring-offset-bg"/> <div><h1 class="font-display text-3xl sm:text-4xl">Adam Hakansson</h1> <p class="text-text-muted">${escape_html(t().aboutRole)}</p></div></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 80,
			children: ($$renderer) => {
				$$renderer.push(`<div class="space-y-4 text-base leading-relaxed text-text-muted"><p>${escape_html(t().aboutBio1)}
					  <a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1439878&amp;dswid=-67" target="_blank" rel="noopener noreferrer" class="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent">${escape_html(t().aboutThesisLink)}</a>.</p> <p>${escape_html(t().aboutBio2)}</p> <p>${escape_html(t().aboutBio3)}</p></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 160,
			children: ($$renderer) => {
				$$renderer.push(`<a href="https://www.credly.com/badges/eeafe348-cb24-4586-91f7-00c08b1464ee/linked_in_profile" target="_blank" rel="noopener noreferrer" class="group mt-10 flex items-center gap-4 rounded-xl border border-soft-peach/20 p-4 transition-all hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 dark:border-accent/10"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4285F4]/10 text-[#4285F4]">`);
				Award($$renderer, { class: "h-5 w-5" });
				$$renderer.push(`<!----></div> <div class="min-w-0"><p class="text-sm font-medium text-text group-hover:text-accent transition-colors">${escape_html(t().aboutCertTitle)}</p> <p class="text-xs text-text-muted">${escape_html(t().aboutCertSub)}</p></div></a>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 240,
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-14"><h2 class="mb-5 font-display text-xl">${escape_html(t().aboutSkillsTitle)}</h2> <div class="flex flex-wrap gap-2"><!--[-->`);
				const each_array = ensure_array_like(skills);
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let skill = each_array[$$index];
					SkillPill($$renderer, {
						label: skill.label,
						color: skill.color
					});
				}
				$$renderer.push(`<!--]--></div></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 320,
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-14"><h2 class="mb-6 font-display text-xl">${escape_html(t().aboutTimelineTitle)}</h2> <div class="space-y-6 border-l-2 border-soft-peach/30 pl-6 dark:border-accent/15"><!--[-->`);
				const each_array_1 = ensure_array_like(t().aboutTimeline);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let item = each_array_1[$$index_1];
					$$renderer.push(`<div><p class="text-xs font-medium tracking-wider uppercase text-accent">${escape_html(item.year)}</p> <p class="mt-1 text-sm text-text">${escape_html(item.title)}</p> <p class="mt-0.5 text-sm text-text-muted">${escape_html(item.description)}</p></div>`);
				}
				$$renderer.push(`<!--]--></div></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></section></div>`);
	});
}
//#endregion
export { _page as default };
