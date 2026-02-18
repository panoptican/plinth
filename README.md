# PLINTH

PLINTH is a static literary journal archive spanning seven issues (2013-2017), each with intentionally distinct art direction.

Production URL: `https://plinth.us`

## Local Development

Requirements:

- Node.js 18+
- npm

Install and run:

```bash
npm install
npm run serve
```

This starts BrowserSync and serves directly from `src/`.

## Deploying to Cloudflare Pages

This repository is configured for direct static deployment with Wrangler.

### One-time setup

1. Install Wrangler globally (or use `npx wrangler`).
2. Authenticate:

```bash
wrangler login
```

3. Create Pages project (if it does not exist yet):

```bash
wrangler pages project create plinth --production-branch main
```

### Manual deploy

```bash
wrangler pages deploy src --project-name plinth --branch main
```

## GitHub Actions Deployment

This repo includes `.github/workflows/deploy-cloudflare-pages.yml`.

Set these repository secrets in GitHub:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Recommended token permissions:

- Account: `Cloudflare Pages:Edit`
- Zone: `Zone:Read`

Behavior:

- Push to `main` deploys to production.
- Other branches deploy preview builds.

## Custom Domain (`plinth.us`)

In Cloudflare Pages:

1. Open project `plinth`.
2. Go to **Custom domains**.
3. Add `plinth.us` and `www.plinth.us`.

Then add Redirect Rules in Cloudflare:

- Redirect any `http` or `www` request to `https://plinth.us` with status `301`.
- Preserve path and query string.

Suggested dynamic redirect expression:

```txt
(http.host eq "www.plinth.us") or (http.request.scheme eq "http")
```

Suggested target URL:

```txt
concat("https://plinth.us", http.request.uri.path)
```

## Project Structure

```txt
src/
  index.html
  issue01/ ... issue07/
```

Each issue is intentionally self-contained and should preserve its original visual identity.
