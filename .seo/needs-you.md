# Needs you

Decisions, logins, reviews, and keys only a human can provide. The skill writes the `question` column. You write the `answer` column. The next run acts on any row with an answer and no `closed` date, then stamps it.

Keep answers to one line where you can. If the answer is "never" or "not now," say that; the row closes and the blocked candidate is dropped or deferred.

| id | opened | blocks | question | answer | closed |
|---|---|---|---|---|---|
| NY-1 | 2026-09-11 | foundation | Is PLINTH primarily for readers, or should the positioning also explicitly serve writers and literary researchers; and do the issue-level submissions pages describe historical calls or an active submissions route? | | |
| NY-2 | 2026-09-11 | measurement | Can you connect Google Search Console for `https://plinth.us/`? This is free and unlocks index coverage, page performance, CTR, and demand evidence. | Verified in Chrome as the `sc-domain:plinth.us` property; the Search Console API/MCP connector is not available in this session. | 2026-09-11 |
| NY-3 | 2026-09-11 | comparison/off-page | Which publications or archives should be treated as PLINTH's competitors or reference set before comparison or outreach work? | | |
| NY-4 | 2026-09-11 | URL contract repair | After reviewing the local source changes, will you deploy them so the live sitemap/canonical repair can be re-crawled? Recommendation: deploy through the normal project workflow, then re-run the live health check; this run did not deploy. | Live crawl confirmed the extensionless sitemap and canonical repair is deployed; 66 internal targets still use redirecting `.html` links. | 2026-09-11 |
| NY-5 | 2026-09-11 | Search Console sitemap | Search Console recognizes `sc-domain:plinth.us`, but the Sitemaps report has zero submitted sitemaps. Submit `https://plinth.us/sitemap.xml` there so Google has an explicit sitemap receipt; this is separate from indexing and should not be treated as proof that URLs are indexed. | | |
