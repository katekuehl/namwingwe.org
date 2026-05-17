import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://namwingwe.lovable.app";

const slugs = ["grace-namaganda-story", "esther-akello-story", "florence-auma-story"];

const staticPaths = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/web-development", changefreq: "monthly", priority: "0.8" },
  { path: "/graphic-design", changefreq: "monthly", priority: "0.8" },
  { path: "/ui-ux-design", changefreq: "monthly", priority: "0.8" },
  { path: "/website-design", changefreq: "monthly", priority: "0.8" },
];

const entries = [
  ...staticPaths,
  ...slugs.map((s) => ({ path: `/blog/${s}`, changefreq: "monthly", priority: "0.6" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map(
    (e) =>
      `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
