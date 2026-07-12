---
title: Add header opening-hours hint (desktop) and refine footer hours display
id: PS-0WX5H0-032
status: todo
template_type: implementation-task
source_intake_id: PS-0WX5H0-013
created: 2026-07-12
updated: 2026-07-12
priority: medium
owner: AI agent + user
tags:
  - content
  - frontend
  - design
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add a compact "Open today: …" hours hint to the site header (desktop viewports only), and refine the existing footer hours line to reuse warm accent tokens and guarantee no layout shift. Builds on the footer-only hours display already shipped in PS-0WX5H0-015.

## Problem Or Opportunity

The footer already shows weekly opening hours site-wide (PS-0WX5H0-015), but customers scanning the header for a quick "are you open now" answer don't see anything there, and the footer line doesn't currently reuse the warm accent tokens or have an explicit no-layout-shift guarantee.

## Scope

- Reuse the existing hours data source (src/data/hours.ts, from PS-0WX5H0-015) as the single source of truth — no new data model.
- Header: render a short "Open today: <today's hours>" hint, desktop viewport only (hidden on mobile/narrow breakpoints per design system responsive rules).
- Footer: keep the existing compact hours line, site-wide on every page; restyle to reuse the warm primary/primary-container accent tokens per the design system palette.
- No layout shift: header hint and footer line must reserve their space (fixed/min-height or pre-allocated slot) so hours rendering never causes a visible reflow/CLS on load or on hydration.
- Out of scope: holiday/special-hours overrides, per-page overrides, CMS integration (unchanged from PS-0WX5H0-015).

## Proposed Design / Approach

Extend the shared header component to read src/data/hours.ts, compute "today", and render a label-scale "Open today: …" string only at desktop breakpoints (e.g. Tailwind/CSS `hidden md:block` or equivalent). Update the footer's existing hours rendering to use `primary`/`primary-container` (or their tonal derivatives) for the accent per the design system, and audit both for reserved sizing (min-height / fixed line-height) to eliminate CLS. No new dependencies expected.

## Verification Plan

- Homepage and at least one other page show the footer hours line site-wide, styled with warm accent tokens (visual check against design tokens, no solid borders).
- Desktop viewport shows "Open today: …" in the header; the hint is hidden at mobile/narrow viewports.
- Lighthouse/CLS check (or manual DevTools layout-shift check) confirms no measurable layout shift attributable to the header hint or footer line on load.
- Editing src/data/hours.ts and redeploying updates both the header hint and footer line without touching component logic.

## Completion Notes

- Outcome: Implemented header desktop-only "Open today: …" hint and refined footer hours styling (warm accent tokens, no-CLS reserved sizing) reusing src/data/hours.ts as sole source of truth. PR #12 merged: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/12 (merge commit 95530b5d9afb15edd4f7167366c5f8e86ea986ff).
- Verification actually run: PR CI (`pr-gate`) resolved green (overallStatus: success) and the PR is confirmed merged (merged: true, prState: merged) via repo.poll-actions-status. This is the only verification surface available to this agent — no local ci:verify run was performed by the agent itself; CI is what gated the merge.
- Verification Plan items: footer hours line (site-wide, warm accent tokens) and desktop header hint / mobile-hidden behavior were implemented per plan and covered by CI's build; the manual/DevTools CLS check and live cross-page visual check from the Verification Plan were not run live by this agent (no live browser tool used) — recommend a follow-up manual/live spot-check if verification_tier requires it.
- Merged PR: #12
- Reviewed by: pr-gate CI check (GitHub Actions) + human merge
- Documentation updated: none required — no architecture/C4 change.
- Follow-up tasks created: none.
