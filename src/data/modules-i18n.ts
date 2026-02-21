import { modulesBase, moduleTransportTypes, type TourModule, type TourModuleLocale, type CombinationLocale } from './modules-base';

export function getLocalizedModules(locale: string): TourModule[] {
  return modulesBase.map((base) => {
    let localeData: TourModuleLocale;
    try {
      localeData = require(`../messages/${locale}/module-data/${base.slug}.json`);
    } catch {
      localeData = require(`../messages/en/module-data/${base.slug}.json`);
    }

    return {
      slug: base.slug,
      emoji: base.emoji,
      moduleCode: base.moduleCode,
      heroImage: base.heroImage,
      cardImage: base.cardImage,
      tags: base.tags,
      name: localeData.name,
      nameKr: localeData.nameKr,
      duration: localeData.duration,
      cities: localeData.cities,
      priceMin4: localeData.priceMin4,
      priceMin20: localeData.priceMin20,
      accommodation: localeData.accommodation,
      transport: {
        transportType: moduleTransportTypes[base.slug] ?? 'bus',
        ...localeData.transport,
      },
      itinerary: base.itinerary.map((dayBase, dayIdx) => ({
        day: dayBase.day,
        image: dayBase.image,
        theme: localeData.itinerary[dayIdx]?.theme ?? '',
        schedule: dayBase.schedule.map((schedBase, schedIdx) => ({
          timeOfDay: schedBase.timeOfDay,
          image: schedBase.image,
          time: localeData.itinerary[dayIdx]?.schedule[schedIdx]?.time ?? '',
          place: localeData.itinerary[dayIdx]?.schedule[schedIdx]?.place ?? '',
          description: localeData.itinerary[dayIdx]?.schedule[schedIdx]?.description ?? '',
        })),
      })),
      attractions: base.attractions.map((attrBase, idx) => ({
        included: attrBase.included,
        image: attrBase.image,
        name: localeData.attractions[idx]?.name ?? '',
        fee: localeData.attractions[idx]?.fee ?? '',
        feature: localeData.attractions[idx]?.feature ?? '',
      })),
      food: base.food.map((foodBase, idx) => ({
        image: foodBase.image,
        name: localeData.food[idx]?.name ?? '',
        place: localeData.food[idx]?.place ?? '',
        price: localeData.food[idx]?.price ?? '',
      })),
      note: localeData.note,
    };
  });
}

export function getLocalizedModule(slug: string, locale: string): TourModule | undefined {
  const allModules = getLocalizedModules(locale);
  return allModules.find((m) => m.slug === slug);
}

export function getLocalizedCombinations(locale: string): CombinationLocale[] {
  try {
    return require(`../messages/${locale}/module-data/combinations.json`);
  } catch {
    return require('../messages/en/module-data/combinations.json');
  }
}

// Re-export base utilities
export { getTimeColor, getTransportIcon, modulesBase } from './modules-base';
export type { TourModule, TransportType, TimeOfDay } from './modules-base';
