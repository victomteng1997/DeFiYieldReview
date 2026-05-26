// SITE.url is the site ORIGIN only (no path). The base path is configured in
// astro.config.mjs and applied at use time via link()/absoluteUrl() in
// src/lib/path.ts. Keep this in sync with the SITE_URL in astro.config.mjs.
export const SITE = {
  url: import.meta.env.SITE ?? 'https://victomteng1997.github.io',
  title: 'DeFi Yield Review',
  tagline:
    'DeFi yield platforms reviewed for risk, transparency, and real utility. / Plataformas de rendimento DeFi analisadas por risco, transparência e utilidade real.',
  description:
    'Independent DeFi yield reviews covering lending protocols, liquid staking, vaults, stablecoin yield, smart contract risk, liquidity, and protocol transparency. Também publicamos análises em português para leitores que querem comparar rendimento, custódia, liquidez e risco operacional.',
  author: {
    name: 'Gelei',
    aboutPath: '/about',
    email: 'gelei@quantstamp.com',
    sameAs: [] as string[],
  },
  locale: 'pt_BR',
  defaultOgImage: '/og-default.png',
  cloudflareAnalyticsToken: '',
  navLinks: [
    { label: 'Reviews / Análises', href: '/reviews' },
    { label: 'About / Sobre', href: '/about' },
    { label: 'RSS', href: '/rss.xml' },
  ] as const,
} as const;
