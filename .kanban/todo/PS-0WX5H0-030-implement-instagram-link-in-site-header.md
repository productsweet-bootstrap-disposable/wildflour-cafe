---
title: Implement Instagram link in site header
id: PS-0WX5H0-030
status: todo
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
