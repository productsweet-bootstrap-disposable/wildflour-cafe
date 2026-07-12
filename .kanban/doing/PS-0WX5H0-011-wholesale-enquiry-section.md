---
title: Wholesale Enquiry Section
id: PS-0WX5H0-011
status: doing
template_type: implementation-task
created: 2026-07-11
updated: 2026-07-12
priority: low
owner: Wildflour Café
source: Two local restaurants asked about standing bread orders
tags:
  - content
  - wholesale
depends_on: []
related_files:
  - src/pages/index.astro
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

- Outcome: Added a `#wholesale` section to `src/pages/index.astro` between "Visit us" and "FAQ" describing the wholesale offer (standing weekly orders, 6-loaf minimum, pickup/delivery by arrangement) with a `mailto:hello@wildflourcafe.nz?subject=Wholesale%20enquiry` CTA. Removed the redundant wholesale mention from the "Visit us" email line since it now has its own section. Also removed a stale duplicate kanban file `.kanban/doing/PS-0WX5H0-019-implement-homepage-faq-section.md` (already completed and present in `.kanban/done/`) that was failing the repo's duplicate-task-id CI check on the branch.
- Verification actually run: PR #9 CI (`pr-gate`) is green on head commit 7458e3baba1062718733d73a2c6cea4b36b131b2. No local test execution is available to this agent — GitHub Actions CI on the PR is the verification. Section renders with proper `<h2>Wholesale</h2>` heading hierarchy consistent with sibling sections; mailto CTA has pre-filled subject `Wholesale%20enquiry`; build passes as part of `pr-gate`.
- Documentation updated: none required beyond the task file itself; no architecture/C4 impact (content-only change to an existing Astro page).
- Follow-up tasks created: none. PR: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/9 — not merged; awaiting human merge per Definition of Done gate.

## Definition of Done Gate

1. Wholesale section live on the deployed site.
2. Framework build passes on the final commit.
