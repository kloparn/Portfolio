export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["profile.jpg","robots.txt","selfie.png"]),
	mimeTypes: {".jpg":"image/jpeg",".txt":"text/plain",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DK1GR36E.js",app:"_app/immutable/entry/app.BbNXae6L.js",imports:["_app/immutable/entry/start.DK1GR36E.js","_app/immutable/chunks/D37YEDw5.js","_app/immutable/chunks/B1k2mX6G.js","_app/immutable/entry/app.BbNXae6L.js","_app/immutable/chunks/B1k2mX6G.js","_app/immutable/chunks/D1hYfEew.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/github",
				pattern: /^\/api\/github\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/github/_server.ts.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
