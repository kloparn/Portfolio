import { l as attr_style, x as stringify } from "./environment.js";
//#region src/lib/components/ScrollReveal.svelte
function ScrollReveal($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, delay = 0, threshold = .15 } = $$props;
		$$renderer.push(`<div class="transition-all duration-700 ease-out"${attr_style(`opacity: ${stringify(0)}; transform: translateY(${stringify(30)}px); transition-delay: ${stringify(delay)}ms;`)}>`);
		children($$renderer);
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
export { ScrollReveal as t };
