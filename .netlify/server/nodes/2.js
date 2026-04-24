import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.D5sApjm3.js","_app/immutable/chunks/B1k2mX6G.js","_app/immutable/chunks/DrTntmWd.js","_app/immutable/chunks/D37YEDw5.js","_app/immutable/chunks/cv2NFmKF.js","_app/immutable/chunks/D1hYfEew.js","_app/immutable/chunks/CBEXrTed.js","_app/immutable/chunks/-M2N12tC.js","_app/immutable/chunks/BxJag6RF.js","_app/immutable/chunks/BGCvn-ho.js","_app/immutable/chunks/DK3v2hWQ.js"];
export const stylesheets = [];
export const fonts = [];
