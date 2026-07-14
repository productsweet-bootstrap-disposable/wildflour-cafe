---
title: Add newsletter signup note to homepage footer
id: PS-0WX5H0-040
status: todo
template_type: implementation-task
source_intake_id: PS-0WX5H0-038
created: 2026-07-14
updated: 2026-07-14
priority: low
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add a short heading and one-line mailto invitation to the homepage footer inviting customers to email hello@wildflour.cafe to join the mailing list for specials.

## Problem Or Opportunity

Homepage has no way to invite visitors to join the mailing list for specials.

## Scope

Footer-only change: short heading (e.g. "Join our mailing list") plus one line of body text containing a mailto:hello@wildflour.cafe link. No signup form, no email-service integration. Follow design system: no divider lines/borders, tonal spacing per existing footer treatment.

## Proposed Design / Approach

Add a small footer block/component with heading + single line containing `<a href="mailto:hello@wildflour.cafe">hello@wildflour.cafe</a>`, styled consistent with existing footer typography and spacing tokens.

## Verification Plan

- Homepage footer shows heading + one line with mailto link.
- Clicking/tapping link opens mail client addressed to hello@wildflour.cafe.
- Renders correctly at mobile and desktop widths.
- No console errors; matches design system (no borders/dividers, correct spacing rhythm).
