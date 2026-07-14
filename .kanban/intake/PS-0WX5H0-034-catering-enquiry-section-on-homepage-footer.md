---
title: Catering enquiry section on homepage footer
id: PS-0WX5H0-034
status: intake
template_type: feature-request
intake_state: ready-for-dev
delivery_task_ids:
  - PS-0WX5H0-036
created: 2026-07-14
updated: 2026-07-14
priority: medium
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

## Target User Or Audience

Prospective catering customers / event organisers

## Desired Outcome

Homepage visitors near the footer see a short catering call-out and can immediately start an email enquiry via a mailto link, increasing catering lead capture without adding a form or backend.

## Problem Or Opportunity

There is currently no way for a homepage visitor to discover that Wildflour Cafe offers catering for events and meetings, or to easily initiate an enquiry.

## Scope

Add a new section positioned near (just above) the homepage footer containing: (1) a short heading (e.g. "Catering For Your Event"), (2) one sentence stating we cater for events and meetings, and (3) a `mailto:hello@wildflour.cafe` link/button as the call to action. Follow the existing design system (spacing rhythm, no hard borders, tonal surfaces, typography scale). No backend/form changes — link-only.

## Proposed Design / Approach

Add a homepage section component styled per the design system (surface-container-low or similar tonal background to separate it from the footer without a divider line), containing heading (title/display scale), one-sentence body copy, and a tertiary/primary button or text link using `mailto:hello@wildflour.cafe`. Ensure responsive layout matches editorial/asymmetric conventions used elsewhere on the homepage.

## Verification Plan

- Visually confirm the section renders near the footer on desktop and mobile viewports.
- Confirm heading and single sentence copy are present and readable.
- Click/inspect the mailto link opens the default mail client with `hello@wildflour.cafe` pre-filled as recipient.
- Confirm styling follows design system (no 1px borders, tonal separation, spacing rhythm).
- Run `kanban.web-review-page` against the homepage path to confirm no console/accessibility errors introduced.

## Questions

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Refinement Notes

Request is fully specified (heading + one sentence + mailto to hello@wildflour.cafe, placement near footer) — no open questions. Advancing straight to ready-for-dev with a linked implementation task per user instruction.
