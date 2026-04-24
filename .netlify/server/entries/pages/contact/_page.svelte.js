import { Q as attr, b as spread_props, c as attr_class, et as escape_html, f as derived, h as head, m as ensure_array_like, v as sanitize_props, x as stringify, y as slot } from "../../../chunks/environment.js";
import { t as page } from "../../../chunks/state.js";
import { t as Icon } from "../../../chunks/Icon.js";
import { t as GithubIcon } from "../../../chunks/GithubIcon.js";
import { t as LinkedinIcon } from "../../../chunks/LinkedinIcon.js";
import { n as getTranslations } from "../../../chunks/i18n.js";
import { t as BreezyBlob } from "../../../chunks/BreezyBlob.js";
import { t as ScrollReveal } from "../../../chunks/ScrollReveal.js";
//#region node_modules/lucide-svelte/dist/icons/arrow-up-right.svelte
function Arrow_up_right($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "arrow-up-right" },
		sanitize_props($$props),
		{
			/**
			* @component @name ArrowUpRight
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]],
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
//#region node_modules/lucide-svelte/dist/icons/copy.svelte
function Copy($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "copy" },
		sanitize_props($$props),
		{
			/**
			* @component @name Copy
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copy
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["rect", {
				"width": "14",
				"height": "14",
				"x": "8",
				"y": "8",
				"rx": "2",
				"ry": "2"
			}], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]],
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
//#region src/routes/contact/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const t = derived(() => getTranslations(page.data.locale));
		const socials = derived(() => [{
			label: "GitHub",
			href: "https://github.com/kloparn",
			icon: GithubIcon,
			description: t().contactGithubDesc
		}, {
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/adam-h%C3%A5kansson-02a592196/",
			icon: LinkedinIcon,
			description: t().contactLinkedinDesc
		}]);
		head("1bv7ezn", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(t().contactTitle)}</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", t().contactDescription)}/> <link rel="canonical" href="https://adamhakansson.dev/contact"/> <meta property="og:url" content="https://adamhakansson.dev/contact"/> <meta property="og:title"${attr("content", t().contactTitle)}/>`);
		});
		$$renderer.push(`<div class="flex min-h-screen items-center pt-20 pb-24"><section class="relative mx-auto w-full max-w-4xl px-6"><div class="absolute -right-20 top-1/4 -z-10">`);
		BreezyBlob($$renderer, {
			color: "var(--color-golden-hour)",
			size: 400,
			opacity: .15,
			duration: 26
		});
		$$renderer.push(`<!----></div> <div class="absolute -left-16 bottom-0 -z-10">`);
		BreezyBlob($$renderer, {
			color: "var(--color-soft-peach)",
			size: 300,
			opacity: .12,
			duration: 22
		});
		$$renderer.push(`<!----></div> `);
		ScrollReveal($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<p class="mb-2 text-sm font-medium tracking-[0.15em] uppercase text-accent">${escape_html(t().contactLabel)}</p> <h1 class="font-display text-4xl sm:text-5xl md:text-6xl">${escape_html(t().contactHeading)} <span class="relative inline-block"><span class="relative z-10">${escape_html(t().contactHeadingHighlight)}</span> <span class="absolute -bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-soft-peach/50 sm:h-4"></span></span></h1> <p class="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">${escape_html(t().contactDescription)}</p>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 150,
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-14"><button class="group flex w-full items-center justify-between rounded-2xl border border-soft-peach/20 bg-bg-card p-6 text-left transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 dark:border-accent/10 sm:p-8"><div><p class="mb-1 text-xs font-medium tracking-wider uppercase text-text-muted">${escape_html(t().contactEmailLabel)}</p> <p class="font-display text-xl text-text sm:text-2xl">Adam.hakanson@hotmail.com</p></div> <div${attr_class(`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all ${stringify("bg-soft-peach/20 text-text-muted group-hover:bg-accent/10 group-hover:text-accent dark:bg-accent/10")}`)}>`);
				$$renderer.push("<!--[-1-->");
				Copy($$renderer, { class: "h-5 w-5" });
				$$renderer.push(`<!--]--></div></button> `);
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		ScrollReveal($$renderer, {
			delay: 300,
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-10 grid gap-4 sm:grid-cols-2"><!--[-->`);
				const each_array = ensure_array_like(socials());
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let social = each_array[$$index];
					$$renderer.push(`<a${attr("href", social.href)} target="_blank" rel="noopener noreferrer" class="group flex items-center gap-4 rounded-2xl border border-soft-peach/20 bg-bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 dark:border-accent/10"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft-peach/20 text-text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent dark:bg-accent/10">`);
					if (social.icon) {
						$$renderer.push("<!--[-->");
						social.icon($$renderer, { class: "h-5 w-5" });
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(`</div> <div class="flex-1"><p class="font-medium text-text">${escape_html(social.label)}</p> <p class="text-sm text-text-muted">${escape_html(social.description)}</p></div> `);
					Arrow_up_right($$renderer, { class: "h-4 w-4 text-text-muted transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" });
					$$renderer.push(`<!----></a>`);
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></section></div>`);
	});
}
//#endregion
export { _page as default };
