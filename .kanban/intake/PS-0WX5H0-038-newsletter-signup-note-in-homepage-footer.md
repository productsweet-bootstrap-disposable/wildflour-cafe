---
title: Newsletter signup note in homepage footer
id: PS-0WX5H0-038
status: intake
template_type: feature-request
intake_state: ready-for-dev
delivery_task_ids: []
created: 2026-07-14
updated: 2026-07-14
priority: low
owner: AI agent + user
source: User request
tags: []
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Target User Or Audience

Homepage visitors / customers

## Desired Outcome

Visitors see a short invitation in the footer to join the mailing list for specials, and can email hello@wildflour.cafe via a mailto link to do so.

## Problem Or Opportunity

There is currently no way for homepage visitors to learn about or join the cafe's mailing list for specials.

## Scope

Add a short heading (e.g. "Join our mailing list") and one line of body text with a mailto:hello@wildflour.cafe link to the homepage footer, inviting customers to email in to join the mailing list for specials. No signup form, no backend/email-list integration — just a static note with a mailto link.

## Proposed Design / Approach

Add a small footer section/component with a heading and one line containing an `<a href="mailto:hello@wildflour.cafe">` link, styled per the site's existing footer treatment (no dividers/borders per design system; use tonal spacing).

## Verification Plan

Visual check: homepage footer shows heading + one line with mailto link; clicking/tapping the link opens the user's mail client addressed to hello@wildflour.cafe; footer renders correctly on mobile and desktop widths; no console errors.

## Questions

Optional at first intake. Fill this in during refinement before generating a dev task in `backlog`.

## Refinement Notes

Story is small, self-contained, and unambiguous — no open questions. Approved by requester to go straight to ready-for-dev with a linked implementation task.
