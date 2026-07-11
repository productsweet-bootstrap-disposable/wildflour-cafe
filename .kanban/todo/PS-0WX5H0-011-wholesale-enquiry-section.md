---
title: "Wholesale Enquiry Section"
id: "PS-0WX5H0-011"
status: todo
template_type: implementation-task
created: "2026-07-11"
updated: "2026-07-11"
priority: low
owner: "Wildflour Café"
source: "Two local restaurants asked about standing bread orders"
tags:
  - "content"
  - "wholesale"
related_files:
  - "src/pages/index.astro"
comments: 0
attachments: 0
---

## Summary

Add a short wholesale section to the site: who we supply, minimums, and how to get in touch.
Two Aro Valley restaurants have asked about standing sourdough orders; today the only path is the
generic hello@ email buried in the footer.

## Scope

- A `#wholesale` section (or dedicated page if copy grows) describing the wholesale offer.
- A clear call-to-action email with subject pre-filled.

## Out Of Scope

- Pricing tables — wholesale pricing stays off the public site.
- Order management tooling.

## Implementation Plan

1. Draft wholesale copy (what we supply, minimum order, delivery radius).
2. Add the section to the homepage below "Our story", linked from the nav.
3. Pre-fill the mailto subject ("Wholesale enquiry — <business name>").
4. `npm run typecheck` + `npm run build`, PR, merge.

## Verification Plan

- Section renders with correct heading hierarchy.
- Mailto link opens with the pre-filled subject.
- Build passes.

## Completion Notes

Fill this in when the task is done.

- Outcome:
- Verification actually run:
- Documentation updated:
- Follow-up tasks created:

## Definition of Done Gate

1. Wholesale section live on the deployed site.
2. Framework build passes on the final commit.
