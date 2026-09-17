# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PLINTH is a static literary journal archive spanning 7 issues (2013-2017), each with distinct visual designs. The site is hosted at https://plinth.us.

**Critical constraint:** Visual appearance must be preserved exactly. Each issue has intentional art direction that cannot be altered.

## Development Commands

```bash
# Start local development server with live reload
npm run serve

# This serves from src/ directory with browser-sync
```

No build tools, bundlers, or transpilation - this is a static HTML/CSS/JS site.

## Architecture

```
src/
├── index.html              # Main landing page
├── issue01/ - issue07/     # Each issue is self-contained
│   ├── index.html          # Issue table of contents
│   ├── css/                # Issue-specific styles (grid.css or styles.css)
│   ├── js/                 # Issue-specific JavaScript
│   ├── type/               # Web fonts (.woff, .ttf)
│   └── img/                # Images for this issue
└── js/                     # Shared JavaScript (minimal)
```

### Key Design Decisions

- **Each issue is isolated** - separate CSS, JS, and fonts per issue to preserve distinct visual identities
- **No shared CSS framework** - utility classes added directly to each issue's CSS file
- **jScrollPane** (issues 01-03) - custom scrollbars integral to design, requires jQuery
- **granim.js** (issue 07) - animated gradient background

### CSS Files

- Issues 01-03: `css/grid.css` (custom grid + typography)
- Issues 04-07: `css/styles.css` (different naming convention)
- Each file contains: normalize reset, @font-face declarations, grid system, and issue-specific styles

### JavaScript Dependencies

Keep these (required):
- jQuery (per-issue copies, various versions)
- jScrollPane + jquery.mousewheel + mwheelIntent (custom scroll behavior)
- granim.js (issue07 only)

## Working with This Codebase

### Poetry and Prose Content

`<br>` tags within content sections are **intentional line breaks** for poetry formatting - do not remove or replace with CSS.

### Inline Styles

Many inline styles exist for precise art-directed positioning. Only extract to classes if patterns repeat 10+ times.

### Responsive Layouts

Each issue's CSS ends with a "Responsive" section of `max-width` media queries. Desktop rendering must stay pixel-identical, so put small-screen changes inside those blocks only. Breakpoints differ per issue (the width where that fixed design stops fitting). jScrollPane is attached only at desktop widths via each issue's `js/scroll-pane.js`.

### Testing Changes

Manual visual comparison:
1. Screenshot before/after at same scroll position
2. Verify desktop Chrome/Firefox appearance unchanged
3. Verify phone (375px) and tablet (768px, 1024px) layouts: no horizontal page scroll, content readable
4. Tab through page to verify focus states visible

## Reference Documents

- `plans/MODERNIZATION_PLAN.md` - Detailed modernization phases and rationale
- `plans/ALT_TEXT_CHECKLIST.md` - Image accessibility audit
- `plans/RESPONSIVE_PLAN.md` - Responsive rules per issue, breakpoints, and the screenshot/overflow QA harness (`plans/responsive-qa/`)

## Site URLs

- Production: https://plinth.us
- Issue pattern: https://plinth.us/issue01/, https://plinth.us/issue02/, etc.
