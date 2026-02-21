export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night' | 'dawn';
export type TransportType = 'ktx' | 'bus' | 'pickup' | 'flight' | 'ferry';

export interface DayScheduleItemBase {
  timeOfDay: TimeOfDay;
  image: string;
}

export interface DayItineraryBase {
  day: number;
  image: string;
  schedule: DayScheduleItemBase[];
}

export interface AttractionBase {
  included: boolean;
  image: string;
}

export interface FoodItemBase {
  image: string;
}

export interface TransportInfoBase {
  transportType: TransportType;
}

export interface TourModuleBase {
  slug: string;
  emoji: string;
  moduleCode: string;
  heroImage: string;
  cardImage: string;
  tags: string[];
  itinerary: DayItineraryBase[];
  attractions: AttractionBase[];
  food: FoodItemBase[];
}

// Locale-specific data types (loaded from JSON)
export interface DayScheduleItemLocale {
  time: string;
  place: string;
  description: string;
}

export interface DayItineraryLocale {
  theme: string;
  schedule: DayScheduleItemLocale[];
}

export interface AttractionLocale {
  name: string;
  fee: string;
  feature: string;
}

export interface FoodItemLocale {
  name: string;
  place: string;
  price: string;
}

export interface TransportInfoLocale {
  from: string;
  method: string;
  duration: string;
  cost: string;
}

export interface TourModuleLocale {
  name: string;
  nameKr: string;
  duration: string;
  cities: string;
  priceMin4: string;
  priceMin20: string;
  accommodation: string;
  transport: TransportInfoLocale;
  itinerary: DayItineraryLocale[];
  attractions: AttractionLocale[];
  food: FoodItemLocale[];
  note: string;
}

// Merged type used by pages
export interface DayScheduleItem {
  timeOfDay: TimeOfDay;
  time: string;
  place: string;
  description: string;
  image: string;
}

export interface DayItinerary {
  day: number;
  theme: string;
  image: string;
  schedule: DayScheduleItem[];
}

export interface Attraction {
  name: string;
  fee: string;
  feature: string;
  included: boolean;
  image: string;
}

export interface FoodItem {
  name: string;
  place: string;
  price: string;
  image: string;
}

export interface TransportInfo {
  transportType: TransportType;
  from: string;
  method: string;
  duration: string;
  cost: string;
}

export interface TourModule {
  slug: string;
  emoji: string;
  moduleCode: string;
  name: string;
  nameKr: string;
  duration: string;
  cities: string;
  priceMin4: string;
  priceMin20: string;
  accommodation: string;
  transport: TransportInfo;
  heroImage: string;
  cardImage: string;
  tags: string[];
  itinerary: DayItinerary[];
  attractions: Attraction[];
  food: FoodItem[];
  note: string;
}

export interface CombinationLocale {
  badge: string;
  badgeColor: string;
  title: string;
  regions: string;
  duration: string;
  description: string;
}

export const timeColors: Record<TimeOfDay, string> = {
  morning: "bg-[#7a9e7e] text-white",
  afternoon: "bg-[#c9a84c] text-[#1a1208]",
  evening: "bg-[#c0392b] text-white",
  night: "bg-[#1a1208] text-[#e8d5a3]",
  dawn: "bg-[#8c7b6b] text-white",
};

export function getTimeColor(timeOfDay: TimeOfDay): string {
  return timeColors[timeOfDay] || "bg-[#8c7b6b] text-white";
}

export function getTransportIcon(transportType: TransportType): string {
  switch (transportType) {
    case 'ktx': return "🚄";
    case 'flight': return "✈️";
    case 'bus': return "🚌";
    case 'pickup': return "🚐";
    case 'ferry': return "⛴";
    default: return "🚌";
  }
}

