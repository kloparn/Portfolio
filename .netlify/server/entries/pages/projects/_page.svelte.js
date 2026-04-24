import { Q as attr, c as attr_class, et as escape_html, f as derived, h as head, m as ensure_array_like, x as stringify } from "../../../chunks/environment.js";
import { t as page } from "../../../chunks/state.js";
import { t as ProjectCard } from "../../../chunks/ProjectCard.js";
import { n as getTranslations } from "../../../chunks/i18n.js";
import { t as BreezyBlob } from "../../../chunks/BreezyBlob.js";
import { t as ScrollReveal } from "../../../chunks/ScrollReveal.js";
//#region src/routes/projects/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const t = derived(() => getTranslations(page.data.locale));
		let filter = "all";
		let sortBy = "updated";
		const languages = derived(() => [...new Set(data.projects.map((p) => p.language).filter(Boolean))]);
		const filtered = derived(() => {
			let result = data.projects;
			if (filter !== "all") result = result.filter((p) => p.language === filter);
			return [...result].sort((a, b) => {
				if (sortBy === "stars") return b.stars - a.stars;
				if (sortBy === "name") return a.name.localeCompare(b.name);
				return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
			});
		});
		head("rqn88j", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(t().projectsTitle)}</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", t().projectsDescription)}/> <link rel="canonical" href="https://adamhakansson.dev/projects"/> <meta property="og:url" content="https://adamhakansson.dev/projects"/> <meta property="og:title"${attr("content", t().projectsTitle)}/>`);
		});
		$$renderer.push(`<div class="pt-28 pb-24"><section class="relative mx-auto max-w-6xl px-6"><div class="absolute -left-20 top-0 -z-10">`);
		BreezyBlob($$renderer, {
			color: "var(--color-sky-blue)",
			size: 350,
			opacity: .12,
			duration: 28
		});
		$$renderer.push(`<!----></div> `);
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">${escape_html(t().projectsLabel)}</p> <h1 class="font-display text-4xl sm:text-5xl">${escape_html(t().projectsHeading)}</h1> <p class="mt-4 max-w-lg text-lg text-text-muted">${escape_html(t().projectsDescription)}</p> `);
				if (data.githubError) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="mt-4 flex items-center gap-2 rounded-lg border border-golden-hour/30 bg-golden-hour/5 px-4 py-3 text-sm text-text-muted"><span class="text-lg">:(</span> <span>${escape_html(t().projectsGithubError)} ${escape_html(data.projects.length > 0 ? t().projectsGithubErrorCached : t().projectsGithubErrorRetry)}</span></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 100,
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-12 flex flex-wrap items-center gap-6"><div class="flex flex-wrap items-center gap-2"><button${attr_class(`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${stringify(filter === "all" ? "bg-accent text-white" : "bg-bg-card text-text-muted hover:text-text dark:bg-bg-card")}`)}>${escape_html(t().projectsFilterAll)}</button> <!--[-->`);
				const each_array = ensure_array_like(languages());
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let lang = each_array[$$index];
					$$renderer.push(`<button${attr_class(`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${stringify(filter === lang ? "bg-accent text-white" : "bg-bg-card text-text-muted hover:text-text dark:bg-bg-card")}`)}>${escape_html(lang)}</button>`);
				}
				$$renderer.push(`<!--]--></div> <div class="ml-auto flex items-center gap-2 text-xs text-text-muted"><span>${escape_html(t().projectsSortLabel)}</span> <button${attr_class(`rounded px-2 py-1 transition-colors ${stringify(sortBy === "updated" ? "bg-bg-card text-text font-medium" : "hover:text-text")}`)}>${escape_html(t().projectsSortRecent)}</button> <button${attr_class(`rounded px-2 py-1 transition-colors ${stringify(sortBy === "stars" ? "bg-bg-card text-text font-medium" : "hover:text-text")}`)}>${escape_html(t().projectsSortStars)}</button> <button${attr_class(`rounded px-2 py-1 transition-colors ${stringify(sortBy === "name" ? "bg-bg-card text-text font-medium" : "hover:text-text")}`)}>${escape_html(t().projectsSortAz)}</button></div></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
		const each_array_1 = ensure_array_like(filtered());
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let project = each_array_1[i];
			ScrollReveal($$renderer, {
				delay: i * 60,
				children: ($$renderer) => {
					ProjectCard($$renderer, { project });
				},
				$$slots: { default: true }
			});
		}
		$$renderer.push(`<!--]--></div> `);
		if (filtered().length === 0) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mt-20 text-center"><p class="text-text-muted">${escape_html(t().projectsEmpty)}</p> <button class="mt-3 text-sm font-medium text-accent hover:underline">${escape_html(t().projectsClearFilter)}</button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section></div>`);
	});
}
//#endregion
export { _page as default };
