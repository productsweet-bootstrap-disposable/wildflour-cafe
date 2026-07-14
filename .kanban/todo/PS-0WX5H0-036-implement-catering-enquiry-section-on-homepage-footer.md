---
title: Implement catering enquiry section on homepage footer
id: PS-0WX5H0-036
status: todo
template_type: implementation-task
source_intake_id: PS-0WX5H0-034
created: 2026-07-14
updated: 2026-07-14
priority: medium
owner: AI agent + user
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add a catering enquiry section near the homepage footer with a heading, one sentence of copy, and a mailto link to hello@wildflour.cafe.

## Problem Or Opportunity

Homepage has no way to surface catering availability or let visitors start a catering enquiry.

## Scope

New section positioned just above the homepage footer: short heading, one sentence stating we cater for events and meetings, and a `mailto:hello@wildflour.cafe` link/button. Follow design system tonal separation (no divider borders), spacing rhythm, and typography scale. No form/backend work — link only.

## Proposed Design / Approach

Add a new homepage section component using a tonal surface (e.g. surface-container-low) to separate from footer without borders; heading uses title/display type scale; body copy is single sentence; CTA is a text/tertiary or primary-styled link using mailto: href. Ensure responsive/asymmetric layout consistent with rest of homepage.

## Verification Plan

- Visually confirm section renders near footer on desktop and mobile.
- Confirm heading + one-sentence copy present.
- Confirm mailto link href is exactly `mailto:hello@wildflour.cafe`.
- Confirm styling matches design system (no 1px borders, tonal separation, spacing rhythm).
- Run `kanban.web-review-page` against homepage path to confirm no console/accessibility regressions.
