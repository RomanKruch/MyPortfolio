export const locales = ['uk', 'en'] as const;
export const defaultLocale = 'uk';
export type Locale = (typeof locales)[number];