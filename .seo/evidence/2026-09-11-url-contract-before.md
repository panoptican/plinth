# URL contract repair — before state

Observed on the production crawl at 2026-09-11 before the source repair:

- `health_diff.py` fetched 87 sitemap URLs; all 87 redirected once from a
  `.html` URL to the production extensionless URL.
- All 87 canonical tags pointed at the `.html` URL instead of the final URL.
- The sitemap's 87 `lastmod` values all shared `2026-02-18`, which the audit
  flagged as a likely build-date smell rather than independently verified
  content dates.
- 39 pages contained an internal link to an issue directory without its
  trailing slash; those links redirected to the slash form.
- The live final URLs returned HTTP 200, while representative `.html` URLs
  returned HTTP 308 to the extensionless form.

Chosen repair: make canonicals and sitemap locations match the live final URLs,
remove unverifiable uniform `lastmod` values, and add trailing slashes to issue
directory links. No visible styling or prose was changed.
