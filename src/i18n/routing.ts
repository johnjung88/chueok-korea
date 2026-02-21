import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ko', 'si'],
  defaultLocale: 'en',
});
