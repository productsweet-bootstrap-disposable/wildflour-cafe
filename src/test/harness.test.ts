// Harness check seeded by the AI6P-2113 backfill (AI6P-2190).
//
// Deliberately asserts nothing about this project's pages or components — it was
// added by a backfill that has never seen your code. Its job is to prove the
// harness itself works: vitest resolves, jsdom parses, and the DOM matchers are
// loaded.
//
// A test file is required for the gate to be green at all: `vitest run` exits
// non-zero when no test matches, so deleting this without replacing it turns your
// required check red.
//
// **Why there is no ambient `document`.** Astro renders on the server — a page is
// a string before it is ever a document — so the suite runs under
// `environment: 'node'` and constructs a DOM explicitly. That is not a
// workaround; switching to the jsdom environment breaks Astro page tests outright
// (see the note in vitest.config.ts). To test one of your own pages:
//
//     import { experimental_AstroContainer as AstroContainer } from 'astro/container';
//     import Page from '../pages/index.astro';
//     const container = await AstroContainer.create();
//     const doc = new JSDOM(await container.renderToString(Page)).window.document;
//
// **What jsdom cannot do:** there is no layout engine. Clipping, overflow,
// scrolling, element size and position all read as zero. Assert on content, roles
// and behaviour; verify anything geometric in a real browser.
import { getByRole } from '@testing-library/dom';
import { JSDOM } from 'jsdom';
import { describe, expect, it } from 'vitest';

describe('test harness', () => {
  it('parses markup into a queryable DOM', () => {
    const { document } = new JSDOM('<main><h1>ready</h1></main>').window;
    expect(document.querySelector('h1')?.textContent).toBe('ready');
  });

  it('computes accessible names, which needs a window on the document', () => {
    // `getByRole` resolves the accessible name through `window`. A document parsed
    // without one — `DOMParser`, for instance — throws "no window available", and
    // the failure reads as a broken query rather than a broken harness.
    const { document } = new JSDOM('<main><h1>ready</h1></main>').window;
    expect(getByRole(document.body, 'heading', { name: 'ready', level: 1 })).toBeDefined();
  });

  it('has the jest-dom matchers loaded', () => {
    const { document } = new JSDOM('<main><span>ready</span></main>').window;
    expect(document.querySelector('span')).toBeInTheDocument();
  });
});
