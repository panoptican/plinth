# PLINTH — SEO roadmap

## Site facts

- Domain: https://plinth.us
- Stack: hand-authored static HTML served from `src/`.
- Content store: repository files; 82 HTML pages across the homepage and seven
  issues.
- Sitemap: `src/sitemap.xml` → `https://plinth.us/sitemap.xml`.
- Robots: `src/robots.txt`.
- Priority hubs: `/index.html`, `/issue07/index.html`, `/issue01/index.html`.
- Visual constraint: preserve each issue's art direction exactly.

## Phase status tracker

| # | Phase | Pattern | Status | Notes |
|---|---|---|---|---|
| 0 | Technical foundations | Setup | completed | Sitemap, canonical URLs, metadata, headings, links, and live health baseline verified. |
| 1 | Search Console connection | Measurement | partial | Domain property and sitemap verified in Chrome; API/MCP connector is unavailable. |
| 2 | Content and internal-link opportunities | Editorial / repair | pending | Requires Search Console or dated demand evidence. |

## Existing programmatic surface

None. This is an archive, not a template-driven content product. Do not add
programmatic pages until a specific demand signal and canonical owner exist.

## Guardrails

- Keep `index.html` in canonical URLs unless a deliberate redirect plan is
  approved; the sitemap and existing canonicals use it.
- Preserve intentional `<br>` line breaks and inline positioning.
- Every new page needs demand evidence, a clear information gain, and two
  inbound links including one from a crawl hub.
- No comparison or “best” claims without an owner-approved competitor set.

## Next measurement questions

1. When will Search Console reread the updated 82-URL sitemap?
2. Which archive pages earn impressions and clicks after the metadata corrections settle?
3. Which pages are indexed, close, wrong-query, or invisible at page level?
