---
title: Implement site-wide opening-hours display in header/footer
id: PS-0WX5H0-015
status: backlog
template_type: implementation-task
source_intake_id: PS-0WX5H0-013
backlog_state: ready
created: 2026-07-11
updated: 2026-07-11
priority: medium
owner: AI agent + user
tags:
  - content
  - frontend
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add a standard weekly opening-hours display, sourced from a single repo data file, rendered via the global header or footer so it appears on the homepage and every other page.

## Problem Or Opportunity

Customers repeatedly email asking when the business is open because hours are not shown anywhere on the site.

## Scope

- Create a single data source (e.g. src/data/hours.ts) holding standard weekly opening hours (no holiday/special overrides).
- Render the hours in the global header or footer component so they appear on the homepage and site-wide.
- Follow the design system: no solid borders for separation, correct typography scale/tokens for labels vs body text.
- Out of scope: CMS integration, holiday/special-hours overrides, per-page overrides.

## Proposed Design / Approach

Add src/data/hours.ts exporting a typed weekly-hours structure. Update the shared header/footer component to import and render it (e.g. as a compact "Open: Mon-Fri 9-5" style line), styled per design tokens. No new dependencies expected.

## Verification Plan

- Homepage renders opening hours in the header or footer.
- At least one other page renders the same hours via the shared component (confirms site-wide, not homepage-only).
- Editing values in src/data/hours.ts and redeploying changes the displayed hours without touching component logic.
- Visual check against design system (no borders, correct type scale, tonal surfaces).
