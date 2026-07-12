---
title: Implement homepage FAQ section
id: PS-0WX5H0-019
status: doing
template_type: implementation-task
source_intake_id: PS-0WX5H0-017
created: 2026-07-11
updated: 2026-07-12
priority: medium
owner: AI agent + user
tags:
  - website
  - content
  - homepage
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Add a four-question FAQ section to the homepage, placed between the "Visit us" section and the footer, per PS-0WX5H0-017.

## Problem Or Opportunity

Customers repeatedly ask the same four questions (bookings, gluten-free, whole cakes, parking) via phone/email/in person. Surfacing the answers on the homepage should reduce repetitive enquiries.

## Scope

Homepage only. New FAQ section placed between the existing "Visit us" section and the footer. Exactly four Q&A pairs, using the standard site design system (typography, spacing, surface tokens) — no new components beyond a simple Q&A list/accordion consistent with existing card/list styling (no divider lines per design system; use whitespace or background tint separation).

Content (final, do not change):
1. Q: Do you take bookings? A: No — walk-in only.
2. Q: Do you have gluten-free options? A: Yes — a rotating gluten-free cabinet option available daily (note: this does not include the bread).
3. Q: Can we order whole cakes? A: Yes — whole cakes are available with 3 days' notice, ordered via email.
4. Q: Where can we park? A: Street parking on Aro St is limited; the Willis St car park is about a 5 minute walk away.

## Proposed Design / Approach

Add a static FAQ section component to the homepage template, positioned after "Visit us" and before the footer. Follow the design system: no 1px borders between items, use spacing-4/whitespace or alternating surface tints to separate the four Q&A pairs, left-aligned text, standard heading + body typography scale.

## Verification Plan

- Homepage renders a new FAQ section positioned between "Visit us" and the footer, on both desktop and mobile viewports.
- All four Q&A pairs appear with the exact copy specified above, in order.
- Section styling matches the design system (no hard borders/dividers, left-aligned, consistent with existing typography/spacing tokens).
- No regressions to the "Visit us" section or footer layout/content.

## Completion Notes

- Outcome: Implemented FAQ section in `src/pages/index.astro`, positioned between "Visit us" and the footer, using the exact copy specified (bookings, gluten-free, whole cakes, parking). Styled per design system: no hard divider lines, alternating surface tint (`--flour`) for separation, left-aligned text, consistent typography/spacing with existing sections.
- PR: https://github.com/productsweet-bootstrap-disposable/wildflour-cafe/pull/7 (branch `feature/PS-0WX5H0-019`), merged to `main` via commit `2debeda8a36fde406b97c65c08681d309d83da9c`.
- Verification actually run: PR CI (`pr-gate`) passed; PR merged; deploy-low succeeded and the FAQ section is confirmed live on the homepage in production.
- Documentation updated: None required — content/UI-only change.
- Follow-up tasks created: None.
