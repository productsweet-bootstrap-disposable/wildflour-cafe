---
title: Implement "Today's Special" homepage banner
id: PS-0WX5H0-025
status: doing
template_type: implementation-task
source_intake_id: PS-0WX5H0-023
created: 2026-07-12
updated: 2026-07-12
priority: medium
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add a config-driven "Today's Special" banner directly under the homepage hero section: single line of text + small star icon, styled with existing warm accent design tokens, hidden entirely (no layout shift) when the config string is empty.

## Problem Or Opportunity

There's no way to surface a rotating daily highlight on the homepage without a code change. A `todaysSpecial` site-config field lets content editors update the banner text without touching layout code.

## Scope

- Add `todaysSpecial: string` to site config, seeded with "Lemon & thyme scones — fresh from 7am".\n- Render a banner directly below the hero section on the homepage only.\n- Content: single line of text + small star icon.\n- Empty string hides the banner entirely with no layout shift (component returns null, no reserved space).\n- Style using existing warm accent tokens from design-tokens.json — no new colors introduced.\n- Responsive at mobile/tablet/desktop breakpoints.

## Proposed Design / Approach

Add the config field; create a `TodaysSpecialBanner` component rendered under the hero using existing warm accent tokens (e.g. primary/tertiary-container per design system) and a star icon from the existing icon set; component returns null when the string is empty so no layout is reserved.

## Verification Plan

- With `todaysSpecial` set to the seed string, confirm the banner renders directly under the hero, on one line, with a star icon, using only existing accent tokens.\n- Set `todaysSpecial` to `""` and confirm the banner and any wrapper are absent from the DOM with no layout shift vs. hero-only page.\n- Check rendering at mobile, tablet, and desktop viewport widths.\n- Visual check against design tokens: no new colors introduced.

## Completion Notes

- Outcome: Implemented "Today's Special" banner. Added `siteConfig.todaysSpecial` (src/data/site-config.ts, seeded "Lemon & thyme scones — fresh from 7am"), new `TodaysSpecialBanner` Astro component (star icon + single line text, styled with existing `--flour`/`--terracotta`/`--terracotta-deep`/`--espresso` tokens, no new colors), rendered directly under the hero on the homepage only (src/pages/index.astro). Component renders nothing when the string is empty, so no wrapper/layout is reserved. Responsive rule drops fixed width/no-wrap under 40rem.
- Verification actually run: PR #10 CI (`pr-gate`) completed with conclusion `success` on head SHA abecd5baaa9999fa652f4125726bd8816b499c66. PR confirmed merged (`merged: true`, mergeCommitSha 1e6103f80e9895178609f4721af19118d423a25c) via `repo.poll-actions-status`. No local test execution available to this agent — PR CI was the verification channel for this offline-tier task. Manual/visual verification of the empty-string hide case and mobile/tablet/desktop breakpoints was not run in a live browser by this agent; recommend a follow-up manual/visual smoke check if higher assurance is desired, though task verification_tier and CI scope covered lint/build/typecheck of the change.
- Documentation updated: none required (no architecture/C4 impact — presentational change only).
- Follow-up tasks created: none.
- Merged PR: #10 (https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/10)
- Reviewed by: CI gate `pr-gate` (success) + human merge
