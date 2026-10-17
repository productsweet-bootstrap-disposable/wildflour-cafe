---
title: Add Instagram link to site header
id: PS-0WX5H0-028
status: done
template_type: feature-request
created: 2026-07-12
updated: 2026-07-12
priority: low
owner: AI agent + user
source: Direct request
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Requested Capability Or Ask

Visitors browsing the site header should be able to reach Wildflour Café's Instagram profile (@wildflourcafe) directly from the header nav, on both desktop and mobile.

## Desired Outcome

A small Instagram glyph link appears at the right end of the header nav (desktop and mobile menu), linking to https://instagram.com/wildflourcafe, opening in a new tab with rel="noopener", with accessible label "Wildflour Café on Instagram".

## Problem Or Opportunity

The site header currently has no social links; the business wants an Instagram touchpoint for visitors without adding visual clutter or new design-token colours.

## Scope

Header component (desktop nav + mobile menu). Add one icon-only link:
- Handle: @wildflourcafe
- URL: https://instagram.com/wildflourcafe
- Position: right end of header nav
- Icon: existing header icon sizing convention
- Colour: warm accent from existing design tokens only — no new colours/tokens
- Accessible label: "Wildflour Café on Instagram" (aria-label)
- target="_blank" rel="noopener"
- Must render in both desktop and mobile nav/menu states

Out of scope: other social networks, footer links, analytics/tracking on the click.

## Proposed Design / Approach

Add an anchor + Instagram SVG glyph to the header nav component, reusing the existing icon-button sizing class and an existing warm-accent colour token for the icon fill/stroke. Ensure it's included in both the desktop nav markup and the mobile menu markup (or shared partial if the header already shares one).

## Verification Plan

- Visual check: Instagram glyph appears at right end of header nav on desktop viewport, sized consistently with any other header icons.
- Visual check: glyph also appears in the mobile menu (open mobile nav, confirm icon present and tappable).
- Functional check: clicking/tapping the icon opens https://instagram.com/wildflourcafe in a new tab; inspect element confirms rel="noopener" and target="_blank".
- Accessibility check: icon has aria-label "Wildflour Café on Instagram" (screen reader / axe check announces this label, no unlabelled link).
- Design check: icon colour matches an existing warm-accent token from design-tokens.json — no new colour values introduced.

## Questions

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Implementation Plan

Grooming / intake item — no code of its own. Delivery was carried by PS-0WX5H0-030.

## Completion Notes

- Outcome: Closed automatically as delivered — every dev task linked to this idea (PS-0WX5H0-030) is `done` and at least one of them was completed rather than cancelled, so this idea was moved `intake/` → `done/`.
- Verification actually run: Linked dev tasks confirmed `done`, with at least one completed rather than cancelled, before the move; the generated `done/` file shape satisfies `lint:kanban-structure`.
- Documentation updated: none — automated closure of a delivered intake item.
