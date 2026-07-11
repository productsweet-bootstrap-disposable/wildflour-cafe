# wildflour-cafe

A Astro 5 site, bootstrapped by Product Sweet (AI6P-249).

- **Live:** https://pending-first-deploy.example/
- **Framework:** Astro 5
- **Hosting:** AWS Amplify (account `874373490779`)
- **Managed by:** Product Sweet bootstrap (AI6P-249)

## Local development

```bash
npm ci
npm run dev      # local dev server
npm run build    # produce dist/ (deployable static output)
npm run preview  # serve the built output locally
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy-low.yml`, which builds the
site and triggers an AWS Amplify `RELEASE` job to the low environment. Higher
environments are promoted by the `promote-<env>.yml` workflows — dispatched by
the Product Sweet webapp with the reviewed commit pinned, never on push. PRs
are gated by the always-on `.github/workflows/pr-gate.yml` (the single required
status check). It classifies the diff in-job: changes only under `.agent/`,
`.kanban/`, or a root `*.md` run a fast content lane (lint + typecheck + test,
no build); anything else runs the full build lane.

## Replacing the hello-world content

This is a bootstrap-seeded hello-world site. Replace the contents of
`src/pages/` and `public/` with your own content. The seeded
"Replace the hello-world site with real content" task in `.kanban/backlog/`
walks the steps.
