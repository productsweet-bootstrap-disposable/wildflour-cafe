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

## Completion Notes

- Outcome: Implemented per plan. Added `src/data/hours.ts` (single typed weekly-hours data source, no holiday overrides) and updated `src/layouts/Base.astro` to render the hours in the shared footer, so they appear on the homepage, menu page, and any other page using the layout.
- PR: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/6 (branch `feature/PS-0WX5H0-015`)
- Verification actually run: no local test execution is available in this session; the PR's CI (`pr-gate`) is the verification surface and was pending at last check (self-wake armed to react on completion). No `ci:verify` bypass performed.
- Verification plan status:
  - Homepage renders hours via shared footer: yes (Base.astro used by index.astro).
  - Second page renders same hours via shared component: yes (menu.astro also uses Base.astro).
  - Editing `src/data/hours.ts` changes displayed hours without touching component logic: yes, by construction.
  - Visual check against design system (no borders, correct type scale, tonal surfaces): reused existing footer's tonal background (`--flour`) and existing type treatment; no new borders introduced. Not yet visually screenshotted/confirmed by a human.
- Documentation updated: none required beyond the code change itself.
- Follow-up tasks created: none. If CI comes back red, a follow-up session (via the armed wake) will fix and re-push.
