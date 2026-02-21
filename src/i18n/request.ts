import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { hasLocale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const common = (await import(`../messages/${locale}/common.json`)).default;
  const home = (await import(`../messages/${locale}/home.json`)).default;
  const about = (await import(`../messages/${locale}/about.json`)).default;
  const contact = (await import(`../messages/${locale}/contact.json`)).default;
  const modules = (await import(`../messages/${locale}/modules.json`)).default;
  const packages = (await import(`../messages/${locale}/packages.json`)).default;

  return {
    locale,
    messages: {
      common,
      home,
      about,
      contact,
      modules,
      packages,
    },
  };
});
