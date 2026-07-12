/**
 * Site-wide content configuration.
 *
 * `todaysSpecial` drives the homepage "Today's Special" banner rendered
 * directly under the hero section. Set it to an empty string to hide the
 * banner entirely (no layout is reserved when empty).
 */
export interface SiteConfig {
  todaysSpecial: string;
}

export const siteConfig: SiteConfig = {
  todaysSpecial: 'Lemon & thyme scones — fresh from 7am',
};
