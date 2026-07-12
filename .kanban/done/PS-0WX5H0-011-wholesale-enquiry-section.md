---
title: Wholesale Enquiry Section
id: PS-0WX5H0-011
status: done
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

- Outcome: Added a `#wholesale` section to `src/pages/index.astro` between "Visit us" and "FAQ" describing the wholesale offer (standing weekly orders, 6-loaf minimum, pickup/delivery by arrangement) with a `mailto:hello@wildflourcafe.nz?subject=Wholesale%20enquiry` CTA. Removed the redundant wholesale mention from the "Visit us" email line since it now has its own section.
- Verification actually run: PR #9 CI (`pr-gate`) was green on head commit 7458e3b. Merged (squash) into `main` as commit da09d57a at 2026-07-12T03:46:01Z. Confirmed via `repo.get-commit(da09d57a)` — message "Add wholesale enquiry section (PS-0WX5H0-011) (#9)", touching `src/pages/index.astro`. Deploy-low workflow on main succeeded per human confirmation; wholesale section is live on the deployed site.
- Documentation updated: none required beyond the task file itself; no architecture/C4 impact (content-only change to an existing Astro page).
- Follow-up tasks created: none.
- Merged PR: #9 (https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/9), commit da09d57a
- Reviewed by: `pr-gate` CI check (green) + human merge

## Definition of Done Gate

1. Wholesale section live on the deployed site.
2. Framework build passes on the final commit.
