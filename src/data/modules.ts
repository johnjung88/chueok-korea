export interface DayScheduleItem {
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
  included: boolean; // true = 기본포함, false = 선택추가
  image: string;
}

export interface FoodItem {
  name: string;
  place: string;
  price: string;
  image: string;
}

export interface TransportInfo {
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

export const modules: TourModule[] = [
  {
    slug: "seoul",
    emoji: "🏙",
    moduleCode: "Module A",
    name: "Seoul",
    nameKr: "서울",
    duration: "2 Nights · 3 Days",
    cities: "서울 도심·궁궐·홍대·명동·한강·이태원·강남",
    priceMin4: "~450,000원",
    priceMin20: "~220,000원",
    accommodation: "4성급 서울 시내 호텔 (할랄 조식 가능 호텔 우선 배정)",
    transport: {
      from: "인천공항",
      method: "호텔 픽업",
      duration: "약 1시간",
      cost: "포함",
    },
    heroImage:
      "/images/seoul/hero.jpg",
    cardImage:
      "/images/seoul/card.jpg",
    tags: ["Gyeongbokgung", "Myeongdong", "Hongdae", "Lotte Tower", "K-Culture", "Halal Friendly", "Hanbok", "DDP"],
    itinerary: [
      {
        day: 1,
        theme: "도착 · 명동 · N서울타워",
        image:
          "/images/seoul/day1.jpg",
        schedule: [
          {
            time: "오후",
            place: "인천공항 픽업 → 호텔",
            description: "전용 차량으로 공항에서 호텔까지 편안하게. 그룹 규모에 맞는 전세버스 또는 미니밴 배정, 체크인 후 여행의 시작.",
            image:
              "/images/seoul/airport.jpg",
          },
          {
            time: "저녁",
            place: "명동 (明洞 · Myeongdong)",
            description: "서울의 첫 밤, K-뷰티의 심장부에서. 올리브영부터 네온사인 빛나는 노점 거리까지 — 쇼핑과 먹방으로 완벽한 서울 입성.",
            image:
              "/images/seoul/myeongdong.jpg",
          },
          {
            time: "야간",
            place: "N서울타워 (N Seoul Tower · 남산타워)",
            description: "케이블카를 타고 남산에 오르면 서울의 야경이 360°로 펼쳐집니다. 사랑의 자물쇠 광장 — 잊지 못할 첫 번째 서울 밤.",
            image:
              "/images/seoul/namsan-tower.jpg",
          },
        ],
      },
      {
        day: 2,
        theme: "궁궐 · 한복 · 전통문화 · 시장",
        image:
          "/images/seoul/day2.jpg",
        schedule: [
          {
            time: "오전",
            place: "한복 대여 → 경복궁 (景福宮 · Gyeongbokgung Palace)",
            description: "한복을 입으면 입장이 무료. 조선 제1궁궐의 근정전, 경회루 — 600년 역사를 배경으로 완성되는 인생샷.",
            image:
              "/images/seoul/gyeongbokgung.jpg",
          },
          {
            time: "오전",
            place: "국립고궁박물관 (National Palace Museum of Korea)",
            description: "조선 왕실의 보물이 한자리에, 무료 입장. 경복궁 관람 후 들르는 짧은 역사 여행.",
            image:
              "/images/seoul/palace-museum.jpg",
          },
          {
            time: "오후",
            place: "북촌한옥마을 (北村韓屋마을 · Bukchon Hanok Village)",
            description: "100년 한옥 골목 사이를 걷는 시간 여행. 한복 차림으로 걸으면 사진 한 장 한 장이 작품이 됩니다.",
            image:
              "/images/seoul/bukchon.jpg",
          },
          {
            time: "오후",
            place: "인사동 (仁寺洞 · Insadong)",
            description: "전통과 현재가 공존하는 거리. 쌈지길 나선형 계단, 꽃차 한 잔, 그리고 한국 공예 갤러리 산책.",
            image:
              "/images/seoul/insadong.jpg",
          },
          {
            time: "저녁",
            place: "광장시장 (廣藏市場 · Gwangjang Market)",
            description: "1905년부터 이어온 서울 최고(最古) 시장. 빈대떡, 마약김밥 — 현지인과 같은 포장마차 야식 체험.",
            image:
              "/images/seoul/gwangjang.jpg",
          },
          {
            time: "야간",
            place: "청계천 (清溪川 · Cheonggyecheon Stream)",
            description: "도심을 가로지르는 빛의 강. LED 야경 산책로를 따라 서울의 밤을 걸어보세요.",
            image:
              "/images/seoul/cheonggyecheon.jpg",
          },
        ],
      },
      {
        day: 3,
        theme: "현대 서울 · K-컬처 · 한강",
        image:
          "/images/seoul/day3.jpg",
        schedule: [
          {
            time: "오전",
            place: "롯데월드타워 서울스카이 (Lotte World Tower Seoul Sky)",
            description: "555m 한국 최고층에서 서울 전체를 발 아래에. 투명 유리 바닥 위에 서는 스릴, 석촌호수가 보이는 스카이데크.",
            image:
              "/images/seoul/lotte-tower.jpg",
          },
          {
            time: "오후",
            place: "코엑스 별마당 도서관 (COEX Starfield Library)",
            description: "13m 높이 서가가 압도하는 현대 서울의 아이콘. 무료 입장, 쇼핑과 식사까지 한 번에.",
            image:
              "/images/seoul/coex.jpg",
          },
          {
            time: "오후",
            place: "홍대 · 연남동 (弘大 · Hongdae & Yeonnam-dong)",
            description: "서울 청춘의 에너지가 넘치는 거리. K-팝 거리 공연, 빈티지 숍, 연트럴파크 산책 — 서울의 진짜 젊음.",
            image:
              "/images/seoul/hongdae.jpg",
          },
          {
            time: "저녁",
            place: "한강공원 · 한강 유람선 (漢江 · Han River Park & Cruise)",
            description: "서울의 젖줄 위에서 마주하는 야경. 반포대교 무지개 분수와 여의도 스카이라인이 마지막 서울 밤을 완성합니다.",
            image:
              "/images/seoul/hangang-cruise.jpg",
          },
        ],
      },
    ],
    attractions: [
      { name: "경복궁 (Gyeongbokgung)", fee: "₩3,000", feature: "조선 제1궁궐 · 한복 착용 시 무료 입장 · 인생샷 보장 배경", included: true, image: "/images/seoul/gyeongbokgung.jpg" },
      { name: "국립고궁박물관", fee: "무료", feature: "왕실 보물 무료 관람 · 수·토 야간 개방 · 에어컨 완비", included: true, image: "/images/seoul/palace-museum.jpg" },
      { name: "북촌한옥마을 (Bukchon)", fee: "무료", feature: "600채 전통 한옥 골목 · 남산타워 배경 포토스팟", included: true, image: "/images/seoul/bukchon.jpg" },
      { name: "인사동 거리 (Insadong)", fee: "무료", feature: "전통 공예·차·갤러리 · 쌈지길 복합문화공간", included: true, image: "/images/seoul/insadong.jpg" },
      { name: "광장시장 (Gwangjang Market)", fee: "무료", feature: "1905년 개장 최고(最古) 시장 · 빈대떡·마약김밥의 고향", included: true, image: "/images/seoul/gwangjang.jpg" },
      { name: "N서울타워 전망대", fee: "₩21,000", feature: "360° 야경 파노라마 · 사랑의 자물쇠 광장", included: true, image: "/images/seoul/namsan-tower.jpg" },
      { name: "롯데월드타워 서울스카이", fee: "₩31,000", feature: "123층 555m 최고층 전망대 · 투명 유리 바닥 스카이워크", included: true, image: "/images/seoul/lotte-tower.jpg" },
      { name: "코엑스 별마당 도서관", fee: "무료", feature: "13m 높이 서가 · 인스타그램 성지", included: true, image: "/images/seoul/coex.jpg" },
      { name: "동대문디자인플라자 (DDP)", fee: "무료", feature: "자하 하디드 건축 걸작 · 야간 LED 장미 포토존", included: false, image: "/images/seoul/ddp.jpg" },
      { name: "롯데월드 어드벤처 (실내)", fee: "₩61,000", feature: "세계 최대 실내 테마파크 · 비 오는 날 완벽 대안", included: false, image: "/images/seoul/lotte-world.jpg" },
      { name: "하이브 인사이트 (HYBE Insight)", fee: "₩22,000", feature: "BTS·세븐틴 K-팝 성지 · 단독 몰입형 체험관", included: false, image: "/images/seoul/hybe.jpg" },
      { name: "한복 체험 대여", fee: "₩15,000~25,000", feature: "경복궁 앞 변신 · 착용 시 궁궐 입장 무료", included: false, image: "/images/seoul/hanbok.jpg" },
      { name: "한강 유람선 야경 크루즈", fee: "₩18,000~25,000", feature: "무지개 분수 · 서울 스카이라인 야경 · 40인+ 전세 가능", included: false, image: "/images/seoul/hangang-cruise.jpg" },
      { name: "DMZ 비무장지대 투어", fee: "₩55,000~", feature: "한반도 분단의 현장 · 잊지 못할 역사 여행", included: false, image: "/images/seoul/dmz.jpg" },
      { name: "가로수길 (Garosu-gil)", fee: "무료", feature: "강남 트렌디 카페·부티크 · 은행나무 가로수 거리", included: false, image: "/images/seoul/garosu.jpg" },
    ],
    food: [
      { name: "할랄 한식 BBQ (Busan Jib)", place: "명동 · 할랄 인증 한식 바비큐", price: "₩15,000~30,000", image: "/images/seoul/food-bbq.jpg" },
      { name: "Kampungku (말레이시아 할랄)", place: "명동 · 기도실 완비 할랄 레스토랑", price: "₩12,000~20,000", image: "/images/seoul/food-kampungku.jpg" },
      { name: "이태원 할랄 한식 (Eid 식당)", place: "이태원 · 서울중앙성원 인근 한식", price: "₩15,000~25,000", image: "/images/seoul/food-halal-korean.jpg" },
      { name: "명동 거리 음식", place: "명동 노점 · 어묵·호떡·계란빵", price: "₩3,000~10,000", image: "/images/seoul/food-street.jpg" },
      { name: "광장시장 식물성 메뉴", place: "야채전·잡채·호떡·마약김밥", price: "₩5,000~15,000", image: "/images/seoul/food-gwangjang.jpg" },
      { name: "코엑스몰 할랄 가이", place: "코엑스몰 · 태국 할랄 레스토랑", price: "₩12,000~18,000", image: "/images/seoul/food-coex.jpg" },
      { name: "홍대 할랄 치킨", place: "홍대 · 할랄 치킨·카레 전문", price: "₩12,000~20,000", image: "/images/seoul/food-chicken.jpg" },
      { name: "한우 코스 요리 (특식)", place: "강남·명동 · 할랄 도축 한우 (사전예약)", price: "₩80,000~150,000", image: "/images/seoul/food-hanwoo.jpg" },
    ],
    note: "서울은 모든 모듈 조합의 최적 시작점입니다. 이태원 서울중앙성원 인근 할랄 식당, 명동·홍대 할랄 인증 레스토랑으로 무슬림 그룹을 완벽 지원합니다. 경복궁은 화요일 휴궁, 북촌은 17시 이후 관람 제한에 주의. 20인 이상 그룹은 한복 대여·유람선·전망대 사전 예약 시 단체 할인 혜택을 받으세요.",
  },
  {
    slug: "metropolitan",
    emoji: "🏯",
    moduleCode: "Module B",
    name: "Metropolitan",
    nameKr: "수도권",
    duration: "2 Nights · 3 Days",
    cities: "수원·인천·가평·남이섬",
    priceMin4: "~380,000원",
    priceMin20: "~180,000원",
    accommodation: "4성급 수원 또는 가평",
    transport: {
      from: "서울",
      method: "전세버스",
      duration: "30~60분",
      cost: "포함",
    },
    heroImage:
      "/images/metropolitan/hero.png",
    cardImage:
      "/images/metropolitan/card.png",
    tags: ["Nami Island", "Suwon Fortress", "Korean Folk Village", "Gapyeong Rail Bike", "Incheon Wolmido"],
    itinerary: [
      {
        day: 1,
        theme: "수원 역사 · 민속촌",
        image: "/images/metropolitan/day1.png",
        schedule: [
          { time: "오전 09:00", place: "서울/공항 출발", description: "전세버스로 수원 이동 (약 40분)", image: "/images/metropolitan/hero.png" },
          { time: "오전 10:00", place: "수원화성 (화성행궁 포함)", description: "유네스코 세계유산 성곽 투어 · 성곽 입장 ₩1,000 / 행궁 별도 · 09:00~18:00 (3~10월) · 약 2시간 소요 · 수문장 교대식 매 정시 10~16시", image: "/images/metropolitan/card.png" },
          { time: "오후 13:00", place: "한국민속촌 (한국민속촌)", description: "조선시대 생활 재현 테마파크 · 성인 ₩32,000 · 09:30~18:00 · 약 3시간 소요 · 단체 20인+ 할인 가능 · 전통 혼례·농악 공연 관람 추천", image: "/images/metropolitan/day1.png" },
          { time: "오후 16:30", place: "국립과천과학관 (국립과천과학관)", description: "가족 친화 과학박물관 · 성인 ₩4,000 / 어린이 ₩2,000 · 09:30~17:30 (월요일 휴관) · 약 1.5시간 · 천체관·VR체험 별도 예약 필요 (선택)", image: "/images/metropolitan/bus.png" },
          { time: "저녁 18:30", place: "수원 갈비 거리", description: "수원 전통 왕갈비 저녁 식사 · 1인 ₩30,000~50,000", image: "/images/metropolitan/hwaseong.png" },
        ],
      },
      {
        day: 2,
        theme: "가평 자연 · 남이섬 · 레일바이크",
        image: "/images/metropolitan/day2.png",
        schedule: [
          { time: "오전 08:30", place: "가평 레일바이크 (가평레일파크)", description: "폐철도 위 레일바이크 · 2인용 ₩35,000 / 4인용 ₩48,000 · 09:00~17:30 · 약 1시간 코스 · 예약 필수 · 청평호 경치와 터널 구간이 포토스팟", image: "/images/metropolitan/hwaseong.png" },
          { time: "오전 10:30", place: "남이섬 (남이섬)", description: "보트 이동 · 겨울연가 촬영지 · 성인 ₩19,000 (왕복 도선 포함) · 08:00~21:00 · 약 2~3시간 소요 · 메타세쿼이아 길·자작나무 숲 인스타 명소 · 봄 벚꽃/가을 단풍 최고", image: "/images/metropolitan/hwaseong.png" },
          { time: "오후 14:00", place: "아침고요수목원 (아침고요수목원)", description: "한국 대표 정원 · 성인 ₩11,000 · 08:30~19:00 · 약 1.5~2시간 · 봄 꽃축제/겨울 조명축제 · 계절마다 다른 꽃 전시 · 단체 사진 명소", image: "/images/metropolitan/food-galbi.png" },
          { time: "오후 16:30", place: "청평호 (청평호수) 산책", description: "가평 리조트 체크인 · 호수변 산책 무료 · 여름 수상레저 선택 가능", image: "/images/metropolitan/day2.png" },
          { time: "저녁 18:30", place: "닭갈비·바베큐 저녁", description: "춘천식 닭갈비 ₩15,000~20,000 또는 리조트 바베큐", image: "/images/metropolitan/nami-island.png" },
        ],
      },
      {
        day: 3,
        theme: "인천 차이나타운 · 월미도",
        image: "/images/metropolitan/day3.png",
        schedule: [
          { time: "오전 09:00", place: "인천 차이나타운 (인천차이나타운)", description: "짜장면 발상지 · 무료 입장 · 짜장면박물관 ₩1,000 · 09:00~18:00 · 약 1.5시간 · 한중문화관·동화마을 연계 산책 · 점심 짜장면 ₩8,000~12,000", image: "/images/metropolitan/nami-island.png" },
          { time: "오전 11:00", place: "월미도 (월미도)", description: "월미바다열차 ₩11,000~14,000 · 10:00~19:00 (월요일 휴무) · 놀이공원·해변 산책 · 약 1.5시간 · 인천항 바다 경치 전망", image: "/images/metropolitan/nami-island.png" },
          { time: "오후 13:00", place: "송도 센트럴파크", description: "미래 도시 송도 · 수상택시 ₩6,000 · 현대 건축·한옥마을 포토존 · 약 1시간", image: "/images/metropolitan/gapyeong-resort.png" },
          { time: "오후 15:00", place: "다음 지역 이동", description: "서울 경유 귀국 또는 다음 모듈 이동 · 인천공항까지 약 40분", image: "/images/metropolitan/food-dakgalbi.png" },
        ],
      },
    ],
    attractions: [
      { name: "수원화성 (성곽+행궁)", fee: "₩1,000+행궁별도", feature: "유네스코 세계유산 성곽 · 09:00~18:00 · 수문장 교대식 매 정시", included: true, image: "/images/metropolitan/day3.png" },
      { name: "한국민속촌 (한국민속촌)", fee: "₩32,000", feature: "조선시대 생활 재현 · 전통 공연 · 09:30~18:00 · 단체 할인 가능", included: true, image: "/images/metropolitan/chinatown.png" },
      { name: "남이섬 (왕복 도선 포함)", fee: "₩19,000", feature: "겨울연가 촬영지 · 메타세쿼이아 길 · 08:00~21:00", included: true, image: "/images/metropolitan/songdo.png" },
      { name: "가평 레일바이크 (가평레일파크)", fee: "₩35,000(2인)", feature: "폐철도 레일바이크 · 청평호 경치 · 예약 필수", included: true, image: "/images/metropolitan/songdo.png" },
      { name: "아침고요수목원 (아침고요수목원)", fee: "₩11,000", feature: "한국 대표 정원 · 08:30~19:00 · 겨울 조명축제 인기", included: true, image: "/images/metropolitan/bus.png" },
      { name: "국립과천과학관 (국립과천과학관)", fee: "₩4,000", feature: "가족 친화 과학박물관 · 09:30~17:30 · 월요일 휴관", included: false, image: "/images/metropolitan/hwaseong.png" },
      { name: "인천 월미도 바다열차", fee: "₩11,000~14,000", feature: "해안 모노레일 · 10:00~19:00 · 월요일 휴무", included: false, image: "/images/metropolitan/hwaseong.png" },
      { name: "인천 차이나타운+동화마을", fee: "무료", feature: "짜장면 발상지 · 짜장면박물관 ₩1,000 별도", included: false, image: "/images/metropolitan/nami-island.png" },
      { name: "쁘띠프랑스", fee: "₩12,000", feature: "유럽풍 테마파크 · 어린왕자 테마", included: false, image: "/images/metropolitan/nami-island.png" },
      { name: "에버랜드", fee: "₩62,000", feature: "국내 최대 테마파크 · 사파리·놀이기구", included: false, image: "/images/metropolitan/nami-island.png" },
    ],
    food: [
      { name: "수원 왕갈비", place: "수원 갈비 거리 · 본수원갈비 추천", price: "₩30,000~50,000", image: "/images/metropolitan/hwaseong.png" },
      { name: "춘천 닭갈비", place: "가평·춘천 닭갈비 골목", price: "₩15,000~20,000", image: "/images/metropolitan/songdo.png" },
      { name: "짜장면·탕수육", place: "인천 차이나타운 공화춘 등", price: "₩8,000~15,000", image: "/images/metropolitan/chinatown.png" },
      { name: "남이섬 닭갈비·막국수", place: "남이섬 내 식당가", price: "₩12,000~18,000", image: "/images/metropolitan/petite-france.png" },
    ],
    note: "수도권 모듈은 서울 모듈과 연결하거나 독립 시작점으로 활용 가능합니다. 봄(벚꽃)·가을(단풍) 남이섬이 최고이며, 겨울엔 아침고요수목원 조명축제가 인기입니다. 한국민속촌은 금~일 야간개장(4~11월)도 가능합니다. 가족 여행객·에버랜드·자연을 선호하는 고객에게 특히 추천합니다.",
  },
  {
    slug: "chungcheong",
    emoji: "⛩",
    moduleCode: "Module C",
    name: "Chungcheong",
    nameKr: "충청도",
    duration: "2 Nights · 3 Days",
    cities: "대전·공주·부여·보령",
    priceMin4: "~370,000원",
    priceMin20: "~175,000원",
    accommodation: "4성급 대전 또는 공주",
    transport: {
      from: "서울",
      method: "KTX",
      duration: "약 50분",
      cost: "₩23,700",
    },
    heroImage: "/images/chungcheong/hero.png",
    cardImage: "/images/chungcheong/card.png",
    tags: ["Gongju UNESCO", "Baekje History", "Buyeo Fortress", "Daejeon", "Gyeryongsan", "Hot Springs"],
    itinerary: [
      {
        day: 1,
        theme: "공주 백제 유산",
        image: "/images/chungcheong/day1.png",
        schedule: [
          { time: "오전 08:00", place: "서울 출발", description: "KTX로 대전역 이동 약 50분 · ₩23,700 · 대전역에서 공주까지 전세버스 약 40분", image: "/images/chungcheong/ktx.png" },
          { time: "오전 10:00", place: "공산성 (공산성·유네스코)", description: "백제 시대 산성 · 성인 ₩1,200 / 청소년 ₩800 · 09:00~18:00 (3~10월) / 09:00~17:00 (11~2월) · 약 1.5시간 소요 · 수문장 교대식 매 정시 10~16시 · 성곽 산책로에서 금강 조망 탁월", image: "/images/chungcheong/gongsanseong.png" },
          { time: "오후 12:00", place: "송산리 고분군·무령왕릉 (송산리고분군)", description: "백제 왕릉 유적 · 성인 ₩1,500 / 청소년 ₩1,000 · 09:00~18:00 · 약 1시간 · 무령왕릉 모형 전시관 필수 관람 · 국립공주박물관 연계 (무료)", image: "/images/chungcheong/royal-tombs.png" },
          { time: "오후 14:00", place: "국립공주박물관", description: "무령왕릉 출토 유물 전시 · 무료 입장 · 09:00~18:00 (월요일 휴관) · 약 1시간", image: "/images/chungcheong/royal-tombs.png" },
          { time: "저녁 18:00", place: "공주 한정식", description: "충청도 전통 한정식 저녁 · 1인 ₩25,000~40,000 · 밤송이·밤막걸리 공주 특산", image: "/images/chungcheong/food-hanjeongsik.png" },
        ],
      },
      {
        day: 2,
        theme: "부여 역사 탐방",
        image: "/images/chungcheong/day2.png",
        schedule: [
          { time: "오전 09:00", place: "부소산성·낙화암 (부소산성)", description: "백제 마지막 수도 성곽 · 성인 ₩2,000 / 청소년 ₩1,100 · 08:00~18:00 (봄~가을) / 08:00~17:00 (겨울) · 약 1.5시간 · 낙화암 3천 궁녀 전설 · 고란사 약수터 · 백마강 유람선(선택 ₩5,000)", image: "/images/chungcheong/busosanseong.png" },
          { time: "오전 11:00", place: "정림사지 오층석탑 (정림사지)", description: "유네스코 세계유산 · 성인 ₩1,500 / 청소년 ₩900 · 09:00~18:00 (3~10월) · 약 40분 · 백제 유일의 석탑·정림사지박물관 연계", image: "/images/chungcheong/jeongnimsa.png" },
          { time: "오후 12:30", place: "국립부여박물관", description: "백제 금동대향로(국보) · 무료 입장 · 09:00~18:00 (월 휴관) · 약 1시간 · 백제 최고 걸작 금동대향로 필수 관람", image: "/images/chungcheong/buyeo-museum.png" },
          { time: "오후 14:30", place: "궁남지 (궁남지)", description: "한국 최초 인공 연못 · 무료 · 약 40분 · 7~8월 연꽃 만개 시기가 최고 · 야간 조명 로맨틱", image: "/images/chungcheong/gungnamji.png" },
          { time: "저녁 18:00", place: "연잎밥·올갱이국", description: "부여 전통 음식 · 연잎밥 ₩12,000~18,000 · 부여 구드래 조각공원 인근 식당가", image: "/images/chungcheong/food-yeonipbap.png" },
        ],
      },
      {
        day: 3,
        theme: "계룡산·유성온천·대전",
        image: "/images/chungcheong/day3.png",
        schedule: [
          { time: "오전 08:30", place: "계룡산 갑사 (계룡산국립공원)", description: "천년 고찰·자연 트레킹 · 입장 ₩2,000 (현금만) · 주차 ₩4,000 · 약 2시간 · 갑사 계곡 코스 왕복 4km · 가을 단풍 전국 5대 명소 · 단체는 쉬운 코스(갑사~용문폭포) 추천", image: "/images/chungcheong/gapsa.png" },
          { time: "오후 12:00", place: "유성온천 족욕 체험 (유성온천)", description: "무료 공공 족욕장 · 상시 개방 · 약 30분 · 유성온천 거리 산책 · 풀코스 스파 호텔: 유성스파 성인 ₩4,500 (05:00~22:00)", image: "/images/chungcheong/gapsa.png" },
          { time: "오후 13:30", place: "대전 성심당 (성심당)", description: "한국 3대 빵집 · 튀김소보로·부추빵 필수 · ₩3,000~8,000 · 08:00~22:00 · 줄이 길어 오전 방문 추천 · 대전 시민의 자부심", image: "/images/chungcheong/sungsimdang.png" },
          { time: "오후 15:00", place: "다음 지역 이동", description: "KTX로 다음 모듈 또는 서울 귀환 · 대전역까지 약 20분", image: "/images/chungcheong/ktx.png" },
        ],
      },
    ],
    attractions: [
      { name: "공산성 (공주·유네스코)", fee: "₩1,200", feature: "유네스코 백제 산성 · 09:00~18:00 · 수문장 교대식", included: true, image: "/images/chungcheong/gongsanseong.png" },
      { name: "송산리 고분군·무령왕릉", fee: "₩1,500", feature: "백제 왕릉 · 09:00~18:00 · 모형 전시관 관람", included: true, image: "/images/chungcheong/royal-tombs.png" },
      { name: "국립공주박물관", fee: "무료", feature: "무령왕릉 출토 유물 · 월요일 휴관", included: true, image: "/images/chungcheong/royal-tombs.png" },
      { name: "부소산성·낙화암", fee: "₩2,000", feature: "백제 마지막 수도 성곽 · 08:00~18:00", included: true, image: "/images/chungcheong/busosanseong.png" },
      { name: "정림사지 오층석탑 (유네스코)", fee: "₩1,500", feature: "유네스코 백제 석탑 · 09:00~18:00", included: true, image: "/images/chungcheong/jeongnimsa.png" },
      { name: "국립부여박물관", fee: "무료", feature: "백제 금동대향로 국보 · 월요일 휴관", included: true, image: "/images/chungcheong/buyeo-museum.png" },
      { name: "궁남지", fee: "무료", feature: "한국 최초 인공 연못 · 7~8월 연꽃 시즌", included: true, image: "/images/chungcheong/gungnamji.png" },
      { name: "계룡산 갑사 (국립공원)", fee: "₩2,000", feature: "천년 고찰 · 가을 단풍 5대 명소 · 현금만 가능", included: true, image: "/images/chungcheong/gapsa.png" },
      { name: "유성온천 족욕 (대전)", fee: "무료", feature: "공공 족욕장 · 상시 개방 · 스파 별도", included: true, image: "/images/chungcheong/gapsa.png" },
      { name: "보령 머드축제 (7~8월)", fee: "₩15,000", feature: "여름 한정 · 대천해수욕장 · 7월말~8월초", included: false, image: "/images/chungcheong/mud-festival.png" },
      { name: "세종시 국립세종수목원", fee: "₩5,000", feature: "한국 최대 실내 정원 · 화~일 09:00~18:00", included: false, image: "/images/chungcheong/gapsa.png" },
      { name: "독립기념관 (천안)", fee: "무료", feature: "한국 독립운동 역사관 · 화~일 09:30~18:00", included: false, image: "/images/chungcheong/independence-hall.png" },
    ],
    food: [
      { name: "공주 한정식·밤요리", place: "공주 시내 전통 한식당", price: "₩25,000~40,000", image: "/images/chungcheong/food-hanjeongsik.png" },
      { name: "연잎밥·올갱이국", place: "부여 구드래 인근 식당", price: "₩12,000~18,000", image: "/images/chungcheong/food-yeonipbap.png" },
      { name: "대전 성심당 빵", place: "대전 성심당 본점 (은행동)", price: "₩3,000~8,000", image: "/images/chungcheong/sungsimdang.png" },
      { name: "대전 칼국수·수제비", place: "대전 칼국수 골목 (대흥동)", price: "₩8,000~12,000", image: "/images/chungcheong/food-kalguksu.png" },
    ],
    note: "충청도는 백제 역사 유네스코 유산의 중심지입니다. 서울에서 KTX 50분으로 접근성이 뛰어나며, 경상도·전라도와 연결하기 좋습니다. 여름(7~8월)에는 보령 머드축제·궁남지 연꽃이 추가됩니다. 가을(10~11월) 계룡산 단풍이 절정이며, 겨울에는 유성온천이 인기입니다. 공주·부여 유적지는 실내 관람이 적어 우천 시 국립박물관 중심으로 일정을 조정하세요.",
  },
  {
    slug: "gyeongsang",
    emoji: "🌊",
    moduleCode: "Module D",
    name: "Gyeongsang",
    nameKr: "경상도",
    duration: "2 Nights · 3 Days",
    cities: "부산·경주 (안동 선택)",
    priceMin4: "~420,000원",
    priceMin20: "~210,000원",
    accommodation: "부산 4성 (2박) 또는 부산 1박 + 경주 1박",
    transport: {
      from: "서울",
      method: "KTX",
      duration: "약 2시간 30분",
      cost: "₩59,800",
    },
    heroImage:
      "/images/gyeongsang/hero.png",
    cardImage:
      "/images/gyeongsang/card.png",
    tags: ["Busan Beach", "Gamcheon Village", "Gyeongju UNESCO", "Haedong Yonggungsa", "Taejongdae", "Andong Hahoe"],
    itinerary: [
      {
        day: 1,
        theme: "부산 바다 · 해안 절경",
        image: "/images/gyeongsang/day1.png",
        schedule: [
          { time: "오전 08:00", place: "KTX 부산 도착", description: "서울에서 KTX 약 2시간 30분 · ₩59,800 · 부산역 도착 후 전세버스 합류", image: "/images/gyeongsang/hero.png" },
          { time: "오전 09:00", place: "해동용궁사 (해동용궁사)", description: "바다 위 절벽 사찰 · 무료 입장 · 04:30~19:00 · 약 1시간 · 일출 시 장관 · 주차 30분 ₩2,000 · 108계단 하강 · 12지신상 포토존 · 사찰 내 소원 동전 던지기", image: "/images/gyeongsang/card.png" },
          { time: "오전 11:00", place: "해운대 해변·더베이101", description: "부산 대표 해수욕장 산책 · 무료 · 더베이101 요트 클럽 경관 · 마린시티 스카이라인 포토", image: "/images/gyeongsang/day1.png" },
          { time: "오후 13:00", place: "자갈치시장 (자갈치시장)", description: "국내 최대 어시장 · 무료 입장 · 2층 식당가 점심 회 · 1인 ₩30,000~60,000 · 활어 직접 골라 회 떠먹기 체험", image: "/images/gyeongsang/ktx.png" },
          { time: "오후 15:00", place: "태종대 (태종대)", description: "해안 절벽 자연공원 · 무료 입장 · 다누비열차 왕복 ₩3,000~4,000 · 09:20~17:30 (6~8월 ~19:30) · 월요일 휴무 · 약 1.5시간 · 영도등대·신선바위 전망", image: "/images/gyeongsang/haeundae.png" },
          { time: "저녁 18:00", place: "해산물 저녁·광안리", description: "광안리 해변 레스토랑에서 회·어탕국수 · 광안대교 야경 감상 · 레이저쇼 (주말 계절별)", image: "/images/gyeongsang/haeundae.png" },
        ],
      },
      {
        day: 2,
        theme: "부산 문화마을 · 야경",
        image: "/images/gyeongsang/day2.png",
        schedule: [
          { time: "오전 09:00", place: "감천문화마을 (감천문화마을)", description: "부산의 마추픽추 · 무료 · 스탬프 투어 ₩2,000 · 약 1.5시간 · 어린왕자·물고기 조형물 포토스팟 · 마을 지도 인포센터에서 수령", image: "/images/gyeongsang/gamcheon.png" },
          { time: "오전 11:00", place: "흰여울문화마을 (흰여울문화마을)", description: "영도 해안 절벽 마을 · 무료 · 약 1시간 · 흰여울 해안터널 70m 포토스팟 · 카페·갤러리 골목 산책 · 계단 많아 편한 신발 필수 · 비 오는 날 미끄러움 주의", image: "/images/gyeongsang/haeundae.png" },
          { time: "오후 13:00", place: "국제시장·BIFF광장·씨앗호떡", description: "영화의 도시 부산 · 무료 · 씨앗호떡 ₩2,000 · 어묵 ₩5,000 · 약 1시간 · 부산 영화제 명소", image: "/images/gyeongsang/gwangalli-bridge.png" },
          { time: "오후 14:30", place: "송도 스카이워크 (송도스카이워크)", description: "바다 위 유리 다리 · 무료 · 06:00~23:00 · 약 30분 · 송도해상케이블카(선택 ₩17,000) · 송도해수욕장 연계", image: "/images/gyeongsang/day2.png" },
          { time: "오후 16:00", place: "용두산공원·부산타워 (부산타워)", description: "부산 도심 360도 전망 · 전망대 성인 ₩4,000 (단체 20+ ₩3,500) · 09:00~22:00 · 약 1시간 · 꽃시계·용두산 에스컬레이터", image: "/images/gyeongsang/gamcheon.png" },
          { time: "저녁 18:00", place: "돼지국밥·밀면 저녁", description: "부산 대표 음식 · 돼지국밥 ₩10,000~13,000 · 밀면 ₩10,000 · 서면 먹자골목 추천", image: "/images/gyeongsang/gamcheon.png" },
        ],
      },
      {
        day: 3,
        theme: "경주 신라 유산 · (안동 선택)",
        image: "/images/gyeongsang/day3.png",
        schedule: [
          { time: "오전 08:00", place: "불국사 (불국사·유네스코)", description: "유네스코 세계유산 · 성인 ₩6,000 / 청소년 ₩4,000 · 07:00~18:00 (동절기 ~17:00) · 약 1.5시간 · 다보탑·석가탑·청운교·백운교 필수 관람 · 부산에서 버스 약 1시간", image: "/images/gyeongsang/gukje-market.png" },
          { time: "오전 10:00", place: "석굴암 (석굴암·유네스코)", description: "유네스코 세계유산 석불 · 성인 ₩6,000 · 불국사에서 셔틀 약 15분 · 약 40분 소요 · 본존불상 유리 너머 관람", image: "/images/gyeongsang/haeundae.png" },
          { time: "오후 12:00", place: "양동마을 (양동마을·유네스코)", description: "한국 최대 전통마을 · 성인 ₩4,000 / 청소년 ₩2,000 · 09:00~19:00 (4~9월) / ~18:00 (10~3월) · 약 1.5시간 · 500년 된 양반가옥 · 건물 내부 무단진입 금지 · 마을 높은 곳에서 파노라마 포토", image: "/images/gyeongsang/yongdusan.png" },
          { time: "오후 14:30", place: "보문호수·대릉원·첨성대", description: "보문관광단지 호수 산책(무료) · 대릉원 성인 ₩3,000 · 첨성대 야외 무료 · 약 1.5시간 · 봄 벚꽃 보문호수 드라이브 추천", image: "/images/gyeongsang/food-dwaeji-gukbap.png" },
          { time: "야간 19:00", place: "동궁과월지 야경 (동궁과월지)", description: "신라 별궁 연못 야경 · 성인 ₩3,000 · 09:00~22:00 (입장 21:30까지) · 약 1시간 · 한국 대표 야경 명소 · 연못 반영 사진 필수 · 겨울 조명이 특히 아름다움", image: "/images/gyeongsang/day3.png" },
        ],
      },
    ],
    attractions: [
      { name: "해동용궁사 (해동용궁사)", fee: "무료", feature: "바다 절벽 사찰 · 04:30~19:00 · 일출 명소", included: true, image: "/images/gyeongsang/bulguksa.png" },
      { name: "해운대·광안리 해변", fee: "무료", feature: "부산 대표 해수욕장 · 광안대교 야경", included: true, image: "/images/gyeongsang/seokguram.png" },
      { name: "태종대 (태종대)", fee: "무료(다누비열차₩3,000)", feature: "해안 절벽 · 다누비열차 · 월요일 휴무", included: true, image: "/images/gyeongsang/hahoe.png" },
      { name: "감천문화마을", fee: "무료", feature: "부산 마추픽추 · 스탬프투어 ₩2,000", included: true, image: "/images/gyeongsang/gamcheon.png" },
      { name: "흰여울문화마을", fee: "무료", feature: "영도 해안 절벽마을 · 해안터널 포토스팟", included: true, image: "/images/gyeongsang/donggung.png" },
      { name: "송도 스카이워크", fee: "무료", feature: "바다 위 유리 다리 · 06:00~23:00", included: true, image: "/images/gyeongsang/haeundae.png" },
      { name: "부산타워 전망대 (용두산공원)", fee: "₩4,000(단체₩3,500)", feature: "부산 360도 전망 · 09:00~22:00", included: true, image: "/images/gyeongsang/haeundae.png" },
      { name: "불국사 (경주·유네스코)", fee: "₩6,000", feature: "유네스코 세계유산 · 07:00~18:00", included: true, image: "/images/gyeongsang/haeundae.png" },
      { name: "석굴암 (경주·유네스코)", fee: "₩6,000", feature: "유네스코 석불 · 불국사에서 셔틀 15분", included: true, image: "/images/gyeongsang/gamcheon.png" },
      { name: "양동마을 (경주·유네스코)", fee: "₩4,000", feature: "한국 최대 전통마을 · 09:00~19:00", included: true, image: "/images/gyeongsang/gamcheon.png" },
      { name: "대릉원·첨성대 (경주)", fee: "₩3,000", feature: "신라 왕릉군 · 동양 최고 천문대", included: true, image: "/images/gyeongsang/haeundae.png" },
      { name: "동궁과월지 야경 (경주)", fee: "₩3,000", feature: "신라 별궁 야경 · 09:00~22:00", included: true, image: "/images/gyeongsang/yongdusan.png" },
      { name: "안동 하회마을 (유네스코)", fee: "₩3,000", feature: "유네스코 전통마을 · 09:00~18:00 · 하회별신굿탈놀이 공연(9~10월 축제) · 축제 티켓 ₩6,000~8,000", included: false, image: "/images/gyeongsang/bulguksa.png" },
    ],
    food: [
      { name: "싱싱한 회 (해산물)", place: "자갈치시장 2층 식당가", price: "₩30,000~60,000", image: "/images/gyeongsang/seokguram.png" },
      { name: "돼지국밥", place: "서면·국제시장 골목", price: "₩10,000~13,000", image: "/images/gyeongsang/hahoe.png" },
      { name: "씨앗호떡·어묵·비빔당면", place: "BIFF광장·국제시장 노점", price: "₩2,000~5,000", image: "/images/gyeongsang/daereungwon.png" },
      { name: "밀면 (부산 냉면)", place: "부산 시내 밀면 전문점", price: "₩10,000~13,000", image: "/images/gyeongsang/donggung.png" },
      { name: "경주 십원빵·황남빵", place: "경주 황남동 빵 골목", price: "₩2,000~5,000", image: "/images/gyeongsang/hahoe.png" },
    ],
    note: "부산 야경은 광안대교(광안리 해변)·부산타워·감천마을 석양 등 다양합니다. 안동 하회마을 추가 시 경주에서 버스 약 1.5시간 · 안동 국제탈춤축제(9월말~10월초)는 별도 1일 확보를 추천합니다. 경상도 모듈 후 전라도 모듈과 연결 시 전주까지 버스 이동 약 2시간 30분.",
  },
  {
    slug: "jeolla",
    emoji: "🌿",
    moduleCode: "Module E",
    name: "Jeolla",
    nameKr: "전라도",
    duration: "2 Nights · 3 Days",
    cities: "전주·여수·순천",
    priceMin4: "~390,000원",
    priceMin20: "~190,000원",
    accommodation: "전주 한옥마을 4성 또는 여수 4성",
    transport: {
      from: "서울",
      method: "KTX",
      duration: "약 1시간 50분",
      cost: "₩34,000",
    },
    heroImage:
      "/images/jeolla/hero.png",
    cardImage:
      "/images/jeolla/card.png",
    tags: ["Jeonju Hanok", "Yeosu Night Sea", "Korean Cuisine", "Suncheon Garden", "Damyang Bamboo", "Boseong Tea"],
    itinerary: [
      {
        day: 1,
        theme: "전주 한옥마을 · 맛의 도시",
        image: "/images/jeolla/day1.png",
        schedule: [
          { time: "오전 09:00", place: "전주 도착", description: "KTX 전주역 약 1시간 50분 · ₩34,000 · 역에서 한옥마을 버스 약 20분", image: "/images/jeolla/hero.png" },
          { time: "오전 10:00", place: "전주 한옥마을 워킹투어 (전주한옥마을)", description: "700채 한옥 · 무료 가이드투어 10:00~15:00 매일 · 한복 대여 ₩15,000~30,000 · 한복 시 경기전 무료 · 오목대 전망대 파노라마", image: "/images/jeolla/card.png" },
          { time: "오전 11:30", place: "경기전·전동성당 (경기전)", description: "조선 태조 어진 · 성인 ₩3,000 (한복 시 무료) · 09:00~18:00 · 전동성당(한국 최초 성당·무료) · 대나무 숲길 포토존", image: "/images/jeolla/day1.png" },
          { time: "오후 14:00", place: "자만벽화마을·전주향교 (전주향교)", description: "벽화마을 무료 포토존 · 향교 유교 학당 무료 · 남천교 청연루 야경 명소", image: "/images/jeolla/ktx.png" },
          { time: "저녁 18:00", place: "삼천동 막걸리 골목·비빔밥", description: "전주 비빔밥 ₩12,000~18,000 · 막걸리 주문 시 전 무한리필 · 1인 ₩15,000~25,000 · 피순대도 추천", image: "/images/jeolla/jeonju-hanok.png" },
        ],
      },
      {
        day: 2,
        theme: "순천 생태 · (담양·보성 선택)",
        image: "/images/jeolla/day2.png",
        schedule: [
          { time: "오전 08:30", place: "순천만국가정원 (순천만국가정원)", description: "한국 1호 국가정원 · 성인 ₩10,000 / 야간(17시~) ₩5,000 · 09:00~20:00 · 약 2~3시간 · 스카이큐브 모노레일 ₩8,000으로 습지 연계", image: "/images/jeolla/gyeonggijeon.png" },
          { time: "오후 12:00", place: "순천만습지 (순천만습지)", description: "유네스코 생물권 갈대 군락 · 통합권 포함 · 용산전망대 S자 수로 전경 · 가을 10~11월 절정", image: "/images/jeolla/jeonju-hanok.png" },
          { time: "오후 14:30", place: "낙안읍성 민속마을 (낙안읍성)", description: "조선 읍성 · 성인 ₩4,000 · 09:00~18:00 · 실제 주민 거주 초가집 · 전통 체험 가능", image: "/images/jeolla/food-makgeolli.png" },
          { time: "오후 16:30", place: "여수 이동·호텔 체크인", description: "순천~여수 버스 약 50분", image: "/images/jeolla/day2.png" },
        ],
      },
      {
        day: 3,
        theme: "여수 밤바다 · 해상케이블카",
        image: "/images/jeolla/day3.png",
        schedule: [
          { time: "오전 09:00", place: "오동도 (오동도)", description: "여수 대표 섬 · 768m 방파제 무료 · 동백꽃(1~3월) · 동백열차 ₩1,000 · 등대 전망대", image: "/images/jeolla/suncheon-garden.png" },
          { time: "오전 11:00", place: "여수 해상케이블카 (여수해상케이블카)", description: "한국 최초 해상 케이블카 · 일반 왕복 ₩17,000 / 크리스탈 ₩24,000 · 09:30~21:30 · 야간 탑승 추천", image: "/images/jeolla/suncheon-wetland.png" },
          { time: "오후 13:00", place: "이순신광장·갈치조림 점심", description: "이순신 동상·거북선 무료 · 갈치조림 ₩20,000~30,000 · 돌산 골목 추천", image: "/images/jeolla/naganeupseong.png" },
          { time: "야간 19:00", place: "돌산공원·여수 밤바다·낭만포차", description: "여수 밤바다 야경 무료 · 돌산대교 야경 · 낭만포차 해산물+맥주 · 노래비 포토존", image: "/images/jeolla/dolsan-night.png" },
        ],
      },
    ],
    attractions: [
      { name: "전주 한옥마을 (전주한옥마을)", fee: "무료", feature: "700채 한옥 · 무료 가이드투어 · 한복 대여 ₩15,000~", included: true, image: "/images/jeolla/day3.png" },
      { name: "경기전 (경기전)", fee: "₩3,000", feature: "조선 태조 어진 · 한복 착용 시 무료 · 09:00~18:00", included: true, image: "/images/jeolla/odongdo.png" },
      { name: "순천만국가정원+습지 (통합권)", fee: "₩10,000", feature: "국가정원+습지 통합 · 09:00~20:00 · 스카이큐브 ₩8,000", included: true, image: "/images/jeolla/yeosu-cablecar.png" },
      { name: "낙안읍성 민속마을", fee: "₩4,000", feature: "조선 읍성 · 실제 주민 거주 초가마을", included: true, image: "/images/jeolla/food-galchi.png" },
      { name: "여수 해상케이블카", fee: "₩17,000~24,000", feature: "한국 최초 해상 케이블카 · 09:30~21:30 · 야간 추천", included: true, image: "/images/jeolla/dolsan-night.png" },
      { name: "오동도 (오동도)", fee: "무료", feature: "여수 대표 섬 · 동백꽃 1~3월 · 768m 방파제", included: true, image: "/images/jeolla/jeonju-hanok.png" },
      { name: "담양 죽녹원 (죽녹원)", fee: "₩3,000", feature: "대나무 숲 · 09:00~19:00 · 65세 이상 무료", included: false, image: "/images/jeolla/gyeonggijeon.png" },
      { name: "보성 녹차밭 (대한다원)", fee: "₩4,000", feature: "한국 최대 녹차밭 · 09:00~18:00 · 녹차 아이스크림", included: false, image: "/images/jeolla/suncheon-garden.png" },
      { name: "광주 5.18 기념공원", fee: "무료", feature: "민주화 역사 · 전주에서 1시간", included: false, image: "/images/jeolla/naganeupseong.png" },
    ],
    food: [
      { name: "전주 비빔밥 (육회비빔밥)", place: "한옥마을 가족회관·한국집", price: "₩12,000~18,000", image: "/images/jeolla/yeosu-cablecar.png" },
      { name: "전주 막걸리+전·피순대", place: "삼천동 막걸리 골목 (전 무한리필)", price: "₩15,000~25,000", image: "/images/jeolla/odongdo.png" },
      { name: "여수 갈치조림", place: "돌산 갈치조림 골목", price: "₩20,000~30,000", image: "/images/jeolla/damyang-bamboo.png" },
      { name: "전라도 한정식 (특식)", place: "전주·광주 한정식 (반찬 20가지+)", price: "₩40,000~60,000", image: "/images/jeolla/boseong-greentea.png" },
      { name: "여수 낭만포차 해산물", place: "이순신광장 낭만포차거리", price: "₩15,000~30,000", image: "/images/jeolla/jeonju-hanok.png" },
    ],
    note: "전라도는 한국 음식의 본고장입니다. 담양 죽녹원·보성 녹차밭 추가 시 1일 더 필요(전주~담양 40분, 담양~보성 1.5시간). 광주는 5.18 기념지·아시아문화전당이 전주에서 1시간. 여수 밤바다는 야간 케이블카+돌산공원+낭만포차 조합이 최고입니다.",
  },
  {
    slug: "gangwon",
    emoji: "⛰",
    moduleCode: "Module F",
    name: "Gangwon",
    nameKr: "강원도",
    duration: "2 Nights · 3 Days",
    cities: "속초·강릉 (춘천 선택)",
    priceMin4: "~430,000원",
    priceMin20: "~220,000원",
    accommodation: "속초 또는 강릉 4성",
    transport: {
      from: "서울",
      method: "KTX",
      duration: "약 1시간 40분",
      cost: "₩27,600",
    },
    heroImage:
      "/images/gangwon/hero.png",
    cardImage:
      "/images/gangwon/card.png",
    tags: ["Seoraksan", "Gangneung Coffee", "East Sea Beach", "Naksansa Temple", "Jumunjin Port", "Pyeongchang Olympic", "Winter Ski"],
    itinerary: [
      {
        day: 1,
        theme: "속초 · 설악산 · 낙산사",
        image: "/images/gangwon/day1.png",
        schedule: [
          { time: "오전 08:00", place: "KTX 강릉 도착", description: "서울에서 약 1시간 40분 · ₩27,600 · 강릉역에서 속초까지 전세버스 약 1시간", image: "/images/gangwon/hero.png" },
          { time: "오전 10:00", place: "설악산 케이블카·신흥사 (설악산국립공원)", description: "권금성 케이블카 ₩16,000 · 09:00~17:00 · 약 1.5시간 · 울산바위 조망 · 신흥사 동종대불 무료 관람 · 가을(10월) 단풍 절정 · 겨울 설경 · 여름 계곡", image: "/images/gangwon/card.png" },
          { time: "오후 13:00", place: "낙산사 (낙산사)", description: "동해 절벽 사찰 · 입장 ₩4,000 · 04:30~19:00 · 약 1시간 · 해수관음상·홍련암 일출 명소 · 의상대에서 동해 파노라마 · 속초에서 남쪽 30분", image: "/images/gangwon/day1.png" },
          { time: "저녁 17:30", place: "속초 중앙시장·먹거리", description: "대게 ₩60,000~120,000 · 오징어순대 ₩10,000 · 닭강정 ₩15,000 · 만석닭강정 줄 서기 명물 · 속초 관광수산시장 활어회도 추천", image: "/images/gangwon/ktx.png" },
        ],
      },
      {
        day: 2,
        theme: "강릉 커피 · 주문진 · 바다",
        image: "/images/gangwon/day2.png",
        schedule: [
          { time: "오전 08:30", place: "주문진항 (주문진항)", description: "동해안 최대 어항 · 수산시장 활어회 ₩30,000~ · BTS 앨범 촬영지 버스정류장 포토존 · 약 1시간 · 속초에서 남쪽 40분", image: "/images/gangwon/seoraksan.png" },
          { time: "오전 10:30", place: "강릉 안목 카페거리", description: "한국 커피 1번지 · 스페셜티 커피 ₩6,000~10,000 · 바다 뷰 카페 줄지어 · 약 1시간 · 테라로사·보헤미안 유명", image: "/images/gangwon/seoraksan.png" },
          { time: "오후 12:00", place: "초당순두부 점심", description: "강릉 초당동 순두부 골목 · ₩10,000~15,000 · 바닷물 간수로 만든 두부 · 원조 초당순두부 추천", image: "/images/gangwon/sokcho-market.png" },
          { time: "오후 13:30", place: "경포대 해변·경포호", description: "강릉 대표 해수욕장 · 무료 · 경포호 산책 · 여름 해수욕/겨울 해변 산책 · 약 1시간", image: "/images/gangwon/day2.png" },
          { time: "저녁 17:00", place: "정동진 일몰 (정동진)", description: "드라마 모래시계 촬영지 · 시간박물관 ₩10,000 · 일출 명소(새벽 방문 추천) · 해안 기차역 포토 · 강릉에서 약 30분", image: "/images/gangwon/gyeongpo.png" },
        ],
      },
      {
        day: 3,
        theme: "강릉 문화 · 평창 올림픽 · 이동",
        image: "/images/gangwon/day3.png",
        schedule: [
          { time: "오전 09:00", place: "오죽헌 (오죽헌)", description: "율곡 이이 생가·신사임당 · 성인 ₩3,000 · 09:00~18:00 · 약 1시간 · 오죽(검은 대나무) 정원 포토", image: "/images/gangwon/anmok-coffee.png" },
          { time: "오전 10:30", place: "평창 올림픽 기념관 (평창올림픽기념관)", description: "2018 동계올림픽 기념관 · 무료 · 10:00~19:00 (월 휴관) · 약 1시간 · 알펜시아·용평 리조트 인근 · 겨울(12~3월) 스키 시즌: 용평 리프트 ₩70,000~100,000 / 렌탈+강습 별도", image: "/images/gangwon/chodang-sundubu.png" },
          { time: "오후 13:00", place: "다음 지역 이동", description: "KTX 강릉역에서 서울 또는 다음 모듈 · 약 1시간 40분", image: "/images/gangwon/gyeongpo.png" },
        ],
      },
    ],
    attractions: [
      { name: "설악산 케이블카·신흥사", fee: "₩16,000", feature: "설악산 권금성 · 09:00~17:00 · 가을 단풍·겨울 설경", included: true, image: "/images/gangwon/jeongdongjin.png" },
      { name: "낙산사 (낙산사)", fee: "₩4,000", feature: "동해 절벽 사찰 · 04:30~19:00 · 해수관음상·홍련암 · 일출 명소", included: true, image: "/images/gangwon/day3.png" },
      { name: "속초 중앙시장", fee: "무료 (음식 별도)", feature: "대게·오징어순대·닭강정 · 만석닭강정 명물", included: true, image: "/images/gangwon/ojukheon.png" },
      { name: "주문진항 (주문진항)", fee: "무료", feature: "동해안 최대 어항 · BTS 포토존 · 수산시장", included: true, image: "/images/gangwon/ojukheon.png" },
      { name: "강릉 안목 카페거리", fee: "무료", feature: "한국 커피 1번지 · 바다 뷰 카페", included: true, image: "/images/gangwon/ktx.png" },
      { name: "경포대 해변·경포호", fee: "무료", feature: "강릉 대표 해수욕장 · 여름 해수욕/겨울 산책", included: true, image: "/images/gangwon/seoraksan.png" },
      { name: "정동진 (정동진)", fee: "무료", feature: "모래시계 촬영지 · 일출 명소 · 시간박물관 ₩10,000", included: true, image: "/images/gangwon/seoraksan.png" },
      { name: "오죽헌 (오죽헌)", fee: "₩3,000", feature: "신사임당·율곡 이이 생가 · 09:00~18:00", included: true, image: "/images/gangwon/sokcho-market.png" },
      { name: "평창 올림픽 기념관", fee: "무료", feature: "2018 동계올림픽 · 10:00~19:00 · 월요일 휴관", included: true, image: "/images/gangwon/gyeongpo.png" },
      { name: "용평 스키리조트 (겨울)", fee: "₩70,000~100,000", feature: "12~3월 스키 시즌 · 28개 슬로프 · 렌탈·강습 별도", included: false, image: "/images/gangwon/anmok-coffee.png" },
      { name: "춘천 닭갈비+남이섬", fee: "₩19,000(남이섬)", feature: "겨울연가 성지 · 닭갈비 ₩15,000~ · 강릉에서 1.5시간", included: false, image: "/images/gangwon/gyeongpo.png" },
    ],
    food: [
      { name: "속초 대게", place: "속초·장사항", price: "₩60,000~120,000", image: "/images/gangwon/jeongdongjin.png" },
      { name: "오징어순대·오징어무침", place: "속초 시장 명물", price: "₩10,000~20,000", image: "/images/gangwon/ojukheon.png" },
      { name: "강릉 초당순두부", place: "초당동 순두부 골목", price: "₩10,000~15,000", image: "/images/gangwon/ojukheon.png" },
      { name: "강릉 커피", place: "안목 카페거리 스페셜티", price: "₩6,000~10,000", image: "/images/gangwon/seoraksan.png" },
    ],
    note: "강원도는 여름(7~8월)에는 경포대·주문진 해변, 겨울(12~3월)에는 용평·알펜시아 스키가 핵심입니다. 성수기 단가가 크게 오르므로 봄(벚꽃)·가을(단풍) 추천. 겨울 스키 추가 시 1일 확보 필요(리프트+렌탈+강습 총 ₩150,000~200,000). 낙산사 일출은 새벽 방문 필요. 춘천(닭갈비+남이섬) 추가 시 강릉에서 1.5시간 소요.",
  },
  {
    slug: "jeju",
    emoji: "🌺",
    moduleCode: "Module G",
    name: "Jeju Island",
    nameKr: "제주도",
    duration: "2 Nights · 3 Days",
    cities: "제주 전역",
    priceMin4: "~520,000원",
    priceMin20: "~280,000원",
    accommodation: "제주 4성 리조트 또는 시내 호텔",
    transport: {
      from: "서울/부산",
      method: "국내선 항공",
      duration: "약 1시간",
      cost: "₩80,000~140,000",
    },
    heroImage:
      "/images/jeju/hero.png",
    cardImage:
      "/images/jeju/card.png",
    tags: ["Seongsan Ilchulbong", "Udo Island", "Manjanggul Cave", "Black Pork BBQ", "Honeymoon", "O'sulloc Tea", "Hallim Park", "Seasonal Flowers"],
    itinerary: [
      {
        day: 1,
        theme: "제주 도착 · 서부 · 한림",
        image: "/images/jeju/day1.png",
        schedule: [
          { time: "오전 10:00", place: "국내선 도착", description: "제주공항 도착 · 서울/부산에서 약 1시간 · ₩80,000~140,000", image: "/images/jeju/hero.png" },
          { time: "오전 11:00", place: "오설록 티뮤지엄 (오설록티뮤지엄)", description: "제주 유기농 녹차밭 · 무료 입장 · 09:00~18:00(동절기)/~19:00(하절기) · 약 1시간 · 녹차 아이스크림·녹차 라떼 인기 · 녹차밭 포토존 인스타 명소 · 이니스프리 제주하우스 바로 옆", image: "/images/jeju/card.png" },
          { time: "오후 13:00", place: "한림공원 (한림공원)", description: "아열대 정원·동굴·야자수 · 성인 ₩12,000 / 청소년 ₩8,000 · 09:00~18:00(계절별 상이) · 약 1.5시간 · 협재굴·쌍용굴 용암동굴 포함 · 봄 매화·수선화/여름 수국/가을 억새 · 단체 20+ 할인 ₩2,000", image: "/images/jeju/day1.png" },
          { time: "오후 15:00", place: "협재해변·금능해변", description: "에메랄드빛 바다 · 무료 · 제주 서부 최고 해변 · 비양도 조망 · 포토스팟", image: "/images/jeju/airport.png" },
          { time: "저녁 18:00", place: "흑돼지 BBQ", description: "제주 토종 흑돼지 숯불 구이 · ₩20,000~35,000 · 제주시 흑돼지 거리 추천 · 숯불에 구운 고기+멜젓 조합이 제주 정통", image: "/images/jeju/seongsan.png" },
        ],
      },
      {
        day: 2,
        theme: "동부 · 성산일출봉 · 우도",
        image: "/images/jeju/day2.png",
        schedule: [
          { time: "새벽 05:30", place: "성산일출봉 일출 (성산일출봉)", description: "유네스코 세계자연유산 · 성인 ₩5,000 · 일출 시간에 맞춰 개장(여름 04:30~/겨울 06:00~) · 정상까지 약 25분 등산 · 분화구 전경 장관 · 봄(3~4월) 유채꽃+일출봉 조합 인스타 명소", image: "/images/jeju/seongsan.png" },
          { time: "오전 08:30", place: "우도 (우도)", description: "성산포에서 도선 15분 · 왕복 ₩14,500 · 전기자전거 렌탈 ₩20,000 · 약 3시간 · 하우목동해변·서빈백사 에메랄드 바다 · 땅콩 아이스크림 필수 · 해녀 물회 점심", image: "/images/jeju/seongsan.png" },
          { time: "오후 14:00", place: "만장굴 (만장굴)", description: "유네스코 용암동굴 · 성인 ₩4,000 · 09:00~18:00 · 약 1시간 · 7.4km 중 1km 공개 · 동굴 내부 11~21도 유지 · 용암석주 포토", image: "/images/jeju/food-heukdwaeji.png" },
          { time: "오후 16:00", place: "미로공원 (제주미로공원/메이즈랜드)", description: "세계 최장 돌미로 · 성인 ₩11,000 · 09:00~18:00 · 약 40분 · 제주 돌문화 테마 미로 체험 · 가족 인기 (선택)", image: "/images/jeju/day2.png" },
          { time: "저녁 18:00", place: "해산물 저녁", description: "제주 해산물 코스 · 전복죽·회·해물뚝배기 · ₩30,000~50,000 · 성산 인근 또는 서귀포 이동", image: "/images/jeju/seongsan.png" },
        ],
      },
      {
        day: 3,
        theme: "서귀포 · 중문 · 출발",
        image: "/images/jeju/day3.png",
        schedule: [
          { time: "오전 08:30", place: "천지연폭포 (천지연폭포)", description: "서귀포 3단 폭포 · 성인 ₩2,000 · 09:00~22:00 · 약 40분 · 야간 조명 산책로 · 천연기념물 담팔수 군락", image: "/images/jeju/udo.png" },
          { time: "오전 09:30", place: "서귀포 매일올레시장 (서귀포매일올레시장)", description: "제주 최대 전통시장 · 무료 · 07:00~20:00 · 흑돼지 꼬치·감귤주스·흑돼지 만두 · 기념품 쇼핑 · 약 40분", image: "/images/jeju/manjanggul.png" },
          { time: "오전 11:00", place: "주상절리 (주상절리)", description: "현무암 주상절리 절벽 · 성인 ₩2,000 · 09:00~18:00 · 약 30분 · 중문 해안 기둥 절경 · 파도 치는 장면이 포토 포인트", image: "/images/jeju/seongsan.png" },
          { time: "오후 12:00", place: "테디베어뮤지엄 (테디베어뮤지엄)", description: "중문 관광단지 · 성인 ₩12,000 · 09:00~18:00 · 약 1시간 · 역사·예술 테디베어 전시 · 가족 인기 (선택)", image: "/images/jeju/food-hoe.png" },
          { time: "오후 14:00", place: "제주공항 출발", description: "서귀포에서 공항까지 약 1시간 · 귀국 또는 다음 지역 이동", image: "/images/jeju/day3.png" },
        ],
      },
    ],
    attractions: [
      { name: "오설록 티뮤지엄 (오설록)", fee: "무료", feature: "제주 녹차밭 · 09:00~18:00 · 녹차 아이스크림 · 인스타 명소", included: true, image: "/images/jeju/cheonjiyeon.png" },
      { name: "한림공원 (한림공원)", fee: "₩12,000", feature: "아열대 정원·용암동굴 · 09:00~18:00 · 단체 할인 ₩2,000", included: true, image: "/images/jeju/olle-trail.png" },
      { name: "성산일출봉 (유네스코)", fee: "₩5,000", feature: "유네스코 분화구 · 일출 시 개장 · 봄 유채꽃 배경 명소", included: true, image: "/images/jeju/jusangjeolli.png" },
      { name: "우도 왕복 도선", fee: "₩14,500", feature: "에메랄드 바다 섬 · 전기자전거 ₩20,000 · 땅콩 아이스크림", included: true, image: "/images/jeju/cheonjiyeon.png" },
      { name: "만장굴 (유네스코)", fee: "₩4,000", feature: "용암동굴 · 09:00~18:00 · 동굴 내부 11~21도", included: true, image: "/images/jeju/airport.png" },
      { name: "천지연폭포", fee: "₩2,000", feature: "서귀포 폭포 · 09:00~22:00 · 야간 조명 산책", included: true, image: "/images/jeju/seongsan.png" },
      { name: "주상절리 (중문)", fee: "₩2,000", feature: "현무암 기둥 절벽 · 09:00~18:00", included: true, image: "/images/jeju/seongsan.png" },
      { name: "서귀포 매일올레시장", fee: "무료", feature: "제주 최대 전통시장 · 흑돼지 꼬치·감귤주스", included: true, image: "/images/jeju/seongsan.png" },
      { name: "테디베어뮤지엄 (중문)", fee: "₩12,000", feature: "역사·예술 테디베어 · 09:00~18:00 · 가족 인기", included: false, image: "/images/jeju/udo.png" },
      { name: "메이즈랜드 (미로공원)", fee: "₩11,000", feature: "세계 최장 돌미로 · 09:00~18:00 · 제주 돌문화 테마", included: false, image: "/images/jeju/manjanggul.png" },
      { name: "한라산 등반", fee: "무료", feature: "제주 최고봉 1,950m · 겨울 설경 · 사전 예약 필수", included: false, image: "/images/jeju/cheonjiyeon.png" },
      { name: "에코랜드", fee: "₩14,000", feature: "숲 기차 테마파크 · 가족 인기", included: false, image: "/images/jeju/jusangjeolli.png" },
      { name: "제주 승마 체험", fee: "₩35,000", feature: "제주 전통 조랑말 체험", included: false, image: "/images/jeju/olle-trail.png" },
    ],
    food: [
      { name: "흑돼지 BBQ", place: "제주 시내 흑돼지 거리", price: "₩20,000~35,000", image: "/images/jeju/cheonjiyeon.png" },
      { name: "갈치조림·구이", place: "제주 은갈치 전문점", price: "₩25,000~40,000", image: "/images/jeju/seongsan.png" },
      { name: "해산물 회 (우도)", place: "우도 홍조단괴 해변", price: "₩30,000~50,000", image: "/images/jeju/hallasan.png" },
      { name: "한치물회 (여름)", place: "제주 시내 물회 전문점", price: "₩15,000~25,000", image: "/images/jeju/ecoland.png" },
    ],
    note: "제주도는 국내선 항공권 원가가 포함됩니다. 성수기(7~8월) 항공+숙박 조기예약 필수. 계절별 꽃: 봄(3~4월) 유채꽃·벚꽃 — 성산일출봉·산방산 배경 명소, 여름(6~7월) 수국 — 휴애리자연공원·카멜리아힐, 가을(10~11월) 억새 — 산굼부리·새별오름, 겨울(12~2월) 한라산 설경·동백꽃. 인스타 명소: 협재해변 에메랄드 바다, 사계해안 산방산+유채꽃, 카페 더몽 해안뷰, 애월 카페거리. 허니문·신혼여행 고객에게 단독 제주 또는 서울+제주 조합 우선 추천.",
  },
];

export function getModuleBySlug(slug: string): TourModule | undefined {
  return modules.find((m) => m.slug === slug);
}

export const combinations = [
  {
    badge: "Most Popular",
    badgeColor: "red" as const,
    title: "Classic Korea",
    regions: "🏙 Seoul + 🌊 Gyeongsang",
    duration: "5 Nights · 6 Days",
    description:
      "The perfect first Korea experience. Modern Seoul meets ancient Silla history, Busan beaches, and the freshest seafood in Korea.",
  },
  {
    badge: "Honeymoon Pick",
    badgeColor: "sage" as const,
    title: "Seoul & Jeju",
    regions: "🏙 Seoul + 🌺 Jeju Island",
    duration: "5 Nights · 6 Days",
    description:
      "K-drama romance meets UNESCO volcanic paradise. Ideal for couples, newlyweds, and families seeking natural wonder.",
  },
  {
    badge: "Food & Culture",
    badgeColor: "gold" as const,
    title: "Full South Korea",
    regions: "🏙 Seoul + 🌊 Gyeongsang + 🌿 Jeolla",
    duration: "8 Nights · 9 Days",
    description:
      "For those who want to truly know Korea. Ancient kingdoms, the world's best street food, bamboo forests, and coastal night views.",
  },
  {
    badge: "Family Favourite",
    badgeColor: "gold" as const,
    title: "Family Adventure",
    regions: "🏙 Seoul + 🏯 Metropolitan + 🌺 Jeju",
    duration: "7 Nights · 8 Days",
    description:
      "Everland theme park, Nami Island, Seoul palaces, and Jeju's volcanic wonder. Children and grandparents equally delighted.",
  },
  {
    badge: "Nature & Healing",
    badgeColor: "gold" as const,
    title: "Nature Escape",
    regions: "🏙 Seoul + ⛰ Gangwon + 🌺 Jeju",
    duration: "7 Nights · 8 Days",
    description:
      "Korea's most breathtaking natural scenery — Seoraksan mountains, East Sea beaches, and Jeju's volcanic coastline.",
  },
  {
    badge: "Grand Tour",
    badgeColor: "gold" as const,
    title: "All of Korea",
    regions: "🏙+🏯+🌊+🌿+⛰+🌺",
    duration: "13 Nights · 14 Days",
    description:
      "The ultimate Korean journey — all 6 regions, every UNESCO site, every cuisine, every coastline. A once-in-a-lifetime experience.",
  },
];
