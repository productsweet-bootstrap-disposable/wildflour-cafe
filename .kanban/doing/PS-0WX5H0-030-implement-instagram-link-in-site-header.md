---
title: Implement Instagram link in site header
id: PS-0WX5H0-030
status: doing
template_type: implementation-task
source_intake_id: PS-0WX5H0-028
created: 2026-07-12
updated: 2026-07-12
priority: low
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add an Instagram icon link to the site header nav (desktop + mobile), pointing to @wildflourcafe.

## Problem Or Opportunity

The header has no social links; add a single Instagram touchpoint without introducing new design tokens or visual clutter.

## Scope

Header component (desktop nav + mobile menu). Add one icon-only link:
- Handle: @wildflourcafe
- URL: https://instagram.com/wildflourcafe
- Position: right end of header nav
- Icon: reuse existing header icon sizing convention
- Colour: warm accent from existing design tokens only — no new colours/tokens
- Accessible label: aria-label="Wildflour Café on Instagram"
- target="_blank" rel="noopener"
- Present in both desktop nav and mobile menu markup

Out of scope: other social networks, footer links, click analytics/tracking.

## Proposed Design / Approach

Add an anchor + Instagram SVG glyph to the header nav component, reusing the existing icon-button sizing class and an existing warm-accent colour token for icon fill/stroke. Ensure it appears in both desktop nav markup and mobile menu markup (shared partial if the header already shares one).

## Verification Plan

- Visual: Instagram glyph appears at right end of header nav on desktop, sized consistently with any other header icons.
- Visual: glyph also appears in the mobile menu (open mobile nav, confirm icon present and tappable).
- Functional: clicking/tapping opens https://instagram.com/wildflourcafe in a new tab; inspect element confirms rel="noopener" target="_blank".
- Accessibility: icon has aria-label "Wildflour Café on Instagram"; screen reader/axe check announces label, no unlabelled link.
- Design: icon colour matches an existing warm-accent token from design-tokens.json — no new colour values introduced.

## Completion Notes

- Outcome: Implemented Instagram header link per plan. PR #11 merged: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/11 (merge commit 0956ca0e1abd5666f942bed7227423a8913e976b).
- Change: Added icon-only Instagram anchor (@wildflourcafe, https://instagram.com/wildflourcafe) to the shared header nav in `src/layouts/Base.astro`. Uses existing warm-accent tokens (--terracotta / --terracotta-deep) for icon colour, no new tokens. Includes aria-label, target=_blank, rel=noopener.
- Verification actually run: PR CI (`pr-gate`) reported success on merged head commit 097b3d7. No local test execution available; CI is the verification.
- Merged PR: #11
- Reviewed by: CI gate (pr-gate success); merge performed by human.
- Documentation updated: none required.
- Follow-up tasks created: none.
