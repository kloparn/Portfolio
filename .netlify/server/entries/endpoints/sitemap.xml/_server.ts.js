//#region src/routes/sitemap.xml/+server.ts
var SITE_URL = "https://adamhakansson.dev";
var pages = [
	"",
	"/about",
	"/projects",
	"/contact"
];
var GET = async () => {
	const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === "/projects" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
};
//#endregion
export { GET };
