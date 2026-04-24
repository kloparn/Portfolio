import { Q as attr, l as attr_style, x as stringify } from "./environment.js";
//#region src/lib/components/BreezyBlob.svelte
function BreezyBlob($$renderer, $$props) {
	let { color = "var(--color-soft-peach)", size = 300, opacity = .3, duration = 20 } = $$props;
	const paths = [
		"M44.5,-76.3C56.9,-69.5,65.8,-55.9,73.4,-41.6C81,-27.3,87.4,-12.4,86.1,1.5C84.8,15.3,75.9,28,66.5,39.4C57.1,50.9,47.3,61.1,35.5,67.8C23.6,74.5,9.7,77.6,-3.5,76.1C-16.7,74.6,-29.2,68.4,-41.3,61.2C-53.3,53.9,-64.9,45.6,-72.1,34.1C-79.3,22.6,-82.2,7.9,-80.2,-6C-78.1,-19.8,-71.2,-32.8,-61.6,-43.1C-52.1,-53.4,-39.9,-61,-27.4,-67.7C-14.9,-74.3,-2.1,-79.9,10,-78.8C22.1,-77.6,32.1,-83.1,44.5,-76.3Z",
		"M39.9,-68.1C51.1,-60.5,59,-47.7,66.2,-34.1C73.4,-20.5,79.9,-6.1,79.7,8.5C79.5,23.1,72.5,37.8,62.2,48.7C51.9,59.6,38.4,66.6,24.2,71.4C10,76.1,-4.9,78.5,-18.7,74.9C-32.5,71.3,-45.2,61.7,-55.4,49.7C-65.6,37.8,-73.3,23.5,-76.5,7.8C-79.7,-7.9,-78.4,-25,-70.3,-37.5C-62.2,-50,-47.3,-57.9,-33.3,-64.2C-19.3,-70.5,-6.2,-75.1,5.8,-74.4C17.8,-73.8,28.7,-75.7,39.9,-68.1Z",
		"M45.3,-77.7C57.5,-70,65.7,-55.4,72.4,-40.5C79.2,-25.6,84.5,-10.5,83.9,4.6C83.3,19.7,76.8,34.7,67.1,46.4C57.3,58.1,44.2,66.5,30.3,72.1C16.3,77.7,1.4,80.5,-13.6,78.7C-28.6,76.9,-43.6,70.5,-55.6,60.4C-67.5,50.2,-76.3,36.2,-80.3,20.9C-84.3,5.7,-83.4,-10.8,-77.1,-24.5C-70.8,-38.1,-59.1,-48.9,-46,-57.2C-33,-65.4,-18.7,-71.1,-1.5,-73.5C15.7,-75.9,33.1,-85.3,45.3,-77.7Z"
	];
	const path = paths[Math.floor(Math.random() * paths.length)];
	$$renderer.push(`<div class="pointer-events-none absolute"${attr_style(`width: ${stringify(size)}px; height: ${stringify(size)}px; animation: blob-drift ${stringify(duration)}s ease-in-out infinite;`)}><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><path${attr("d", path)} transform="translate(100 100)"${attr("fill", color)}${attr("fill-opacity", opacity)}></path></svg></div>`);
}
//#endregion
export { BreezyBlob as t };
