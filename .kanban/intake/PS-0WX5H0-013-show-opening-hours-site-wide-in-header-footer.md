---
title: Show opening hours site-wide in header/footer
id: PS-0WX5H0-013
status: intake
template_type: user-story
intake_state: ready-for-dev
delivery_task_ids:
  - PS-0WX5H0-015
created: 2026-07-11
updated: 2026-07-11
priority: medium
owner: AI agent + user
source: Customer emails asking when we're open
tags:
  - content
  - frontend
depends_on: []
related_files: []
comments: 0
attachments: 0
---
## Summary

As a Prospective and existing customers visiting the website, I want See our opening hours immediately without emailing to ask, so that Opening hours are visible site-wide (header or footer) including on the homepage, and are easy for the team to update without a full code review of layout logic.

## User Type

Prospective and existing customers visiting the website

## User Need

See our opening hours immediately without emailing to ask

## Expected Outcome

Opening hours are visible site-wide (header or footer) including on the homepage, and are easy for the team to update without a full code review of layout logic

## Problem Or Opportunity

Customers repeatedly email asking when the business is open because hours are not shown anywhere on the site, creating avoidable support load.

## Scope

Add a standard weekly opening-hours display (e.g. Mon-Fri / weekend hours) shown site-wide via the global header or footer, so it appears on the homepage and every other page. Holiday/special-hours overrides are explicitly out of scope for this iteration.

## Proposed Design / Approach

Store hours as data in a single, obviously-located source file in the repo (e.g. src/data/hours.ts) that the header/footer component reads and renders. No CMS integration for this iteration — editing means updating that one data file and deploying.

## Verification Plan

- Homepage renders opening hours in the header or footer.
- At least one other page renders the same hours via the shared header/footer component.
- Updating the values in the data file and redeploying changes the displayed hours without touching component logic.
- Confirm display matches design system tokens/rules (no line-border violations, correct typography scale).

## Questions

Optional at first intake. Fill this in before generating a dev task in `backlog`.

## Refinement Notes

Optional at first intake. Fill this in before generating a dev task in `backlog`.