// Base data: locale-neutral fields only
export const modulesBase: TourModuleBase[] = [
  {
    slug: "seoul",
    emoji: "🏙",
    moduleCode: "Module A",
    heroImage: "/images/seoul/hero.jpg",
    cardImage: "/images/seoul/card.jpg",
    tags: ["Gyeongbokgung", "Myeongdong", "Hongdae", "Lotte Tower", "K-Culture", "Halal Friendly", "Hanbok", "DDP"],
    itinerary: [
      {
        day: 1,
        image: "/images/seoul/day1.jpg",
        schedule: [
          { timeOfDay: "afternoon", image: "/images/seoul/airport.jpg" },
          { timeOfDay: "evening", image: "/images/seoul/myeongdong.jpg" },
          { timeOfDay: "night", image: "/images/seoul/namsan-tower.jpg" },
        ],
      },
      {
        day: 2,
        image: "/images/seoul/day2.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/seoul/gyeongbokgung.jpg" },
          { timeOfDay: "morning", image: "/images/seoul/palace-museum.jpg" },
          { timeOfDay: "afternoon", image: "/images/seoul/bukchon.jpg" },
          { timeOfDay: "afternoon", image: "/images/seoul/insadong.jpg" },
          { timeOfDay: "evening", image: "/images/seoul/gwangjang.jpg" },
          { timeOfDay: "night", image: "/images/seoul/cheonggyecheon.jpg" },
        ],
      },
      {
        day: 3,
        image: "/images/seoul/day3.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/seoul/lotte-tower.jpg" },
          { timeOfDay: "afternoon", image: "/images/seoul/coex.jpg" },
          { timeOfDay: "afternoon", image: "/images/seoul/hongdae.jpg" },
          { timeOfDay: "evening", image: "/images/seoul/hangang-cruise.jpg" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/seoul/gyeongbokgung.jpg" },
      { included: true, image: "/images/seoul/palace-museum.jpg" },
      { included: true, image: "/images/seoul/bukchon.jpg" },
      { included: true, image: "/images/seoul/insadong.jpg" },
      { included: true, image: "/images/seoul/gwangjang.jpg" },
      { included: true, image: "/images/seoul/namsan-tower.jpg" },
      { included: true, image: "/images/seoul/lotte-tower.jpg" },
      { included: true, image: "/images/seoul/coex.jpg" },
      { included: false, image: "/images/seoul/ddp.jpg" },
      { included: false, image: "/images/seoul/lotte-world.jpg" },
      { included: false, image: "/images/seoul/hybe.jpg" },
      { included: false, image: "/images/seoul/hanbok.jpg" },
      { included: false, image: "/images/seoul/hangang-cruise.jpg" },
      { included: false, image: "/images/seoul/dmz.jpg" },
      { included: false, image: "/images/seoul/garosu.jpg" },
    ],
    food: [
      { image: "/images/seoul/food-bbq.jpg" },
      { image: "/images/seoul/food-kampungku.jpg" },
      { image: "/images/seoul/food-halal-korean.jpg" },
      { image: "/images/seoul/food-street.jpg" },
      { image: "/images/seoul/food-gwangjang.jpg" },
      { image: "/images/seoul/food-coex.jpg" },
      { image: "/images/seoul/food-chicken.jpg" },
      { image: "/images/seoul/food-hanwoo.jpg" },
    ],
  },
  {
    slug: "metropolitan",
    emoji: "🏯",
    moduleCode: "Module B",
    heroImage: "/images/metropolitan/hero.jpg",
    cardImage: "/images/metropolitan/card.jpg",
    tags: ["Nami Island", "Suwon Fortress", "Korean Folk Village", "Gapyeong Rail Bike", "Incheon Wolmido"],
    itinerary: [
      {
        day: 1,
        image: "/images/metropolitan/day1.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/metropolitan/bus.jpg" },
          { timeOfDay: "morning", image: "/images/metropolitan/hwaseong.jpg" },
          { timeOfDay: "afternoon", image: "/images/metropolitan/korean-folk-village.jpg" },
          { timeOfDay: "afternoon", image: "/images/metropolitan/science-museum.jpg" },
          { timeOfDay: "evening", image: "/images/metropolitan/food-galbi.jpg" },
        ],
      },
      {
        day: 2,
        image: "/images/metropolitan/day2.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/metropolitan/gapyeong-railbike.jpg" },
          { timeOfDay: "morning", image: "/images/metropolitan/nami-island.jpg" },
          { timeOfDay: "afternoon", image: "/images/metropolitan/morning-calm.jpg" },
          { timeOfDay: "afternoon", image: "/images/metropolitan/gapyeong-resort.jpg" },
          { timeOfDay: "evening", image: "/images/metropolitan/food-dakgalbi.jpg" },
        ],
      },
      {
        day: 3,
        image: "/images/metropolitan/day3.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/metropolitan/chinatown.jpg" },
          { timeOfDay: "morning", image: "/images/metropolitan/wolmido.jpg" },
          { timeOfDay: "afternoon", image: "/images/metropolitan/songdo.jpg" },
          { timeOfDay: "afternoon", image: "/images/metropolitan/bus.jpg" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/metropolitan/hwaseong.jpg" },
      { included: true, image: "/images/metropolitan/korean-folk-village.jpg" },
      { included: true, image: "/images/metropolitan/nami-island.jpg" },
      { included: true, image: "/images/metropolitan/gapyeong-railbike.jpg" },
      { included: true, image: "/images/metropolitan/morning-calm.jpg" },
      { included: true, image: "/images/metropolitan/science-museum.jpg" },
      { included: true, image: "/images/metropolitan/wolmido.jpg" },
      { included: true, image: "/images/metropolitan/chinatown.jpg" },
      { included: false, image: "/images/metropolitan/petite-france.jpg" },
      { included: false, image: "/images/metropolitan/everland.jpg" },
    ],
    food: [
      { image: "/images/metropolitan/food-galbi.jpg" },
      { image: "/images/metropolitan/food-dakgalbi.jpg" },
      { image: "/images/metropolitan/food-jjajangmyeon.jpg" },
      { image: "/images/metropolitan/food-makguksu.jpg" },
    ],
  },
  {
    slug: "chungcheong",
    emoji: "⛩",
    moduleCode: "Module C",
    heroImage: "/images/chungcheong/hero.jpg",
    cardImage: "/images/chungcheong/card.jpg",
    tags: ["Gongju UNESCO", "Baekje History", "Buyeo Fortress", "Daejeon", "Gyeryongsan", "Hot Springs"],
    itinerary: [
      {
        day: 1,
        image: "/images/chungcheong/day1.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/chungcheong/ktx.jpg" },
          { timeOfDay: "morning", image: "/images/chungcheong/gongsanseong.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/royal-tombs.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/gongju-museum.jpg" },
          { timeOfDay: "evening", image: "/images/chungcheong/food-hanjeongsik.jpg" },
        ],
      },
      {
        day: 2,
        image: "/images/chungcheong/day2.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/chungcheong/busosanseong.jpg" },
          { timeOfDay: "morning", image: "/images/chungcheong/jeongnimsa.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/buyeo-museum.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/gungnamji.jpg" },
          { timeOfDay: "evening", image: "/images/chungcheong/food-yeonipbap.jpg" },
        ],
      },
      {
        day: 3,
        image: "/images/chungcheong/day3.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/chungcheong/gapsa.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/hot-spring.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/sungsimdang.jpg" },
          { timeOfDay: "afternoon", image: "/images/chungcheong/ktx.jpg" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/chungcheong/gongsanseong.jpg" },
      { included: true, image: "/images/chungcheong/royal-tombs.jpg" },
      { included: true, image: "/images/chungcheong/gongju-museum.jpg" },
      { included: true, image: "/images/chungcheong/busosanseong.jpg" },
      { included: true, image: "/images/chungcheong/jeongnimsa.jpg" },
      { included: true, image: "/images/chungcheong/buyeo-museum.jpg" },
      { included: true, image: "/images/chungcheong/gungnamji.jpg" },
      { included: true, image: "/images/chungcheong/gapsa.jpg" },
      { included: true, image: "/images/chungcheong/hot-spring.jpg" },
      { included: false, image: "/images/chungcheong/mud-festival.jpg" },
      { included: false, image: "/images/chungcheong/sejong-garden.jpg" },
      { included: false, image: "/images/chungcheong/independence-hall.jpg" },
    ],
    food: [
      { image: "/images/chungcheong/food-hanjeongsik.jpg" },
      { image: "/images/chungcheong/food-yeonipbap.jpg" },
      { image: "/images/chungcheong/sungsimdang.jpg" },
      { image: "/images/chungcheong/food-kalguksu.jpg" },
    ],
  },
  {
    slug: "gyeongsang",
    emoji: "🌊",
    moduleCode: "Module D",
    heroImage: "/images/gyeongsang/hero.jpg",
    cardImage: "/images/gyeongsang/card.jpg",
    tags: ["Busan Beach", "Gamcheon Village", "Gyeongju UNESCO", "Haedong Yonggungsa", "Taejongdae", "Andong Hahoe"],
    itinerary: [
      {
        day: 1,
        image: "/images/gyeongsang/day1.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/gyeongsang/ktx.jpg" },
          { timeOfDay: "morning", image: "/images/gyeongsang/haedong-yonggungsa.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/haeundae.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/jagalchi.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/taejongdae.jpg" },
          { timeOfDay: "evening", image: "/images/gyeongsang/gwangalli-bridge.jpg" },
        ],
      },
      {
        day: 2,
        image: "/images/gyeongsang/day2.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/gyeongsang/gamcheon.png" },
          { timeOfDay: "morning", image: "/images/gyeongsang/hwanyeoul.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/gukje-market.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/songdo-skywalk.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/yongdusan.jpg" },
          { timeOfDay: "evening", image: "/images/gyeongsang/food-dwaeji-gukbap.jpg" },
        ],
      },
      {
        day: 3,
        image: "/images/gyeongsang/day3.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/gyeongsang/bulguksa.jpg" },
          { timeOfDay: "morning", image: "/images/gyeongsang/seokguram.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/yangdong.jpg" },
          { timeOfDay: "afternoon", image: "/images/gyeongsang/daereungwon.jpg" },
          { timeOfDay: "night", image: "/images/gyeongsang/donggung.jpg" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/gyeongsang/haedong-yonggungsa.jpg" },
      { included: true, image: "/images/gyeongsang/haeundae.jpg" },
      { included: true, image: "/images/gyeongsang/taejongdae.jpg" },
      { included: true, image: "/images/gyeongsang/gamcheon.png" },
      { included: true, image: "/images/gyeongsang/hwanyeoul.jpg" },
      { included: true, image: "/images/gyeongsang/songdo-skywalk.jpg" },
      { included: true, image: "/images/gyeongsang/yongdusan.jpg" },
      { included: true, image: "/images/gyeongsang/bulguksa.jpg" },
      { included: true, image: "/images/gyeongsang/seokguram.jpg" },
      { included: true, image: "/images/gyeongsang/yangdong.jpg" },
      { included: true, image: "/images/gyeongsang/daereungwon.jpg" },
      { included: true, image: "/images/gyeongsang/donggung.jpg" },
      { included: false, image: "/images/gyeongsang/hahoe.jpg" },
    ],
    food: [
      { image: "/images/gyeongsang/food-hoe.jpg" },
      { image: "/images/gyeongsang/food-dwaeji-gukbap.jpg" },
      { image: "/images/gyeongsang/food-ssiat-hotteok.jpg" },
      { image: "/images/gyeongsang/food-milmyeon.jpg" },
      { image: "/images/gyeongsang/food-hwangnam-bread.jpg" },
    ],
  },
  {
    slug: "jeolla",
    emoji: "🌿",
    moduleCode: "Module E",
    heroImage: "/images/jeolla/hero.jpg",
    cardImage: "/images/jeolla/card.jpg",
    tags: ["Jeonju Hanok", "Yeosu Night Sea", "Korean Cuisine", "Suncheon Garden", "Damyang Bamboo", "Boseong Tea"],
    itinerary: [
      {
        day: 1,
        image: "/images/jeolla/day1.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/jeolla/ktx.jpg" },
          { timeOfDay: "morning", image: "/images/jeolla/jeonju-hanok.jpg" },
          { timeOfDay: "afternoon", image: "/images/jeolla/gyeonggijeon.jpg" },
          { timeOfDay: "afternoon", image: "/images/jeolla/jeonju-alley.jpg" },
          { timeOfDay: "evening", image: "/images/jeolla/food-bibimbap.jpg" },
        ],
      },
      {
        day: 2,
        image: "/images/jeolla/day2.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/jeolla/suncheon-garden.jpg" },
          { timeOfDay: "morning", image: "/images/jeolla/suncheon-wetland.jpg" },
          { timeOfDay: "afternoon", image: "/images/jeolla/naganeupseong.jpg" },
          { timeOfDay: "evening", image: "/images/jeolla/yeosu-cablecar.jpg" },
        ],
      },
      {
        day: 3,
        image: "/images/jeolla/day3.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/jeolla/odongdo.jpg" },
          { timeOfDay: "morning", image: "/images/jeolla/yeosu-cablecar.jpg" },
          { timeOfDay: "afternoon", image: "/images/jeolla/food-galchi.jpg" },
          { timeOfDay: "night", image: "/images/jeolla/dolsan-night.jpg" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/jeolla/jeonju-hanok.jpg" },
      { included: true, image: "/images/jeolla/gyeonggijeon.jpg" },
      { included: true, image: "/images/jeolla/suncheon-garden.jpg" },
      { included: true, image: "/images/jeolla/naganeupseong.jpg" },
      { included: true, image: "/images/jeolla/yeosu-cablecar.jpg" },
      { included: true, image: "/images/jeolla/odongdo.jpg" },
      { included: false, image: "/images/jeolla/damyang-bamboo.jpg" },
      { included: false, image: "/images/jeolla/boseong-greentea.jpg" },
      { included: false, image: "/images/jeolla/gwangju-memorial.jpg" },
    ],
    food: [
      { image: "/images/jeolla/food-bibimbap.jpg" },
      { image: "/images/jeolla/food-makgeolli.jpg" },
      { image: "/images/jeolla/food-galchi.jpg" },
      { image: "/images/jeolla/food-hanjeongsik.jpg" },
      { image: "/images/jeolla/food-pocha.jpg" },
    ],
  },
  {
    slug: "gangwon",
    emoji: "⛰",
    moduleCode: "Module F",
    heroImage: "/images/gangwon/hero.jpg",
    cardImage: "/images/gangwon/card.jpg",
    tags: ["Seoraksan", "Gangneung Coffee", "East Sea Beach", "Naksansa Temple", "Jumunjin Port", "Pyeongchang Olympic", "Winter Ski"],
    itinerary: [
      {
        day: 1,
        image: "/images/gangwon/day1.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/gangwon/ktx.jpg" },
          { timeOfDay: "morning", image: "/images/gangwon/seoraksan.jpg" },
          { timeOfDay: "afternoon", image: "/images/gangwon/naksansa.jpg" },
          { timeOfDay: "evening", image: "/images/gangwon/sokcho-market.jpg" },
        ],
      },
      {
        day: 2,
        image: "/images/gangwon/day2.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/gangwon/jumunjin.jpg" },
          { timeOfDay: "morning", image: "/images/gangwon/anmok-coffee.jpg" },
          { timeOfDay: "afternoon", image: "/images/gangwon/chodang-sundubu.jpg" },
          { timeOfDay: "afternoon", image: "/images/gangwon/gyeongpo.jpg" },
          { timeOfDay: "evening", image: "/images/gangwon/jeongdongjin.jpg" },
        ],
      },
      {
        day: 3,
        image: "/images/gangwon/day3.jpg",
        schedule: [
          { timeOfDay: "morning", image: "/images/gangwon/ojukheon.jpg" },
          { timeOfDay: "morning", image: "/images/gangwon/pyeongchang-olympic.jpg" },
          { timeOfDay: "afternoon", image: "/images/gangwon/ktx.jpg" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/gangwon/seoraksan.jpg" },
      { included: true, image: "/images/gangwon/naksansa.jpg" },
      { included: true, image: "/images/gangwon/sokcho-market.jpg" },
      { included: true, image: "/images/gangwon/jumunjin.jpg" },
      { included: true, image: "/images/gangwon/anmok-coffee.jpg" },
      { included: true, image: "/images/gangwon/gyeongpo.jpg" },
      { included: true, image: "/images/gangwon/jeongdongjin.jpg" },
      { included: true, image: "/images/gangwon/ojukheon.jpg" },
      { included: true, image: "/images/gangwon/pyeongchang-olympic.jpg" },
      { included: false, image: "/images/gangwon/yongpyeong-ski.jpg" },
      { included: false, image: "/images/gangwon/chuncheon-nami.jpg" },
    ],
    food: [
      { image: "/images/gangwon/food-daege.jpg" },
      { image: "/images/gangwon/food-ojingeo.jpg" },
      { image: "/images/gangwon/food-sundubu.jpg" },
      { image: "/images/gangwon/food-coffee.jpg" },
    ],
  },
  {
    slug: "jeju",
    emoji: "🌺",
    moduleCode: "Module G",
    heroImage: "/images/jeju/hero.png",
    cardImage: "/images/jeju/card.png",
    tags: ["Seongsan Ilchulbong", "Udo Island", "Manjanggul Cave", "Black Pork BBQ", "Honeymoon", "O'sulloc Tea", "Hallim Park", "Seasonal Flowers"],
    itinerary: [
      {
        day: 1,
        image: "/images/jeju/day1.png",
        schedule: [
          { timeOfDay: "morning", image: "/images/jeju/airport.png" },
          { timeOfDay: "morning", image: "/images/jeju/seongsan.png" },
          { timeOfDay: "afternoon", image: "/images/jeju/udo.png" },
          { timeOfDay: "afternoon", image: "/images/jeju/cheonjiyeon.png" },
          { timeOfDay: "evening", image: "/images/jeju/food-heukdwaeji.png" },
        ],
      },
      {
        day: 2,
        image: "/images/jeju/day2.png",
        schedule: [
          { timeOfDay: "dawn", image: "/images/jeju/seongsan.png" },
          { timeOfDay: "morning", image: "/images/jeju/udo.png" },
          { timeOfDay: "afternoon", image: "/images/jeju/manjanggul.png" },
          { timeOfDay: "afternoon", image: "/images/jeju/jusangjeolli.png" },
          { timeOfDay: "evening", image: "/images/jeju/food-hoe.png" },
        ],
      },
      {
        day: 3,
        image: "/images/jeju/day3.png",
        schedule: [
          { timeOfDay: "morning", image: "/images/jeju/cheonjiyeon.png" },
          { timeOfDay: "morning", image: "/images/jeju/olle-trail.png" },
          { timeOfDay: "afternoon", image: "/images/jeju/jusangjeolli.png" },
          { timeOfDay: "afternoon", image: "/images/jeju/ecoland.png" },
        ],
      },
    ],
    attractions: [
      { included: true, image: "/images/jeju/seongsan.png" },
      { included: true, image: "/images/jeju/udo.png" },
      { included: true, image: "/images/jeju/seongsan.png" },
      { included: true, image: "/images/jeju/udo.png" },
      { included: true, image: "/images/jeju/manjanggul.png" },
      { included: true, image: "/images/jeju/cheonjiyeon.png" },
      { included: true, image: "/images/jeju/jusangjeolli.png" },
      { included: true, image: "/images/jeju/olle-trail.png" },
      { included: false, image: "/images/jeju/ecoland.png" },
      { included: false, image: "/images/jeju/manjanggul.png" },
      { included: false, image: "/images/jeju/seongsan.png" },
      { included: false, image: "/images/jeju/ecoland.png" },
      { included: false, image: "/images/jeju/horse-riding.png" },
    ],
    food: [
      { image: "/images/jeju/food-heukdwaeji.png" },
      { image: "/images/jeju/food-galchi.png" },
      { image: "/images/jeju/food-hoe.png" },
      { image: "/images/jeju/food-mulhoe.png" },
    ],
  },
];

export const moduleTransportTypes: Record<string, TransportType> = {
  seoul: 'pickup',
  metropolitan: 'bus',
  chungcheong: 'ktx',
  gyeongsang: 'ktx',
  jeolla: 'ktx',
  gangwon: 'ktx',
  jeju: 'flight',
};
