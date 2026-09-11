# PLINTH — SEO roadmap

## Site facts

- Domain: https://plinth.us
- Stack: hand-authored static HTML served from `src/`.
- Content store: repository files; 87 HTML pages across the homepage and seven
  issues.
- Sitemap: `src/sitemap.xml` → `https://plinth.us/sitemap.xml`.
- Robots: `src/robots.txt`.
- Priority hubs: `/index.html`, `/issue07/index.html`, `/issue01/index.html`.
- Visual constraint: preserve each issue's art direction exactly.

## Phase status tracker

| # | Phase | Pattern | Status | Notes |
|---|---|---|---|---|
| 0 | Technical foundations | Setup | in progress | Metadata and live crawl baseline first. |
| 1 | Search Console connection | Measurement | blocked | Requires owner connection. |
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

1. Which archive pages earn impressions and clicks in Search Console?
2. Are issue and contributor pages indexed, or are any invisible/orphaned?
3. Does the current metadata accurately describe each page's work and issue?
