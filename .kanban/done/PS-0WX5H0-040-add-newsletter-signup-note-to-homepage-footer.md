---
title: Add newsletter signup note to homepage footer
id: PS-0WX5H0-040
status: done
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

## Completion Notes

- AI6P-1901 webhook: merged via PR #14; card relocated to `done/` on the default branch (session-independent close-out).

- Outcome: Implemented per plan. Added a "Join our mailing list" heading and one-line mailto invitation (`hello@wildflour.cafe`) to the shared footer in `src/layouts/Base.astro`, using existing footer typography/spacing tokens, no divider lines/borders added.
- PR: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/14 (branch `feature/PS-0WX5H0-040`, head `1f9c9454112e69e4e105437fce5920ba1ecc399f`)
- Verification actually run: PR CI (`pr-gate` check) was in_progress at last poll (3 polls this session) — not yet confirmed green. Self-armed wake automation is disabled for this org, so a fresh session cannot be auto-woken on completion; a human or follow-up session must poll `repo.poll-actions-status` for PR #14 and confirm green before merge.
- Manual visual/mail-client checks from the Verification Plan (heading+line rendering at mobile/desktop widths, mailto opens mail client, no console errors) have not been run live — CI's build step is the only verification available from this session per the offline verification tier.
- Documentation updated: none required (footer-only content change, no architecture/doc impact).
- Follow-up tasks created: none — recommend a human confirm CI green on PR #14 and merge when ready; task should move to `done` only after that merge lands (do not merge from an agent session).
