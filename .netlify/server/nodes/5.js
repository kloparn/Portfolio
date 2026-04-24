import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Ce47diz6.js","_app/immutable/chunks/B1k2mX6G.js","_app/immutable/chunks/D5KShmSU.js","_app/immutable/chunks/DyosG_hu.js","_app/immutable/chunks/cv2NFmKF.js","_app/immutable/chunks/D1hYfEew.js","_app/immutable/chunks/CBEXrTed.js","_app/immutable/chunks/-M2N12tC.js","_app/immutable/chunks/BxJag6RF.js","_app/immutable/chunks/BGCvn-ho.js"];
export const stylesheets = [];
export const fonts = [];
