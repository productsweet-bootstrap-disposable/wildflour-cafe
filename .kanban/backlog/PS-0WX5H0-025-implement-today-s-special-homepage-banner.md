---
title: Implement "Today's Special" homepage banner
id: PS-0WX5H0-025
status: backlog
template_type: implementation-task
source_intake_id: PS-0WX5H0-023
backlog_state: ready
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
