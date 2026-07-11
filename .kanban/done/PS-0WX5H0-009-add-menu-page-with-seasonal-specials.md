---
title: "Add Menu Page With Seasonal Specials"
id: "PS-0WX5H0-009"
status: done
template_type: implementation-task
created: "2026-07-11"
updated: "2026-07-11"
priority: medium
owner: "Wildflour Café"
source: "Content plan — first real site build"
tags:
  - "content"
  - "menu"
related_files:
  - "src/pages/menu.astro"
comments: 0
attachments: 0
---

## Summary

Add a dedicated `/menu` page — coffee list, daily cabinet, and lunch — so customers can see
today's offer without phoning the counter. Linked from the homepage hero CTA and the main nav.

## Scope

- New `src/pages/menu.astro` rendering three sections: Coffee, From the cabinet, Lunch.
- Prices in NZD, dotted-leader layout, dietaries note.
- Nav highlight for the active page.

## Out Of Scope

- Online ordering (captured separately as an intake item).
- CMS-backed menu editing — the menu is markdown-adjacent source for now.

## Implementation Plan

1. Build the shared `Base.astro` layout (header, nav, footer).
2. Author `menu.astro` with the three menu sections as data arrays.
3. Wire the homepage CTA and nav links.
4. Verify locally with `npm run dev`, then `npm run build`.

## Verification Plan

- `npm run build` passes.
- `/menu` renders all three sections with correct prices.
- Nav marks Menu as the current page.

## Completion Notes

- Outcome: `/menu` live with Coffee, Cabinet, and Lunch sections; homepage CTA links to it.
- Verification actually run: `npm run typecheck` + `npm run build` green locally and in `pr-gate`;
  page verified on the deployed site after `deploy-low`.
- Documentation updated: `.agent/current-state.md` Shipped Capabilities.
- Follow-up tasks created: PS-0WX5H0-010 (online ordering, intake).

## Definition of Done Gate

1. `/menu` is reachable from the homepage and nav.
2. Framework build passes on the final commit.
