---
title: Implement catering enquiry section on homepage footer
id: PS-0WX5H0-036
status: doing
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

## Completion Notes

- Outcome: Implemented catering enquiry section on homepage (`src/pages/index.astro`), added just above the FAQ/footer with heading "Catering", one sentence of copy, and a `mailto:hello@wildflour.cafe` CTA link. Styled with tonal background (`--flour`) and rounded corners consistent with existing site sections (no 1px borders used).
- PR opened: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/13 (branch feature/PS-0WX5H0-036)
- Verification actually run: PR CI (`pr-gate` check) triggered and was still `in_progress` after 4 polls in this session; not yet green/red. No local test execution available in this environment — PR CI is the only verification channel. Self-wake-on-CI-completion is currently disabled org-wide (`self-armed-wake-trigger-disabled`), so a fresh session will NOT auto-resume when CI finishes — a human or a follow-up session must check `repo.poll-actions-status` on PR #13 to confirm green before merge.
- Manual verification plan items (mailto href correctness, visual placement, no-border/tonal styling, web-review-page pass) were addressed via code review of the diff but not run through `kanban.web-review-page` in this session — recommend running that against the deployed preview once available.
- Documentation updated: none required (no architecture/system-boundary change).
- Follow-up tasks created: none. Follow-up needed: confirm PR #13 CI result and merge status before moving this card to Done.
