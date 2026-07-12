---
title: Add "Today's Special" banner to homepage
id: PS-0WX5H0-023
status: intake
template_type: feature-request
intake_state: ready-for-dev
delivery_task_ids: []
created: 2026-07-12
updated: 2026-07-12
priority: medium
owner: AI agent + user
source: Product request via grooming session
tags:
  - homepage
  - design-tokens
  - ui
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Requested Capability Or Ask

Visitors landing on the homepage should immediately see what's freshly special today, encouraging a visit/purchase.

## Desired Outcome

A single-line "Today's Special" banner with a small star icon renders directly under the hero section, sourced from a new `todaysSpecial` string field in the site config. When that field is an empty string, the banner is fully hidden and reserves no layout space. Uses only existing warm-accent design tokens, and is responsive across breakpoints.

## Problem Or Opportunity

There's currently no way to surface a rotating daily highlight (e.g. a fresh bake) on the homepage without a code change to hardcode copy; a config-driven banner lets content be updated without touching layout code.

## Scope

- Add `todaysSpecial: string` to site config, seeded with "Lemon & thyme scones — fresh from 7am".\n- Render a banner directly below the hero section on the homepage only.\n- Content: single line of text + small star icon.\n- Empty string hides the banner entirely with no layout shift (no reserved space, no collapsed-but-present container causing gap).\n- Style using existing warm accent tokens from design-tokens.json — no new colors introduced.\n- Responsive at mobile/tablet/desktop breakpoints.

## Proposed Design / Approach

Add the config field, conditionally render a `TodaysSpecialBanner` component under the hero using existing warm accent tokens (e.g. primary/tertiary-container per design system), star icon from existing icon set, and ensure the component returns null (not a hidden/zero-height element) when the string is empty so no layout is reserved.

## Verification Plan

- With `todaysSpecial` set to the seed string, confirm the banner renders directly under the hero, on one line, with a star icon, using only existing accent tokens.\n- Set `todaysSpecial` to `""` and confirm the banner and any wrapper are absent from the DOM and no gap/layout shift appears versus the hero-only page.\n- Check rendering at mobile, tablet, and desktop viewport widths.\n- Visual check against design tokens: no new colors introduced.

## Questions

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.
