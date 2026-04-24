import { et as escape_html, l as attr_style, x as stringify } from "./environment.js";
//#region src/lib/components/SkillPill.svelte
function SkillPill($$renderer, $$props) {
	let { label, color = "var(--color-accent)" } = $$props;
	$$renderer.push(`<span class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105"${attr_style(`border-color: ${stringify(color)}40; color: ${stringify(color)}; background-color: ${stringify(color)}10;`)}>${escape_html(label)}</span>`);
}
//#endregion
export { SkillPill as t };
