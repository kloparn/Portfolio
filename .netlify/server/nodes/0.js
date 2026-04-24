import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.D_lxy0Tk.js","_app/immutable/chunks/B1k2mX6G.js","_app/immutable/chunks/DrTntmWd.js","_app/immutable/chunks/D37YEDw5.js","_app/immutable/chunks/cv2NFmKF.js","_app/immutable/chunks/D1hYfEew.js","_app/immutable/chunks/-M2N12tC.js","_app/immutable/chunks/CPtfXYNW.js"];
export const stylesheets = ["_app/immutable/assets/0.KjvpDDCP.css"];
export const fonts = [];
