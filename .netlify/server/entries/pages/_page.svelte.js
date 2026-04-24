import { Q as attr, S as html, b as spread_props, et as escape_html, f as derived, h as head, m as ensure_array_like, v as sanitize_props, y as slot } from "../../chunks/environment.js";
import { t as page } from "../../chunks/state.js";
import { t as Icon } from "../../chunks/Icon.js";
import { t as ProjectCard } from "../../chunks/ProjectCard.js";
import { n as getTranslations } from "../../chunks/i18n.js";
import { t as BreezyBlob } from "../../chunks/BreezyBlob.js";
import { t as ScrollReveal } from "../../chunks/ScrollReveal.js";
import { t as SkillPill } from "../../chunks/SkillPill.js";
//#region node_modules/lucide-svelte/dist/icons/arrow-right.svelte
function Arrow_right($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "arrow-right" },
		sanitize_props($$props),
		{
			/**
			* @component @name ArrowRight
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]],
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
//#region node_modules/lucide-svelte/dist/icons/chevron-down.svelte
function Chevron_down($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "chevron-down" },
		sanitize_props($$props),
		{
			/**
			* @component @name ChevronDown
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "m6 9 6 6 6-6" }]],
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
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
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
				label: "PostgreSQL",
				color: "#336791"
			},
			{
				label: "Docker",
				color: "#2496ed"
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
				label: "Git",
				color: "#f05032"
			},
			{
				label: "REST APIs",
				color: "#5BA4CF"
			}
		];
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(t().siteTitle)}</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", t().siteDescription)}/> <link rel="canonical" href="https://adamhakansson.dev"/> <meta property="og:url" content="https://adamhakansson.dev"/> <meta property="og:title"${attr("content", t().siteTitle)}/> <meta property="og:description"${attr("content", t().siteDescription)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", t().siteTitle)}/> <meta name="twitter:description"${attr("content", t().siteDescription)}/> ${html(`<script type="application/ld+json">${JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				"name": "Adam Hakansson",
				"url": "https://adamhakansson.dev",
				"jobTitle": "Software Engineer",
				"sameAs": ["https://github.com/kloparn", "https://www.linkedin.com/in/adam-h%C3%A5kansson-02a592196/"],
				"knowsAbout": [
					"TypeScript",
					"React",
					"Svelte",
					"Node.js",
					"Python",
					"Google Cloud",
					"PostgreSQL",
					"Docker",
					"Kubernetes",
					"Terraform"
				]
			})}<\/script>`)}`);
		});
		$$renderer.push(`<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6"><div class="absolute inset-0 -z-10 opacity-40 dark:opacity-20" style="background: linear-gradient(-45deg, var(--color-soft-peach), var(--color-sky-blue), var(--color-sage-green), var(--color-golden-hour)); background-size: 400% 400%; animation: gradient-shift 15s ease infinite;"></div> <div class="absolute -left-20 -top-20">`);
		BreezyBlob($$renderer, {
			color: "var(--color-soft-peach)",
			size: 400,
			opacity: .2,
			duration: 25
		});
		$$renderer.push(`<!----></div> <div class="absolute -right-10 top-1/3">`);
		BreezyBlob($$renderer, {
			color: "var(--color-sky-blue)",
			size: 350,
			opacity: .15,
			duration: 30
		});
		$$renderer.push(`<!----></div> <div class="absolute -bottom-10 left-1/4">`);
		BreezyBlob($$renderer, {
			color: "var(--color-sage-green)",
			size: 300,
			opacity: .15,
			duration: 22
		});
		$$renderer.push(`<!----></div> <div class="relative max-w-3xl text-center"><p class="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-text-muted">${escape_html(t().heroLabel)}</p> <h1 class="font-display text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">${escape_html(t().heroGreeting)} <span class="relative inline-block"><span class="relative z-10">${escape_html(t().heroName)}</span> <span class="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-golden-hour/40 sm:h-4"></span></span></h1> <p class="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-text-muted sm:text-xl">${escape_html(t().heroDescription)}</p> <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"><a href="/projects" class="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-deep-sky hover:shadow-lg hover:shadow-accent/20">${escape_html(t().heroCtaWork)} `);
		Arrow_right($$renderer, { class: "h-4 w-4 transition-transform group-hover:translate-x-1" });
		$$renderer.push(`<!----></a> <a href="/contact" class="inline-flex items-center gap-2 rounded-full border border-text/10 px-6 py-3 text-sm font-medium text-text transition-all hover:border-accent hover:text-accent">${escape_html(t().heroCtaContact)}</a></div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">`);
		Chevron_down($$renderer, { class: "h-6 w-6 text-text-muted/50" });
		$$renderer.push(`<!----></div></section> <section class="border-y border-soft-peach/20 bg-bg-card py-16 dark:border-accent/10"><div class="mx-auto max-w-6xl px-6">`);
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<h2 class="mb-8 text-center font-display text-2xl">${escape_html(t().skillsTitle)}</h2> <div class="flex flex-wrap items-center justify-center gap-3"><!--[-->`);
				const each_array = ensure_array_like(skills);
				for (let i = 0, $$length = each_array.length; i < $$length; i++) {
					let skill = each_array[i];
					ScrollReveal($$renderer, {
						delay: i * 50,
						children: ($$renderer) => {
							SkillPill($$renderer, {
								label: skill.label,
								color: skill.color
							});
						},
						$$slots: { default: true }
					});
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></section> `);
		if (data.featured.length > 0 || data.githubError) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="py-24 px-6"><div class="mx-auto max-w-6xl">`);
			ScrollReveal($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<div class="mb-12 flex items-end justify-between"><div><p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">${escape_html(t().featuredLabel)}</p> <h2 class="font-display text-3xl sm:text-4xl">${escape_html(t().featuredTitle)}</h2> `);
					if (data.githubError) {
						$$renderer.push("<!--[0-->");
						$$renderer.push(`<p class="mt-2 text-sm text-text-muted"><span class="mr-1">:(</span> ${escape_html(t().featuredGithubError)}</p>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></div> <a href="/projects" class="group hidden items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-accent sm:flex">${escape_html(t().featuredViewAll)} `);
					Arrow_right($$renderer, { class: "h-4 w-4 transition-transform group-hover:translate-x-1" });
					$$renderer.push(`<!----></a></div>`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> <div class="grid gap-6 sm:grid-cols-2"><!--[-->`);
			const each_array_1 = ensure_array_like(data.featured);
			for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
				let project = each_array_1[i];
				ScrollReveal($$renderer, {
					delay: i * 100,
					children: ($$renderer) => {
						ProjectCard($$renderer, { project });
					},
					$$slots: { default: true }
				});
			}
			$$renderer.push(`<!--]--></div> <div class="mt-8 text-center sm:hidden"><a href="/projects" class="inline-flex items-center gap-1 text-sm font-medium text-accent">${escape_html(t().featuredViewAllMobile)} `);
			Arrow_right($$renderer, { class: "h-4 w-4" });
			$$renderer.push(`<!----></a></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <section class="border-y border-soft-peach/20 bg-bg-card py-24 px-6 dark:border-accent/10"><div class="mx-auto max-w-4xl">`);
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"><div class="flex-1"><p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">${escape_html(t().echoLabel)}</p> <h2 class="font-display text-3xl sm:text-4xl">Echo</h2> <p class="mt-4 text-base leading-relaxed text-text-muted">${escape_html(t().echoDescription)}</p> <p class="mt-3 text-base leading-relaxed text-text-muted">${escape_html(t().echoSubtext)}</p> <div class="mt-6 flex flex-wrap gap-3"><a href="https://goecho.xyz" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-deep-sky hover:shadow-lg hover:shadow-accent/20">${escape_html(t().echoCtaText)} `);
				Arrow_right($$renderer, { class: "h-4 w-4 transition-transform group-hover:translate-x-1" });
				$$renderer.push(`<!----></a></div></div> <div class="flex shrink-0 flex-wrap gap-2 lg:max-w-[200px]"><!--[-->`);
				const each_array_2 = ensure_array_like([
					"TypeScript",
					"Node.js",
					"Discord.js",
					"Nuxt",
					"Tailwind"
				]);
				for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
					let tech = each_array_2[$$index_2];
					$$renderer.push(`<span class="rounded-full border border-accent/20 px-3 py-1 text-xs font-medium text-accent">${escape_html(tech)}</span>`);
				}
				$$renderer.push(`<!--]--></div></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></section> <section class="relative overflow-hidden py-24 px-6"><div class="absolute inset-0 -z-10 opacity-20">`);
		BreezyBlob($$renderer, {
			color: "var(--color-golden-hour)",
			size: 500,
			opacity: .3,
			duration: 28
		});
		$$renderer.push(`<!----></div> `);
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="mx-auto max-w-2xl text-center"><h2 class="font-display text-3xl sm:text-4xl">${escape_html(t().ctaTitle)}</h2> <p class="mt-4 text-lg text-text-muted">${escape_html(t().ctaDescription)}</p> <a href="/contact" class="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-all hover:bg-deep-sky hover:shadow-lg hover:shadow-accent/20">${escape_html(t().ctaButton)} `);
				Arrow_right($$renderer, { class: "h-4 w-4" });
				$$renderer.push(`<!----></a></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></section>`);
	});
}
//#endregion
export { _page as default };
