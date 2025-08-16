export const routes = {
  tr: {
    home: '',
    corporate: 'hakkimizda',
    products: 'urunler',
    references: 'referanslar',
    contact: 'iletisim'
  },
  en: {
    home: '',
    corporate: 'about',
    products: 'products',
    references: 'references',
    contact: 'contact'
  }
} as const;

export type RouteKey = keyof typeof routes.en;

export function getLocalizedPath(locale: string, key: RouteKey): string {
  return routes[locale as keyof typeof routes][key];
} 