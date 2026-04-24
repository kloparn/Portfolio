import { Q as attr, b as spread_props, c as attr_class, d as bind_props, et as escape_html, f as derived, h as head, l as attr_style, m as ensure_array_like, v as sanitize_props, x as stringify, y as slot } from "../../chunks/environment.js";
import { t as page } from "../../chunks/state.js";
import { t as Icon } from "../../chunks/Icon.js";
import { t as GithubIcon } from "../../chunks/GithubIcon.js";
import { t as LinkedinIcon } from "../../chunks/LinkedinIcon.js";
import { n as getTranslations } from "../../chunks/i18n.js";
//#region node_modules/lucide-svelte/dist/icons/menu.svelte
function Menu($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "menu" },
		sanitize_props($$props),
		{
			/**
			* @component @name Menu
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["path", { "d": "M4 5h16" }],
				["path", { "d": "M4 12h16" }],
				["path", { "d": "M4 19h16" }]
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
//#region node_modules/lucide-svelte/dist/icons/moon.svelte
function Moon($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "moon" },
		sanitize_props($$props),
		{
			/**
			* @component @name Moon
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [["path", { "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }]],
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
//#region node_modules/lucide-svelte/dist/icons/sun.svelte
function Sun($$renderer, $$props) {
	Icon($$renderer, spread_props([
		{ name: "sun" },
		sanitize_props($$props),
		{
			/**
			* @component @name Sun
			* @description Lucide SVG icon component, renders SVG Element with children.
			*
			* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
			* @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
			*
			* @param {Object} props - Lucide icons props and any valid SVG attribute
			* @returns {FunctionalComponent} Svelte component
			*
			*/
			iconNode: [
				["circle", {
					"cx": "12",
					"cy": "12",
					"r": "4"
				}],
				["path", { "d": "M12 2v2" }],
				["path", { "d": "M12 20v2" }],
				["path", { "d": "m4.93 4.93 1.41 1.41" }],
				["path", { "d": "m17.66 17.66 1.41 1.41" }],
				["path", { "d": "M2 12h2" }],
				["path", { "d": "M20 12h2" }],
				["path", { "d": "m6.34 17.66-1.41 1.41" }],
				["path", { "d": "m19.07 4.93-1.41 1.41" }]
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
//#region src/lib/components/ThemeToggle.svelte
function ThemeToggle($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { theme = "light" } = $$props;
		$$renderer.push(`<button class="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-soft-peach/30 dark:hover:bg-accent/20"${attr("aria-label", `Toggle ${stringify(theme === "light" ? "dark" : "light")} mode`)}><span class="inline-flex transition-transform duration-500"${attr_style(`transform: rotate(${stringify(theme === "dark" ? "180deg" : "0deg")})`)}>`);
		if (theme === "light") {
			$$renderer.push("<!--[0-->");
			Moon($$renderer, { class: "h-5 w-5 text-warm-charcoal" });
		} else {
			$$renderer.push("<!--[-1-->");
			Sun($$renderer, { class: "h-5 w-5 text-golden-hour" });
		}
		$$renderer.push(`<!--]--></span></button>`);
		bind_props($$props, { theme });
	});
}
//#endregion
//#region src/lib/components/Nav.svelte
function Nav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { theme = "light", t } = $$props;
		const links = derived(() => [
			{
				href: "/",
				label: t.navHome
			},
			{
				href: "/about",
				label: t.navAbout
			},
			{
				href: "/projects",
				label: t.navProjects
			},
			{
				href: "/contact",
				label: t.navContact
			}
		]);
		function isActive(href) {
			if (href === "/") return page.url.pathname === "/";
			return page.url.pathname.startsWith(href);
		}
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<nav${attr_class(`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${stringify("translate-y-0")} ${stringify("bg-transparent")}`)}><div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href="/" class="font-display text-xl tracking-tight text-text transition-colors hover:text-accent">Adam H.</a> <div class="hidden items-center gap-8 md:flex"><!--[-->`);
			const each_array = ensure_array_like(links());
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let link = each_array[$$index];
				$$renderer.push(`<a${attr("href", link.href)}${attr_class(`relative py-1 text-sm font-medium tracking-wide transition-colors ${stringify(isActive(link.href) ? "text-accent" : "text-text-muted hover:text-text")}`)}>${escape_html(link.label)} `);
				if (isActive(link.href)) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<span class="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent"></span>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></a>`);
			}
			$$renderer.push(`<!--]--> `);
			ThemeToggle($$renderer, {
				get theme() {
					return theme;
				},
				set theme($$value) {
					theme = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----></div> <div class="flex items-center gap-2 md:hidden">`);
			ThemeToggle($$renderer, {
				get theme() {
					return theme;
				},
				set theme($$value) {
					theme = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> <button class="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-soft-peach/30 dark:hover:bg-accent/20"${attr("aria-label", `${stringify("Open")} menu`)}>`);
			$$renderer.push("<!--[-1-->");
			Menu($$renderer, { class: "h-5 w-5" });
			$$renderer.push(`<!--]--></button></div></div> `);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></nav>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { theme });
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { t } = $$props;
		$$renderer.push(`<footer class="border-t border-soft-peach/20 dark:border-accent/10"><div class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between"><p class="text-sm text-text-muted">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(t.footerText)}</p> <div class="flex items-center gap-4"><a href="https://github.com/kloparn" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-all hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10" aria-label="GitHub">`);
		GithubIcon($$renderer, {});
		$$renderer.push(`<!----></a> <a href="https://www.linkedin.com/in/adam-h%C3%A5kansson-02a592196/" target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-all hover:bg-soft-peach/20 hover:text-text dark:hover:bg-accent/10" aria-label="LinkedIn">`);
		LinkedinIcon($$renderer, {});
		$$renderer.push(`<!----></a></div></div></footer>`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data, children } = $$props;
		let theme = "light";
		const t = derived(() => getTranslations(data.locale));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("12qhfyh", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>${escape_html(t().siteTitle)}</title>`);
				});
			});
			$$renderer.push(`<div class="flex min-h-screen flex-col"><a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">Skip to content</a> `);
			Nav($$renderer, {
				t: t(),
				get theme() {
					return theme;
				},
				set theme($$value) {
					theme = $$value;
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> <main id="main" class="flex-1">`);
			children($$renderer);
			$$renderer.push(`<!----></main> `);
			Footer($$renderer, { t: t() });
			$$renderer.push(`<!----></div>`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}
//#endregion
export { _layout as default };
