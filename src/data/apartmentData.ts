import { UnitTypeInfo, PremiumItem, LandscapeFeature, CommunityFloor, SkyCommunityItem } from '../types';

export const AGENT_INFO = {
  name: "김세비 실장",
  phone: "1800-6559",
  cleanPhone: "18006559",
  role: "아파트 분양",
  roleDetail: "엄궁역 트라비스 하늘채 공식 분양 총괄상담",
  feature: "로얄층 및 VIP 담당",
  slogan: "서부산의 중심, 5,000세대 브랜드 타운의 완성작",
  subSlogan: "5호선 엄궁역 단지 내 직통연결 & 평지 1,670세대 대단지",
  projectName: "엄궁역 트라비스 하늘채",
  brand: "코오롱글로벌 하늘채",
  benefits: [
    "계약금 5% (1차 1천만원 정액제)",
    "중도금 60% 전액 무이자 혜택",
    "사상 최초 전세대 1:1 개별창고 무상 제공",
    "세대당 1.5대 광폭 주차공간 확보",
    "로얄층 & 잔여 로얄동 우선 선점 특별상담"
  ]
};

export const PROJECT_OVERVIEW = {
  title: "사업개요",
  projectName: "엄궁1구역 재개발정비사업 (엄궁역 트라비스 하늘채)",
  location: "부산광역시 사상구 엄궁동 412번지 일원",
  siteArea: "78,087.00 ㎡ (23,621.32 평)",
  totalFloorArea: "289,856.1352 ㎡ (87,681.48 평)",
  buildingCoverageRate: "16.39%",
  floorAreaRatio: "261.32%",
  scale: "지하 5층 ~ 지상 최고 36층, 아파트 13개동",
  totalUnits: "총 1,670 세대 (일반분양 1,061 세대)",
  parkingCapacity: "총 2,505대 (세대당 1.5대) *근린생활시설 제외",
  moveInDate: "2030년 02월 예정",
  constructor: "코오롱글로벌(주)",
  unitBreakdown: [
    { type: "59A1", generalUnits: 206, ratio: "30.7%", exclusiveM2: 59.9800, exclusivePy: 18.14, supplyM2: 81.8251, supplyPy: 24.75 },
    { type: "59A2", generalUnits: 93, ratio: "30.7%", exclusiveM2: 59.9846, exclusivePy: 18.15, supplyM2: 81.3258, supplyPy: 24.60 },
    { type: "59B", generalUnits: 27, ratio: "30.7%", exclusiveM2: 59.9847, exclusivePy: 18.15, supplyM2: 81.7958, supplyPy: 24.74 },
    { type: "74A", generalUnits: 6, ratio: "2.6%", exclusiveM2: 74.9802, exclusivePy: 22.68, supplyM2: 100.9161, supplyPy: 30.53 },
    { type: "74B", generalUnits: 22, ratio: "2.6%", exclusiveM2: 74.9891, exclusivePy: 22.68, supplyM2: 102.1638, supplyPy: 30.90 },
    { type: "84A", generalUnits: 381, ratio: "64.8%", exclusiveM2: 84.9869, exclusivePy: 25.71, supplyM2: 114.5397, supplyPy: 34.65 },
    { type: "84B", generalUnits: 271, ratio: "64.8%", exclusiveM2: 84.9808, exclusivePy: 25.71, supplyM2: 115.0011, supplyPy: 34.79 },
    { type: "84C", generalUnits: 36, ratio: "64.8%", exclusiveM2: 84.9896, exclusivePy: 25.71, supplyM2: 115.4646, supplyPy: 34.93 },
    { type: "101B", generalUnits: 17, ratio: "1.6%", exclusiveM2: 101.2177, exclusivePy: 30.62, supplyM2: 137.4521, supplyPy: 41.58 },
    { type: "133PENT", generalUnits: 1, ratio: "0.2%", exclusiveM2: 133.3409, exclusivePy: 40.34, supplyM2: 183.2378, supplyPy: 55.43 },
    { type: "155PENT", generalUnits: 1, ratio: "0.2%", exclusiveM2: 155.2873, exclusivePy: 46.97, supplyM2: 214.2011, supplyPy: 64.80 },
  ]
};

export const LOCATION_INFO = {
  title: "위치도 및 프리미엄 입지환경",
  description: "사상~하단선 엄궁역 단지 직통 연결, 초품아 교육특구, 더현대 부산 & 엄궁 복합체육센터 인프라",
  trafficSubway: {
    name: "사상-하단선 5호선 엄궁역 [3공구]",
    status: "2027년 12월 개통 예정 (3공구 공정률 97.8% / 전체 공정률 76.77%)",
    directConnection: "단지 내 직통연결 통로 (비 한 방울 안 맞고 단지 지하주차장·상가로 바로 연결, 부산 내 0.5% 극희소)",
    connections: [
      { to: "김해공항", time: "20분 (종전 40분)" },
      { to: "덕천역", time: "20분 (종전 44분)" },
      { to: "부전역", time: "25분 (종전 55분)" },
      { to: "서면역", time: "25분 (종전 45분)" },
      { to: "자갈치역", time: "20분 (종전 35분)" },
    ]
  },
  trafficRoads: [
    { name: "엄궁대교 (2030년 예정)", desc: "에코델타시티, 녹산공단 30분 → 15분 단축" },
    { name: "승학터널 (계획)", desc: "북항 재개발구역 30분 → 10분 쾌속 진입" },
    { name: "부전~마산 복선전철 (공사중)", desc: "경남권 광역 철도망 허브 연결" },
    { name: "부산형 급행철도 BuTX (계획)", desc: "가덕도신공항~북항~오시리아 고속 급행" },
  ],
  education: {
    title: "유해시설 Zero 도보 2분 초품아",
    schoolDistance: [
      { name: "엄궁초등학교 (그린스마트 미래학교 선정)", dist: "26m (도보 2분, 큰길 건너지 않는 초품아)" },
      { name: "학진초등학교", dist: "487m" },
      { name: "동궁초등학교", dist: "670m" },
      { name: "엄궁중학교", dist: "777m" },
      { name: "학장중학교", dist: "1.0km" },
      { name: "구덕고등학교", dist: "1.1km" },
      { name: "부산일과학고등학교", dist: "인접 학군" },
      { name: "동아대학교 승학캠퍼스", dist: "인접 대학" },
      { name: "자율형 공립고 / 기숙형 학교 예정", dist: "엄궁동 산 75-2 일원 부지 확정" },
    ]
  },
  amenities: [
    { name: "롯데마트 사상점", dist: "120m (도보 2분)" },
    { name: "엄궁 전통시장", dist: "80m (도보 1분)" },
    { name: "엄궁 유수지 공원", dist: "500m" },
    { name: "엄궁 복합문화체육센터 (워터파크 구비)", dist: "510m (2027년 예정)" },
    { name: "더현대 2.0 부산", dist: "인접 2km (2027년 예정 컬처 라이프)" },
    { name: "엄궁 농수산물 도매시장", dist: "590m" },
    { name: "사상 센텀병원", dist: "600m" },
    { name: "사상구청", dist: "950m" },
    { name: "승학산 둘레길 & 삼락생태공원", dist: "힐링 숲세권 & 수변공원" },
  ]
};

export const SITE_PLAN_INFO = {
  title: "단지배치도",
  description: "남향 위주의 단지배치와 최대 76m 넉넉한 인동거리, 지형 단차를 극복한 혁신 평지 설계",
  totalBuildings: "13개동 (101동 ~ 113동)",
  features: [
    { label: "단지 내 직통연결", value: "엄궁역(5호선)과 지하 1~2층 주차장 및 상가 엘리베이터로 직결" },
    { label: "평지 대단지 랜드마크", value: "고바위 없는 평지 지형 설계로 어르신, 유아 이동 편의 극대화" },
    { label: "최대 76.16m 인동거리", value: "동간 간격 54m~76.16m 확보로 일조권 및 조망권, 세대 프라이버시 보장" },
    { label: "필로티 설계", value: "단지 지상부 개방감 확보 및 바람길 조성" },
    { label: "스카이 커뮤니티", value: "102동 22층(라운지&게스트하우스), 110동 33층(라운지&파티룸)" },
    { label: "드롭존 & 키즈스테이션", value: "105동 및 110동 앞 안심 승하차 구역 설치" }
  ],
  buildings: [
    { dong: "101동", floors: "32층", types: ["84A", "84B"], elevators: "2호조합 2대" },
    { dong: "102동", floors: "36층", types: ["84A", "84B", "101A", "101B"], elevators: "스카이커뮤니티 전용 E/V + 3호조합 3대", note: "22F 스카이라운지 & 게스트하우스" },
    { dong: "103동", floors: "36층", types: ["84A", "84B", "101A", "101B", "155PENT"], elevators: "2호조합 2대 / 3호조합 3대" },
    { dong: "104동", floors: "29층", types: ["84A", "84B", "84C"], elevators: "2호조합 2대 / 3호조합 2대" },
    { dong: "105동", floors: "22층", types: ["59A2", "임대"], elevators: "2호조합 1대" },
    { dong: "106동", floors: "29층", types: ["59A1"], elevators: "2호조합 1대 / 2호조합 1대" },
    { dong: "107동", floors: "26층", types: ["74A", "74B", "84A", "84B"], elevators: "2호조합 1대 / 3호조합 2대" },
    { dong: "108동", floors: "26층", types: ["59A1", "59B"], elevators: "2호조합 2대 / 3호조합 2대" },
    { dong: "109동", floors: "29층", types: ["84A", "84B"], elevators: "2호조합 2대 / 3호조합 3대" },
    { dong: "110동", floors: "35층", types: ["84A", "84B", "101A", "101B"], elevators: "스카이커뮤니티 전용 E/V + 3호조합 3대", note: "33F 스카이라운지 & 파티룸" },
    { dong: "111동", floors: "29층", types: ["59A1"], elevators: "2호조합 2대 / 2호조합 2대" },
    { dong: "112동", floors: "28층", types: ["84A", "84B", "84C", "133PENT"], elevators: "2호조합 2대 / 3호조합 3대" },
    { dong: "113동", floors: "22층", types: ["59A2"], elevators: "2호조합 1대 / 2호조합 1대" },
  ]
};

export const PREMIUM_7_ITEMS: PremiumItem[] = [
  {
    number: 1,
    title: "단지 내 직통연결 프리미엄",
    subTitle: "5호선 엄궁역(예정)과 단지가 직접 연결되는 초역세권",
    tag: "지하철 직결",
    description: "부산 지하철 108개 역사 중 아파트 직결 단지는 단 0.5% 미만! 비 한 방울 맞지 않고 단지 지하주차장에서 지하철 역사로 바로 통하는 특권.",
    points: [
      "사상~하단선 5호선 엄궁역 2027년 개통 예정 (공정률 97.8% 진행)",
      "단지 상가 및 지하주차장(B1~B2F)과 연결통로 설치",
      "서면 25분, 김해공항 20분, 부산역 15분 이내 쾌속 이동"
    ],
    icon: "Train",
    badge: "부산 상위 0.5% 특권"
  },
  {
    number: 2,
    title: "쾌속 교통망 허브",
    subTitle: "에코델타시티~녹산~북항을 잇는 사통팔달 중심축",
    tag: "광역 교통망",
    description: "엄궁대교와 승학터널 개통으로 서부산 스마트시티와 도심, 북항을 10~15분대로 잇는 핵심 교통 허브로 도약합니다.",
    points: [
      "엄궁대교(예정): 미음·녹산 국가산단 30분 → 15분",
      "승학터널(계획): 부산 북항 30분 → 10분 쾌속 주파",
      "부전~마산 복선전철 및 차세대 부산급행철도 BuTX 추진"
    ],
    icon: "Navigation",
    badge: "동서축 중심 허브"
  },
  {
    number: 3,
    title: "평지 대단지 랜드마크",
    subTitle: "엄궁동 약 5,000세대 브랜드 타운 내 대표 평지 1,670세대",
    tag: "평지 대단지",
    description: "부산에서 희소성 높은 평지 대단지! 언덕길 고바위 단지와 차원이 다른 주거 편의성과 시세 상승 프리미엄(평지 프리미엄 최대 1.5억 차이 실증)을 누립니다.",
    points: [
      "13개동 지하 5층~지상 36층 랜드마크 스케일",
      "경사 없는 완만한 평지 보행 환경으로 유모차, 노약자 안전성",
      "대단지 특유의 풍부한 녹지율(16.39% 낮은 건폐율)과 쾌적성"
    ],
    icon: "Building2",
    badge: "희소 평지 랜드마크"
  },
  {
    number: 4,
    title: "최상급 라이프 인프라",
    subTitle: "더현대 부산(2027 예정) & 워터파크 갖춘 복합문화센터",
    tag: "쇼핑·문화 인프라",
    description: "단지 바로 앞 롯데마트(120m)와 엄궁전통시장(80m)은 물론, 워터파크가 포함된 엄궁 복합체육센터와 더현대 부산까지 도보권 프리미엄.",
    points: [
      "더현대 2.0 부산(2027년 예정): 명품 라이프스타일 복합문화몰",
      "워터파크 구비 엄궁 복합문화체육센터(2027년 준공 예정)",
      "롯데마트 사상점 도보 2분, 엄궁전통시장 도보 1분"
    ],
    icon: "ShoppingBag",
    badge: "몰세권 & 문화특권"
  },
  {
    number: 5,
    title: "하이엔드 스카이 커뮤니티",
    subTitle: "서부산 최초 지상 22층 & 33층 듀얼 스카이라운지",
    tag: "스카이 라이프",
    description: "해운대 엘시티 등 최고급 하이엔드 아파트에만 적용되던 스카이 커뮤니티를 사상 최초로 도입! 승학산 낙조와 서부산 도심 파노라마 뷰를 매일 누립니다.",
    points: [
      "102동 22층: 22F 스카이라운지 & 호텔급 게스트하우스 2개실",
      "110동 33층: 33F 스카이라운지 & 프라이빗 파티룸",
      "승학산 황금빛 낙조뷰와 도심 야경 파노라마를 담은 특화 전망"
    ],
    icon: "Sparkles",
    badge: "서부산 최초 도입"
  },
  {
    number: 6,
    title: "하이엔드 특화설계",
    subTitle: "세대당 1.5대 광폭 주차 & 전세대 1:1 개별창고 기본제공",
    tag: "명품 공간설계",
    description: "주차 갈등을 근본적으로 해소한 세대당 1.5대 주차대수와 계절용품·레저장비를 보관할 수 있는 전세대 1:1 개별창고를 무상 증정합니다.",
    points: [
      "사상 최초 전세대 1대1 지하 개별창고 전세대 기본 제공",
      "세대당 1.5대 주차 (총 2,505대) 광폭 주차면 확보",
      "원패스 시스템, 모바일 스마트 도어록, 4BAY 특화 판상형"
    ],
    icon: "ShieldCheck",
    badge: "1.5대 주차 & 개별창고"
  },
  {
    number: 7,
    title: "완벽한 투자가치",
    subTitle: "브랜드·역세권·대단지·신축·평지·초품아 6박자 완성",
    tag: "미래가치 압도",
    description: "인근 신규 분양가(84타입 8~9억대) 대비 약 3년 전 수준의 착한 분양가(6억 중반대)로 압도적인 시세차익과 안정적인 자산가치를 보장합니다.",
    points: [
      "3년 전 분양가 수준의 합리적인 공급가격 (평당 1,900만원대)",
      "초등학교 도보 2분 안전 통학로 (초품아 아파트 시세방어 및 상승률 1위)",
      "엄궁 5,000세대 브랜드타운 대장주 랜드마크로 미래가치 극대화"
    ],
    icon: "TrendingUp",
    badge: "착한 분양가 & 시세차익"
  }
];

export const LANDSCAPE_FEATURES: LandscapeFeature[] = [
  {
    number: 1,
    name: "워터라운지 (Water Lounge)",
    subtitle: "일상의 피로를 씻어내는 청량한 수변 휴식 공간",
    description: "물소리가 잔잔하게 흐르는 감각적인 수경 시설과 편안한 티하우스 벤치가 결합되어 도심 속 휴양지 같은 여유를 선사합니다.",
    details: ["단지 중심 수경시설 조성", "청량한 분수 및 캐스케이드 연출", "주민 힐링 데크 및 수변 티라운지"],
    tag: "힐링 수변공간"
  },
  {
    number: 2,
    name: "키즈스테이션 (Kids Station)",
    subtitle: "엄마와 아이가 안심하고 머무는 안전 승하차 공간",
    description: "날씨와 상관없이 안전하게 통학 버스를 기다릴 수 있는 맘스 스테이션 및 실내 대기 라운지 설계로 자녀의 안전을 지킵니다.",
    details: ["스쿨버스 안심 드롭존 연계", "냉난방 시설 구비 안심 대기 라운지", "CCTV 및 안전 펜스 완비"],
    tag: "안심 등하교"
  },
  {
    number: 3,
    name: "잔디광장 (Central Lawn)",
    subtitle: "탁 트인 자연 속 이웃과 소통하며 여유를 만끽하는 열린 마당",
    description: "햇살이 가득한 넓은 천연 잔디마당으로, 가족 단위 피크닉과 단지 내 다채로운 문화 커뮤니티 행사가 이루어지는 중심 공간입니다.",
    details: ["대규모 오픈 스페이스 잔디광장", "사계절 초화원과 티가든 산책로", "이웃 간의 소통과 힐링의 장"],
    tag: "중앙 오픈스페이스"
  },
  {
    number: 4,
    name: "운동시설 (Outdoor Fitness)",
    subtitle: "활기찬 일상을 위한 다양한 운동기구와 건강 산책로",
    description: "울창한 수목 사이로 이어지는 조깅 트랙과 다양한 야외 피트니스 기구를 배치하여 365일 건강한 라이프를 지원합니다.",
    details: ["전신 스트레칭 및 유산소 운동기구", "순환형 건강 조깅·워킹 트랙", "피톤치드 수목 식재 숲세권 산책로"],
    tag: "건강 웰빙"
  },
  {
    number: 5,
    name: "어린이놀이터 (Theme Playgrounds)",
    subtitle: "아이들의 상상력과 모험심을 키워주는 안전하고 즐거운 테마 놀이공간",
    description: "친환경 완충 바닥재와 창의적인 놀이시설을 갖춘 1~3호 테마 놀이터가 단지 곳곳에 배치되어 아이들에게 매일 새로운 즐거움을 줍니다.",
    details: ["유아놀이터 및 어린이 테마 모험시설", "친환경 탄성 바닥 시공으로 부상 방지", "보호자 조망 휴게 쉼터 연계"],
    tag: "창의 테마파크"
  }
];

export const COMMUNITY_FLOORS: CommunityFloor[] = [
  {
    floor: "지하 2층 (B2F)",
    theme: "Family & KIDS Community",
    subtitle: "아이의 성장은 가깝게, 엄마 아빠의 일상은 여유롭게",
    facilities: ["국공립 어린이집", "시니어 클럽 (경로당)", "키즈 케어존"],
    description: "어린 자녀를 안심하고 맡길 수 있는 단지 내 어린이집과 어르신들의 친목 도모를 위한 품격 높은 시니어 전용 공간을 마련했습니다.",
    highlights: ["영유아 맞춤 안전 설계", "자연 채광 및 환기 고려", "세대 간 어울림 공간"]
  },
  {
    floor: "지하 3층 (B3F)",
    theme: "EDU & Culture Community",
    subtitle: "아이의 즐거움과 자신만의 여유를 통해 삶을 풍요롭게",
    facilities: ["북카페 (작은도서관)", "남/여 독서실 및 스터디룸", "1인 크리에이터 스튜디오", "키즈카페", "입주민 관리사무소"],
    description: "독서와 집중 학습을 위한 스터디 공간과 취미·미디어 제작을 위한 1인 스튜디오, 아이들이 뛰놀 수 있는 키즈카페를 통합 배치했습니다.",
    highlights: ["조용하고 쾌적한 학습 분위기 조성", "개인 방송 및 영상 제작 스튜디오", "온 가족이 함께하는 복합 문화 북카페"]
  },
  {
    floor: "지하 4층 (B4F)",
    theme: "Sports & Relax Community",
    subtitle: "하루의 휴식과 자신만의 활력을 얻게 하는 원스톱 스포츠존",
    facilities: ["실내 골프연습장 (GDR+)", "스크린골프 룸", "피트니스 센터", "GX 룸", "탁구장", "단지 내 호텔식 남/여 사우나", "다함께돌봄센터", "공동육아나눔터"],
    description: "날씨와 상관없이 즐기는 대형 실내 골프연습장과 최신 머신을 완비한 피트니스, 하루의 피로를 푸는 건식·습식 단지 내 사우나까지 풀패키지로 제공합니다.",
    highlights: ["비거리 분석 GDR 타석 및 스크린골프", "고급 온열 탕 및 건식 사우나 설비", "체계적인 맞춤 운동 공간"]
  }
];

export const SKY_COMMUNITY_INFO: SkyCommunityItem[] = [
  {
    floor: "지상 22층",
    building: "102동",
    title: "22F Sky Lounge & Guest House",
    features: ["서부산 조망 스카이라운지", "호텔급 게스트하우스 1", "호텔급 게스트하우스 2", "스카이 전용 엘리베이터"],
    viewPoints: ["승학산 웅장한 능선과 사계절 파노라마 뷰", "낙동강 수변과 일몰이 빚어내는 황금빛 낙조"],
    description: "외부 귀빈이나 친척, 지인을 모실 수 있는 호텔 스위트룸 수준의 독립형 게스트하우스와 입주민 누구나 차 한 잔의 여유를 즐길 수 있는 스카이라운지가 위치합니다."
  },
  {
    floor: "지상 33층",
    building: "110동",
    title: "33F Sky Lounge & Party Room",
    features: ["초고층 스카이라운지", "프라이빗 다이닝 파티룸", "야경 특화 테라스", "스카이 전용 엘리베이터"],
    viewPoints: ["서부산 밤하늘을 수놓는 화려한 도심 조명 야경", "낙동강 대교들의 눈부신 조명 라이트업 타임랩스"],
    description: "가족 행사, 기념일, 지인 모임을 최고급 분위기에서 열 수 있는 전용 파티룸과 밤이 되면 환상적인 야경이 펼쳐지는 최상층 스카이라운지입니다."
  }
];

export const SYSTEM_INFO = {
  title: "엄궁역 트라비스 하늘채만의 특화 시스템",
  categories: [
    {
      title: "생활편의 시스템 (Comfortable Life)",
      desc: "세심하게 배려하는 생활 편의 기술",
      items: [
        { name: "전열교환 환기시스템", detail: "오염된 공기를 배출하고 신선한 외기를 필터링해 유입" },
        { name: "주방 절수페달", detail: "발터치로 간편하게 물을 공급/차단하여 절수 효과 극대화" },
        { name: "주차유도 시스템", detail: "비어있는 주차면을 색상 LED로 안내하여 빠른 주차 가능" },
        { name: "번호인식 차량통제", detail: "입주민 차량 자동 통과 및 외부 차량 통제로 철저한 보안" },
        { name: "전기차 급속·완속 충전", detail: "친환경 전기차 시대를 위한 넉넉한 충전 스테이션 구축" }
      ]
    },
    {
      title: "웰빙·안전 시스템 (Well-Being & Safe Life)",
      desc: "365일 빈틈없이 지켜주는 안전 방범망",
      items: [
        { name: "200만 화소 고화질 CCTV", detail: "단지 내 사각지대 없이 24시간 안전 감시 녹화" },
        { name: "전자경비 및 무인택배", detail: "비대면으로 안전하게 택배 수령 및 외부인 출입 통제" },
        { name: "욕실 스피커폰", detail: "욕실 내 긴급 상황 발생 시 비상 콜 및 통화 기능" },
        { name: "도어 카메라 & 스마트 벨", detail: "현관 앞 거동 수상자 감지 및 방문자 영상 자동 저장" },
        { name: "지하주차장 비상벨", detail: "위급 상황 시 비상벨 작동으로 방제실 즉시 연결" }
      ]
    },
    {
      title: "이코노미 에너지 절감 (Economic Life)",
      desc: "에너지와 관리비를 효과적으로 아껴주는 친환경 설계",
      items: [
        { name: "세대 및 공용부 100% LED", detail: "형광등 대비 전력 소모를 대폭 줄이고 수명 연장" },
        { name: "일괄소등 스위치", detail: "외출 시 한 번의 터치로 가스 차단, 조명 소등, 승강기 호출" },
        { name: "주방 통합스위치", detail: "주방 대기전력 자동 차단 및 안전 제어" },
        { name: "지하주차장 디밍제어", detail: "차량 동선에 따라 조도가 자동 조절되어 공동전기료 절감" },
        { name: "승강기 회생제동 에너지", detail: "엘리베이터 운행 시 발생하는 전력을 재활용" },
        { name: "끊김 없는 고효율 단열설계", detail: "냉난방 에너지 손실을 최소화하는 고성능 단열재 적용" }
      ]
    },
    {
      title: "첨단생활 스마트 시스템 (Smart Life)",
      desc: "스마트폰 하나로 누리는 미래형 주거 환경",
      items: [
        { name: "통합형 스마트 월패드", detail: "조명, 난방, 환기, 방문자 확인, 에너지 사용량 원터치 관리" },
        { name: "초고속 정보통신 특등급", detail: "대용량 기가 인터넷 및 완벽한 홈 네트워크 통신망" },
        { name: "외부 제어 모바일 스마트홈 앱", detail: "언제 어디서나 스마트폰으로 난방, 가스, 조명 제어" },
        { name: "스마트 푸시풀 디지털 도어락", detail: "지문인식, 블루투스 문열림, 화재 감지 안전기능" },
        { name: "원패스 시스템 (One-Pass)", detail: "스마트키 또는 스마트폰 소지만으로 공동현관 자동문 열림 및 EV 자동호출" }
      ]
    }
  ]
};

export const UNIT_TYPES: UnitTypeInfo[] = [
  {
    id: "59A1",
    name: "59A1㎡",
    pyeong: "구 24평형",
    category: "판상형",
    totalGenUnits: 206,
    totalUnits: 296,
    generalRatio: "30.7%",
    exclusiveArea: 59.9800,
    exclusivePyeong: 18.14,
    supplyArea: 81.8251,
    supplyPyeong: 24.75,
    contractArea: 134.9323,
    contractPyeong: 40.82,
    balconyArea: 32.7150,
    structure: "4BAY 맞통풍 판상형",
    rooms: "침실 3개, 욕실 2개, 거실, 주방/식당, 다용도실, 팬트리, 대형 드레스룸",
    features: [
      "판상형 맞통풍 설계로 환기 및 통풍 우수",
      "“ㄷ”자 주방 구성으로 효율적인 가사 동선 확보",
      "수납 강화: 신발장 2개소 + 복도 대형 팬트리 1개소",
      "드레스룸 특화: 베타룸 크기에 준하는 대형 드레스룸 제공",
      "채광을 극대화한 4BAY 전면 배치"
    ],
    dimensions: {
      livingRoom: "3.5m × 4.2m",
      bed1: "3.3m × 3.0m (안방)",
      bed2: "2.7m × 3.0m",
      bed3: "2.5m × 3.0m",
      dressRoom: "1.6m × 3.45m (대형)",
      kitchen: "3.55m × 3.35m",
      bathroom: "욕실1 1.5×2.1m, 욕실2 1.5×1.3m",
      note: "확장형 기준 전용률 우수"
    },
    priceRows: [
      { building: "106, 111동 (1~4호) / 108동 (3~5호)", line: "1~4호", floor: "1F", count: 6, totalPrice: 450800000, pricePerPyeong: "@18,212,601", contract1: 10000000, contract2: 12540000, contractSum: 22540000, middleLoan: "무이자(60%)", balance: 157780000 },
      { building: "106, 111동 / 108동", line: "1~4호", floor: "2F", count: 11, totalPrice: 465300000, pricePerPyeong: "@18,798,410", contract1: 10000000, contract2: 13265000, contractSum: 23265000, middleLoan: "무이자(60%)", balance: 162855000 },
      { building: "106, 111동 / 108동", line: "1~4호", floor: "3F", count: 11, totalPrice: 480000000, pricePerPyeong: "@19,392,300", contract1: 10000000, contract2: 14000000, contractSum: 24000000, middleLoan: "무이자(60%)", balance: 168000000 },
      { building: "106, 111동 / 108동", line: "1~4호", floor: "4~5F", count: 22, totalPrice: 489700000, pricePerPyeong: "@19,784,186", contract1: 10000000, contract2: 14485000, contractSum: 24485000, middleLoan: "무이자(60%)", balance: 171395000 },
      { building: "106, 111동 / 108동", line: "1~4호", floor: "6~10F", count: 54, totalPrice: 496600000, pricePerPyeong: "@20,062,950", contract1: 10000000, contract2: 14830000, contractSum: 24830000, middleLoan: "무이자(60%)", balance: 173810000 },
      { building: "106, 111동 / 108동", line: "1~4호", floor: "11~20F (로얄층)", count: 47, totalPrice: 498200000, pricePerPyeong: "@20,127,591", contract1: 10000000, contract2: 14910000, contractSum: 24910000, middleLoan: "무이자(60%)", balance: 174370000 },
      { building: "106, 111동 / 108동", line: "1~4호", floor: "21~29F (최고로얄)", count: 40, totalPrice: 499500000, pricePerPyeong: "@20,180,112", contract1: 10000000, contract2: 14975000, contractSum: 24975000, middleLoan: "무이자(60%)", balance: 174825000 },
      { building: "108동 1호", line: "1호", floor: "2F", count: 1, totalPrice: 455500000, pricePerPyeong: "@18,402,484", contract1: 10000000, contract2: 12775000, contractSum: 22775000, middleLoan: "무이자(60%)", balance: 159425000 },
      { building: "108동 1호", line: "1호", floor: "3F", count: 1, totalPrice: 470300000, pricePerPyeong: "@19,000,414", contract1: 10000000, contract2: 13515000, contractSum: 23515000, middleLoan: "무이자(60%)", balance: 164605000 },
      { building: "108동 1호", line: "1호", floor: "4~5F", count: 2, totalPrice: 480000000, pricePerPyeong: "@19,392,300", contract1: 10000000, contract2: 14000000, contractSum: 24000000, middleLoan: "무이자(60%)", balance: 168000000 },
      { building: "108동 1호", line: "1호", floor: "6~10F", count: 4, totalPrice: 496600000, pricePerPyeong: "@20,062,950", contract1: 10000000, contract2: 14830000, contractSum: 24830000, middleLoan: "무이자(60%)", balance: 173810000 },
      { building: "108동 1호", line: "1호", floor: "11~20F", count: 3, totalPrice: 498200000, pricePerPyeong: "@20,127,591", contract1: 10000000, contract2: 14910000, contractSum: 24910000, middleLoan: "무이자(60%)", balance: 174370000 },
      { building: "108동 1호", line: "1호", floor: "21~26F", count: 4, totalPrice: 499500000, pricePerPyeong: "@20,180,112", contract1: 10000000, contract2: 14975000, contractSum: 24975000, middleLoan: "무이자(60%)", balance: 174825000 },
    ],
    balconyCost: { total: 16000000, contract: 1600000, middle: 1600000, balance: 12800000 },
    keyBenefit: "4억원대 마지막 천만원대 브랜드 대단지 공급가"
  },
  {
    id: "59A2",
    name: "59A2㎡",
    pyeong: "구 24평형",
    category: "판상형",
    totalGenUnits: 93,
    totalUnits: 109,
    generalRatio: "30.7%",
    exclusiveArea: 59.9846,
    exclusivePyeong: 18.15,
    supplyArea: 81.3258,
    supplyPyeong: 24.60,
    contractArea: 134.4370,
    contractPyeong: 40.67,
    balconyArea: 32.5500,
    structure: "4BAY 판상형 평면",
    rooms: "침실 3개, 욕실 2개, 거실, 주방/식당, 다용도실, 복도 팬트리, 드레스룸",
    features: [
      "4BAY 판상형 구조로 맞통풍 및 일조권 극대화",
      "“ㄷ”자 주방 구성으로 조리 및 수납 공간 최적화",
      "신발장 2개소 + 복도 대용량 팬트리 1개소",
      "대형 드레스룸 특화로 별도 장롱 불필요"
    ],
    dimensions: {
      livingRoom: "3.5m × 4.25m",
      bed1: "3.3m × 3.0m",
      bed2: "2.7m × 3.05m",
      bed3: "2.5m × 3.05m",
      dressRoom: "1.6m × 3.5m",
      kitchen: "3.6m × 3.35m",
      bathroom: "욕실1 1.5×2.1m, 욕실2 1.5×1.3m",
    },
    priceRows: [
      { building: "105동 (7~8호) / 113동 (1~4호)", line: "1~4호", floor: "1F", count: 3, totalPrice: 451200000, pricePerPyeong: "@18,340,677", contract1: 10000000, contract2: 12560000, contractSum: 22560000, middleLoan: "무이자(60%)", balance: 157920000 },
      { building: "105동 / 113동", line: "1~4호", floor: "2F", count: 6, totalPrice: 465500000, pricePerPyeong: "@18,921,953", contract1: 10000000, contract2: 13275000, contractSum: 23275000, middleLoan: "무이자(60%)", balance: 162925000 },
      { building: "105동 / 113동", line: "1~4호", floor: "3F", count: 6, totalPrice: 480200000, pricePerPyeong: "@19,519,488", contract1: 10000000, contract2: 14010000, contractSum: 24010000, middleLoan: "무이자(60%)", balance: 168070000 },
      { building: "105동 / 113동", line: "1~4호", floor: "4~5F", count: 11, totalPrice: 489800000, pricePerPyeong: "@19,909,716", contract1: 10000000, contract2: 14490000, contractSum: 24490000, middleLoan: "무이자(60%)", balance: 171430000 },
      { building: "105동 / 113동", line: "1~4호", floor: "6~10F", count: 29, totalPrice: 496700000, pricePerPyeong: "@20,190,191", contract1: 10000000, contract2: 14835000, contractSum: 24835000, middleLoan: "무이자(60%)", balance: 173845000 },
      { building: "105동 / 113동", line: "1~4호", floor: "11~20F (로얄층)", count: 35, totalPrice: 498300000, pricePerPyeong: "@20,255,229", contract1: 10000000, contract2: 14915000, contractSum: 24915000, middleLoan: "무이자(60%)", balance: 174405000 },
      { building: "105동 / 113동", line: "1~4호", floor: "21~22F (탑층)", count: 3, totalPrice: 499500000, pricePerPyeong: "@20,304,008", contract1: 10000000, contract2: 14975000, contractSum: 24975000, middleLoan: "무이자(60%)", balance: 174825000 },
    ],
    balconyCost: { total: 16000000, contract: 1600000, middle: 1600000, balance: 12800000 },
    keyBenefit: "선호도 높은 4BAY 구조, 복도 팬트리 기본 탑재"
  },
  {
    id: "59B",
    name: "59B㎡",
    pyeong: "구 24평형",
    category: "타워형",
    totalGenUnits: 27,
    totalUnits: 29,
    generalRatio: "30.7%",
    exclusiveArea: 59.9847,
    exclusivePyeong: 18.15,
    supplyArea: 81.7958,
    supplyPyeong: 24.74,
    contractArea: 134.9071,
    contractPyeong: 40.81,
    balconyArea: 27.0450,
    structure: "2BAY 타워형 평면",
    rooms: "침실 3개, 욕실 2개, LDK 일체형 거실·주방, 드레스룸",
    features: [
      "개방감이 뛰어난 2면 개방 LDK 타워형 설계",
      "자녀존과 부부 침실의 완벽한 프라이버시 분리",
      "신발장 2개소 수납 강화",
      "안방 대형 드레스룸 설계"
    ],
    dimensions: {
      livingRoom: "3.5m × 5.9m (와이드 LDK)",
      bed1: "3.3m × 3.0m",
      bed2: "2.95m × 2.7m",
      bed3: "2.95m × 2.5m",
      dressRoom: "1.6m × 2.26m",
    },
    priceRows: [
      { building: "108동 2호", line: "2호", floor: "1F", count: 1, totalPrice: 427800000, pricePerPyeong: "@17,289,578", contract1: 10000000, contract2: 11390000, contractSum: 21390000, middleLoan: "무이자(60%)", balance: 149730000 },
      { building: "108동 2호", line: "2호", floor: "2F", count: 1, totalPrice: 442300000, pricePerPyeong: "@17,875,597", contract1: 10000000, contract2: 12115000, contractSum: 22115000, middleLoan: "무이자(60%)", balance: 154805000 },
      { building: "108동 2호", line: "2호", floor: "3F", count: 1, totalPrice: 457000000, pricePerPyeong: "@18,469,699", contract1: 10000000, contract2: 12850000, contractSum: 22850000, middleLoan: "무이자(60%)", balance: 159950000 },
      { building: "108동 2호", line: "2호", floor: "4~5F", count: 2, totalPrice: 466700000, pricePerPyeong: "@18,861,725", contract1: 10000000, contract2: 13335000, contractSum: 23335000, middleLoan: "무이자(60%)", balance: 163345000 },
      { building: "108동 2호", line: "2호", floor: "6~10F", count: 5, totalPrice: 483300000, pricePerPyeong: "@19,532,616", contract1: 10000000, contract2: 14165000, contractSum: 24165000, middleLoan: "무이자(60%)", balance: 169155000 },
      { building: "108동 2호", line: "2호", floor: "11~20F (로얄층)", count: 9, totalPrice: 484900000, pricePerPyeong: "@19,597,280", contract1: 10000000, contract2: 14245000, contractSum: 24245000, middleLoan: "무이자(60%)", balance: 169715000 },
      { building: "108동 2호", line: "2호", floor: "21~22F", count: 8, totalPrice: 486200000, pricePerPyeong: "@19,649,820", contract1: 10000000, contract2: 14310000, contractSum: 24310000, middleLoan: "무이자(60%)", balance: 170170000 },
    ],
    balconyCost: { total: 15000000, contract: 1500000, middle: 1500000, balance: 12000000 },
    keyBenefit: "4.2억대부터 시작하는 최상의 가성비 & 모던 타워형 조망"
  },
  {
    id: "74A",
    name: "74A㎡",
    pyeong: "구 30평형",
    category: "판상형",
    totalGenUnits: 6,
    totalUnits: 22,
    generalRatio: "2.6%",
    exclusiveArea: 74.9802,
    exclusivePyeong: 22.68,
    supplyArea: 100.9161,
    supplyPyeong: 30.53,
    contractArea: 167.3047,
    contractPyeong: 50.61,
    balconyArea: 36.2100,
    structure: "4BAY 판상형 평면",
    rooms: "침실 3개, 욕실 2개, 거실, 주방/식당, 복도 팬트리, 대형 드레스룸",
    features: [
      "4BAY 판상형 구조로 남향 위주 우수한 채광과 통풍",
      "“ㄷ”자 주방 구성으로 효율적인 동선 확보",
      "신발장 2개소 + 복도 대형 팬트리 수납 극대화",
      "안방 초대형 드레스룸 (3.64m) 특화"
    ],
    dimensions: {
      livingRoom: "4.2m × 4.6m",
      bed1: "3.5m × 3.6m",
      bed2: "2.7m × 3.3m",
      bed3: "2.7m × 3.3m",
      dressRoom: "1.8m × 3.64m",
      kitchen: "3.85m × 3.95m"
    },
    priceRows: [
      { building: "107동 4호", line: "4호", floor: "2F", count: 1, totalPrice: 575600000, pricePerPyeong: "@18,855,365", contract1: 10000000, contract2: 18780000, contractSum: 28780000, middleLoan: "무이자(60%)", balance: 201460000 },
      { building: "107동 4호", line: "4호", floor: "3F", count: 1, totalPrice: 593800000, pricePerPyeong: "@19,451,556", contract1: 10000000, contract2: 19690000, contractSum: 29690000, middleLoan: "무이자(60%)", balance: 207830000 },
      { building: "107동 4호", line: "4호", floor: "4~5F", count: 2, totalPrice: 605800000, pricePerPyeong: "@19,844,649", contract1: 10000000, contract2: 20290000, contractSum: 30290000, middleLoan: "무이자(60%)", balance: 212030000 },
      { building: "107동 4호", line: "4호", floor: "8F", count: 1, totalPrice: 614300000, pricePerPyeong: "@20,123,090", contract1: 10000000, contract2: 20715000, contractSum: 30715000, middleLoan: "무이자(60%)", balance: 215005000 },
      { building: "107동 4호", line: "4호", floor: "17F (로얄층)", count: 1, totalPrice: 616300000, pricePerPyeong: "@20,188,606", contract1: 10000000, contract2: 20815000, contractSum: 30815000, middleLoan: "무이자(60%)", balance: 215705000 },
    ],
    balconyCost: { total: 18000000, contract: 1800000, middle: 1800000, balance: 14400000 },
    keyBenefit: "일반분양 단 6세대 희소 30평형 판상형"
  },
  {
    id: "74B",
    name: "74B㎡",
    pyeong: "구 30평형",
    category: "타워형",
    totalGenUnits: 22,
    totalUnits: 23,
    generalRatio: "2.6%",
    exclusiveArea: 74.9891,
    exclusivePyeong: 22.68,
    supplyArea: 102.1638,
    supplyPyeong: 30.90,
    contractArea: 168.5603,
    contractPyeong: 50.99,
    balconyArea: 30.1951,
    structure: "2BAY 타워형 평면",
    rooms: "침실 3개, 욕실 2개, LDK 일체형 거실·주방, 복도 팬트리, 드레스룸",
    features: [
      "2BAY 타워형 평면으로 넓은 조망창과 세련된 거실",
      "신발장 2개소 + 현관 앞 복도 팬트리 구비",
      "베타룸 크기에 준하는 대형 드레스룸 (3.15m × 1.4m)"
    ],
    dimensions: {
      livingRoom: "3.9m × 7.0m",
      bed1: "3.6m × 3.5m",
      bed2: "3.31m × 2.9m",
      bed3: "3.31m × 2.7m",
      dressRoom: "1.4m × 3.15m"
    },
    priceRows: [
      { building: "107동 5호", line: "5호", floor: "1F", count: 1, totalPrice: 531900000, pricePerPyeong: "@17,211,058", contract1: 10000000, contract2: 16595000, contractSum: 26595000, middleLoan: "무이자(60%)", balance: 186165000 },
      { building: "107동 5호", line: "5호", floor: "2F", count: 1, totalPrice: 549900000, pricePerPyeong: "@17,793,497", contract1: 10000000, contract2: 17495000, contractSum: 27495000, middleLoan: "무이자(60%)", balance: 192465000 },
      { building: "107동 5호", line: "5호", floor: "3F", count: 1, totalPrice: 568300000, pricePerPyeong: "@18,388,878", contract1: 10000000, contract2: 18415000, contractSum: 28415000, middleLoan: "무이자(60%)", balance: 198905000 },
      { building: "107동 5호", line: "5호", floor: "4~5F", count: 2, totalPrice: 580400000, pricePerPyeong: "@18,780,406", contract1: 10000000, contract2: 19020000, contractSum: 29020000, middleLoan: "무이자(60%)", balance: 203140000 },
      { building: "107동 5호", line: "5호", floor: "6~10F", count: 5, totalPrice: 589100000, pricePerPyeong: "@19,061,918", contract1: 10000000, contract2: 19455000, contractSum: 29455000, middleLoan: "무이자(60%)", balance: 206185000 },
      { building: "107동 5호", line: "5호", floor: "11~20F (로얄층)", count: 9, totalPrice: 591100000, pricePerPyeong: "@19,126,634", contract1: 10000000, contract2: 19555000, contractSum: 29555000, middleLoan: "무이자(60%)", balance: 206885000 },
      { building: "107동 5호", line: "5호", floor: "21~22F (탑층)", count: 3, totalPrice: 592600000, pricePerPyeong: "@19,175,170", contract1: 10000000, contract2: 19630000, contractSum: 29630000, middleLoan: "무이자(60%)", balance: 207410000 },
    ],
    balconyCost: { total: 17500000, contract: 1750000, middle: 1750000, balance: 14000000 },
    keyBenefit: "5억 중후반대 30평형 로얄층 공급"
  },
  {
    id: "84A",
    name: "84A㎡",
    pyeong: "구 34평형",
    category: "판상형 메인",
    totalGenUnits: 381,
    totalUnits: 439,
    generalRatio: "64.8%",
    exclusiveArea: 84.9869,
    exclusivePyeong: 25.71,
    supplyArea: 114.5397,
    supplyPyeong: 34.65,
    contractArea: 189.7884,
    contractPyeong: 57.41,
    balconyArea: 39.0150,
    structure: "4BAY 맞통풍 판상형 (대표 주력타입)",
    rooms: "침실 3개, 욕실 2개, 대형 거실, 주방/식당, 다용도실, 현관 창고, 팬트리, 특화 드레스룸",
    features: [
      "국민평형 최선호 4BAY 맞통풍 판상형 설계",
      "“ㄷ”자 주방 구성으로 효율적인 동선 확보",
      "더블 수납 특화: 신발장 2개소 + 현관 창고 1개소 + 대형 팬트리 1개소",
      "실외기실 이전으로 침실 소음 원천 차단",
      "베타룸 크기에 준하는 초대형 드레스룸 (4.06m × 1.8m)"
    ],
    dimensions: {
      livingRoom: "4.5m × 4.81m (광폭 거실)",
      bed1: "3.9m × 3.6m (안방)",
      bed2: "3.0m × 3.5m",
      bed3: "2.7m × 3.5m",
      dressRoom: "1.8m × 4.06m (초대형)",
      kitchen: "4.35m × 4.16m",
      entranceStorage: "1.36m × 2.08m (현관창고)"
    },
    priceRows: [
      { building: "101, 102, 103, 107, 109, 110, 112동", line: "다수 라인", floor: "1F", count: 8, totalPrice: 622900000, pricePerPyeong: "@17,977,815", contract1: 10000000, contract2: 21145000, contractSum: 31145000, middleLoan: "무이자(60%)", balance: 218015000 },
      { building: "101, 102, 103동 등", line: "다수 라인", floor: "2F", count: 18, totalPrice: 643100000, pricePerPyeong: "@18,560,817", contract1: 10000000, contract2: 22155000, contractSum: 32155000, middleLoan: "무이자(60%)", balance: 225085000 },
      { building: "101, 102, 103동 등", line: "다수 라인", floor: "3F", count: 19, totalPrice: 663800000, pricePerPyeong: "@19,158,250", contract1: 10000000, contract2: 23190000, contractSum: 33190000, middleLoan: "무이자(60%)", balance: 232330000 },
      { building: "101, 102, 103동 등", line: "다수 라인", floor: "4~5F", count: 36, totalPrice: 677400000, pricePerPyeong: "@19,550,766", contract1: 10000000, contract2: 23870000, contractSum: 33870000, middleLoan: "무이자(60%)", balance: 237090000 },
      { building: "101, 102, 103동 등", line: "다수 라인", floor: "6~10F", count: 84, totalPrice: 687100000, pricePerPyeong: "@19,830,722", contract1: 10000000, contract2: 24355000, contractSum: 34355000, middleLoan: "무이자(60%)", balance: 240485000 },
      { building: "101, 102, 103동 등 (로얄층 집중)", line: "다수 라인", floor: "11~20F (로얄층)", count: 103, totalPrice: 689300000, pricePerPyeong: "@19,894,217", contract1: 10000000, contract2: 24465000, contractSum: 34465000, middleLoan: "무이자(60%)", balance: 241255000 },
      { building: "101, 102, 103동 등 (초고층)", line: "다수 라인", floor: "21~30F (로얄층)", count: 73, totalPrice: 691000000, pricePerPyeong: "@19,943,282", contract1: 10000000, contract2: 24550000, contractSum: 34550000, middleLoan: "무이자(60%)", balance: 241850000 },
      { building: "101, 102, 103동 등 (최고층 뷰)", line: "다수 라인", floor: "31~35F (VIP로얄)", count: 23, totalPrice: 697800000, pricePerPyeong: "@20,139,540", contract1: 10000000, contract2: 24890000, contractSum: 34890000, middleLoan: "무이자(60%)", balance: 244230000 },
      { building: "104동 1호", line: "1호", floor: "2F", count: 1, totalPrice: 629500000, pricePerPyeong: "@18,168,301", contract1: 10000000, contract2: 21475000, contractSum: 31475000, middleLoan: "무이자(60%)", balance: 220325000 },
      { building: "104동 1호", line: "1호", floor: "3F", count: 1, totalPrice: 650200000, pricePerPyeong: "@18,765,734", contract1: 10000000, contract2: 22510000, contractSum: 32510000, middleLoan: "무이자(60%)", balance: 227570000 },
      { building: "104동 1호", line: "1호", floor: "4~5F", count: 2, totalPrice: 663800000, pricePerPyeong: "@19,158,250", contract1: 10000000, contract2: 23190000, contractSum: 33190000, middleLoan: "무이자(60%)", balance: 232330000 },
      { building: "104동 1호", line: "1호", floor: "6~10F", count: 4, totalPrice: 687100000, pricePerPyeong: "@19,830,722", contract1: 10000000, contract2: 24355000, contractSum: 34355000, middleLoan: "무이자(60%)", balance: 240485000 },
      { building: "104동 1호", line: "1호", floor: "11~20F", count: 5, totalPrice: 689300000, pricePerPyeong: "@19,894,217", contract1: 10000000, contract2: 24465000, contractSum: 34465000, middleLoan: "무이자(60%)", balance: 241255000 },
      { building: "104동 1호", line: "1호", floor: "21~28F", count: 4, totalPrice: 691000000, pricePerPyeong: "@19,943,282", contract1: 10000000, contract2: 24550000, contractSum: 34550000, middleLoan: "무이자(60%)", balance: 241850000 },
    ],
    balconyCost: { total: 21000000, contract: 2100000, middle: 2100000, balance: 16800000 },
    keyBenefit: "381세대 주력 대표 타입! 타 단지(8~9억) 대비 압도적 6억대 분양가"
  },
  {
    id: "84B",
    name: "84B㎡",
    pyeong: "구 34평형",
    category: "타워형",
    totalGenUnits: 271,
    totalUnits: 277,
    generalRatio: "64.8%",
    exclusiveArea: 84.9808,
    exclusivePyeong: 25.71,
    supplyArea: 115.0011,
    supplyPyeong: 34.79,
    contractArea: 190.2444,
    contractPyeong: 57.55,
    balconyArea: 32.0550,
    structure: "2BAY 타워형 평면",
    rooms: "침실 3개, 욕실 2개, LDK 일체형 거실·주방, 현관 창고, 복도 팬트리, 드레스룸",
    features: [
      "파노라마 2면 개방형 거실 설계로 웅장한 조망권",
      "신발장 1개소 + 현관 대형 창고 1개소",
      "복도 대형 팬트리로 넉넉한 수납공간",
      "베타룸 크기에 준하는 대형 드레스룸 (3.4m × 1.7m)"
    ],
    dimensions: {
      livingRoom: "4.5m × 7.0m (파노라마 와이드)",
      bed1: "3.9m × 3.6m",
      bed2: "3.56m × 3.0m",
      bed3: "3.56m × 3.0m",
      dressRoom: "1.7m × 3.4m"
    },
    priceRows: [
      { building: "101, 102, 103, 107, 109, 110, 112동", line: "2,3호", floor: "1F", count: 6, totalPrice: 610200000, pricePerPyeong: "@17,540,616", contract1: 10000000, contract2: 20510000, contractSum: 30510000, middleLoan: "무이자(60%)", balance: 213570000 },
      { building: "101, 102, 103, 107동 등", line: "2,3호", floor: "2F", count: 8, totalPrice: 630500000, pricePerPyeong: "@18,124,153", contract1: 10000000, contract2: 21525000, contractSum: 31525000, middleLoan: "무이자(60%)", balance: 220675000 },
      { building: "101, 102, 103동 등", line: "2,3호", floor: "3F", count: 8, totalPrice: 651200000, pricePerPyeong: "@18,719,189", contract1: 10000000, contract2: 22560000, contractSum: 32560000, middleLoan: "무이자(60%)", balance: 227920000 },
      { building: "101, 102, 103동 등", line: "2,3호", floor: "4~5F", count: 15, totalPrice: 664900000, pricePerPyeong: "@19,113,004", contract1: 10000000, contract2: 23245000, contractSum: 33245000, middleLoan: "무이자(60%)", balance: 232715000 },
      { building: "101, 102, 103동 등", line: "2,3호", floor: "6~10F", count: 40, totalPrice: 674600000, pricePerPyeong: "@19,391,838", contract1: 10000000, contract2: 23730000, contractSum: 33730000, middleLoan: "무이자(60%)", balance: 236110000 },
      { building: "101, 102, 103동 등 (로얄층)", line: "2,3호", floor: "11~20F (로얄층)", count: 78, totalPrice: 676800000, pricePerPyeong: "@19,455,078", contract1: 10000000, contract2: 23840000, contractSum: 33840000, middleLoan: "무이자(60%)", balance: 236880000 },
      { building: "101, 102, 103동 등 (초고층)", line: "2,3호", floor: "21~30F (로얄층)", count: 68, totalPrice: 678500000, pricePerPyeong: "@19,503,946", contract1: 10000000, contract2: 23925000, contractSum: 33925000, middleLoan: "무이자(60%)", balance: 237475000 },
      { building: "101, 102, 103동 등 (최고층)", line: "2,3호", floor: "31~36F (VIP로얄)", count: 20, totalPrice: 685400000, pricePerPyeong: "@19,702,291", contract1: 10000000, contract2: 24270000, contractSum: 34270000, middleLoan: "무이자(60%)", balance: 239890000 },
      { building: "104동 2호", line: "2호", floor: "1F", count: 1, totalPrice: 596500000, pricePerPyeong: "@17,146,800", contract1: 10000000, contract2: 19825000, contractSum: 29825000, middleLoan: "무이자(60%)", balance: 208775000 },
      { building: "104동 2호", line: "2호", floor: "2F", count: 1, totalPrice: 616800000, pricePerPyeong: "@17,730,337", contract1: 10000000, contract2: 20840000, contractSum: 30840000, middleLoan: "무이자(60%)", balance: 215880000 },
      { building: "104동 2호", line: "2호", floor: "3F", count: 1, totalPrice: 637500000, pricePerPyeong: "@18,325,373", contract1: 10000000, contract2: 21875000, contractSum: 31875000, middleLoan: "무이자(60%)", balance: 223125000 },
      { building: "104동 2호", line: "2호", floor: "4~5F", count: 2, totalPrice: 651200000, pricePerPyeong: "@18,719,189", contract1: 10000000, contract2: 22560000, contractSum: 32560000, middleLoan: "무이자(60%)", balance: 227920000 },
      { building: "104동 2호", line: "2호", floor: "6~10F", count: 4, totalPrice: 674600000, pricePerPyeong: "@19,391,838", contract1: 10000000, contract2: 23730000, contractSum: 33730000, middleLoan: "무이자(60%)", balance: 236110000 },
      { building: "104동 2호", line: "2호", floor: "11~20F", count: 10, totalPrice: 676800000, pricePerPyeong: "@19,455,078", contract1: 10000000, contract2: 23840000, contractSum: 33840000, middleLoan: "무이자(60%)", balance: 236880000 },
      { building: "104동 2호", line: "2호", floor: "21~29F", count: 9, totalPrice: 678500000, pricePerPyeong: "@19,503,946", contract1: 10000000, contract2: 23925000, contractSum: 33925000, middleLoan: "무이자(60%)", balance: 237475000 },
    ],
    balconyCost: { total: 18000000, contract: 1800000, middle: 1800000, balance: 14400000 },
    keyBenefit: "개방감 넘치는 와이드 거실 & 5.9억대 착한 분양가"
  },
  {
    id: "84C",
    name: "84C㎡",
    pyeong: "구 34평형",
    category: "타워형 코너",
    totalGenUnits: 36,
    totalUnits: 50,
    generalRatio: "64.8%",
    exclusiveArea: 84.9896,
    exclusivePyeong: 25.71,
    supplyArea: 115.4646,
    supplyPyeong: 34.93,
    contractArea: 190.7156,
    contractPyeong: 57.69,
    balconyArea: 36.3255,
    structure: "2BAY 타워형 평면 (코너 조망)",
    rooms: "침실 3개, 욕실 2개, LDK 일체형 거실·주방, 현관 창고, 드레스룸",
    features: [
      "코너형 2면 개방으로 일조와 조망을 동시에 충족",
      "“ㄷ”자 주방 구성으로 효율적인 동선 확보",
      "신발장 1개소 + 현관 대형 창고 1개소",
      "대형 드레스룸 (3.6m × 1.7m) 특화"
    ],
    dimensions: {
      livingRoom: "4.4m × 6.2m",
      bed1: "3.9m × 3.6m",
      bed2: "3.35m × 3.05m",
      bed3: "3.29m × 3.0m",
      dressRoom: "1.7m × 2.6m"
    },
    priceRows: [
      { building: "104, 112동 5호", line: "5호", floor: "1F", count: 1, totalPrice: 621100000, pricePerPyeong: "@17,782,289", contract1: 10000000, contract2: 21055000, contractSum: 31055000, middleLoan: "무이자(60%)", balance: 217385000 },
      { building: "104, 112동 5호", line: "5호", floor: "2F", count: 2, totalPrice: 641500000, pricePerPyeong: "@18,366,348", contract1: 10000000, contract2: 22075000, contractSum: 32075000, middleLoan: "무이자(60%)", balance: 224525000 },
      { building: "104, 112동 5호", line: "5호", floor: "3F", count: 2, totalPrice: 662300000, pricePerPyeong: "@18,961,858", contract1: 10000000, contract2: 23115000, contractSum: 33115000, middleLoan: "무이자(60%)", balance: 231805000 },
      { building: "104, 112동 5호", line: "5호", floor: "4~5F", count: 4, totalPrice: 676000000, pricePerPyeong: "@19,354,094", contract1: 10000000, contract2: 23800000, contractSum: 33800000, middleLoan: "무이자(60%)", balance: 236600000 },
      { building: "104, 112동 5호", line: "5호", floor: "6~10F", count: 10, totalPrice: 685700000, pricePerPyeong: "@19,631,808", contract1: 10000000, contract2: 24285000, contractSum: 34285000, middleLoan: "무이자(60%)", balance: 239995000 },
      { building: "104, 112동 5호", line: "5호", floor: "11~20F (로얄층)", count: 14, totalPrice: 688000000, pricePerPyeong: "@19,697,657", contract1: 10000000, contract2: 24400000, contractSum: 34400000, middleLoan: "무이자(60%)", balance: 240800000 },
      { building: "104, 112동 5호", line: "5호", floor: "21~26F", count: 3, totalPrice: 689700000, pricePerPyeong: "@19,746,329", contract1: 10000000, contract2: 24485000, contractSum: 34485000, middleLoan: "무이자(60%)", balance: 241395000 },
    ],
    balconyCost: { total: 21000000, contract: 2100000, middle: 2100000, balance: 16800000 },
    keyBenefit: "36세대 한정 코너 조망 & 넉넉한 발코니 면적 (36.3㎡)"
  },
  {
    id: "101B",
    name: "101B㎡",
    pyeong: "구 41평형",
    category: "대형 타워형",
    totalGenUnits: 17,
    totalUnits: 78,
    generalRatio: "1.6%",
    exclusiveArea: 101.2177,
    exclusivePyeong: 30.62,
    supplyArea: 137.4521,
    supplyPyeong: 41.58,
    contractArea: 227.0718,
    contractPyeong: 68.69,
    balconyArea: 37.2225,
    structure: "3BAY 대형 타워형 평면",
    rooms: "침실 3개, 서재/알파룸, 욕실 2개, 대형 거실, 보조주방 포함 주방/식당, 대형 드레스룸",
    features: [
      "희소 가치 높은 중대형 41평형 프리미엄 평면",
      "“ㄷ”자 주방 및 보조 다용도실 연계로 조리 편의 극대화",
      "신발장 2개소 + 현관 대형 창고 1개소",
      "알파룸 특화: 서재 또는 독립 취미실로 활용 가능한 대형 공간",
      "호텔 스위트룸형 안방 & 드레스룸"
    ],
    dimensions: {
      livingRoom: "4.8m × 7.24m (초대형 거실)",
      bed1: "3.9m × 3.6m (안방)",
      bed2: "3.0m × 3.45m",
      bed3: "3.5m × 3.0m",
      alphaRoom: "1.8m × 2.86m (알파룸/서재)",
      dressRoom: "1.8m × 3.1m"
    },
    priceRows: [
      { building: "102, 103, 110동 5호", line: "5호", floor: "1F", count: 2, totalPrice: 800600000, pricePerPyeong: "@19,254,792", contract1: 10000000, contract2: 30030000, contractSum: 40030000, middleLoan: "무이자(60%)", balance: 280210000 },
      { building: "102, 103, 110동 5호", line: "5호", floor: "2F", count: 3, totalPrice: 824900000, pricePerPyeong: "@19,839,218", contract1: 10000000, contract2: 31245000, contractSum: 41245000, middleLoan: "무이자(60%)", balance: 288715000 },
      { building: "102, 103, 110동 5호", line: "5호", floor: "3F", count: 3, totalPrice: 849700000, pricePerPyeong: "@20,435,669", contract1: 10000000, contract2: 32485000, contractSum: 42485000, middleLoan: "무이자(60%)", balance: 297395000 },
      { building: "102, 103, 110동 5호", line: "5호", floor: "4~5F", count: 6, totalPrice: 866000000, pricePerPyeong: "@20,827,691", contract1: 10000000, contract2: 33300000, contractSum: 43300000, middleLoan: "무이자(60%)", balance: 303100000 },
      { building: "102, 103, 110동 5호", line: "5호", floor: "8F", count: 1, totalPrice: 877600000, pricePerPyeong: "@21,106,677", contract1: 10000000, contract2: 33880000, contractSum: 43880000, middleLoan: "무이자(60%)", balance: 307160000 },
      { building: "102, 103, 110동 5호 (로얄층)", line: "5호", floor: "13~19F (VIP로얄)", count: 2, totalPrice: 880300000, pricePerPyeong: "@21,171,613", contract1: 10000000, contract2: 34015000, contractSum: 44015000, middleLoan: "무이자(60%)", balance: 308105000 },
    ],
    balconyCost: { total: 21500000, contract: 2150000, middle: 2150000, balance: 17200000 },
    keyBenefit: "단 17세대뿐인 귀한 41평형 대형 평형, 로얄층 선점 필수"
  },
  {
    id: "133PENT",
    name: "133㎡ PENT",
    pyeong: "구 55평형 펜트하우스",
    category: "최고급 펜트하우스",
    totalGenUnits: 1,
    totalUnits: 1,
    generalRatio: "0.2%",
    exclusiveArea: 133.3409,
    exclusivePyeong: 40.34,
    supplyArea: 183.2378,
    supplyPyeong: 55.43,
    contractArea: 301.3000,
    contractPyeong: 91.14,
    balconyArea: 42.9000,
    terraceArea: 66.6106, // 테라스 20.15평!
    structure: "6BAY 판상형 초호화 펜트하우스 + 프라이빗 테라스(20평)",
    rooms: "침실 4개, 가족실, 욕실 3개, 거실, 와이드 다이닝 주방, 현관창고, 팬트리, 20평 야외 테라스",
    features: [
      "단지 내 단 1세대뿐인 6BAY 혁신 펜트하우스",
      "약 20.15평의 초대형 프라이빗 야외 루프탑 테라스 제공",
      "독립된 가족실(Family Rm) 및 3개 욕실 구성",
      "와이드 다이닝 특화 설계로 대규모 홈파티 가능",
      "신발장 1개소 + 현관 대형 창고 1개소 + 복도 팬트리"
    ],
    dimensions: {
      livingRoom: "4.2m × 4.71m",
      terrace: "약 66.6㎡ (20.15평 야외 테라스)",
      familyRoom: "3.3m × 4.75m (가족실)",
      bed1: "4.2m × 3.6m (마스터룸)",
      bed2: "3.35m × 4.0m",
      bed3: "3.0m × 3.0m",
      bed4: "2.7m × 3.4m",
      kitchen: "5.24m × 4.25m (와이드 다이닝)"
    },
    priceRows: [
      { building: "112동 5호", line: "5호", floor: "26F (단독 펜트)", count: 1, totalPrice: 1263400000, pricePerPyeong: "@22,792,944", contract1: 10000000, contract2: 53170000, contractSum: 63170000, middleLoan: "무이자(60%)", balance: 442190000 }
    ],
    balconyCost: { total: 31000000, contract: 3100000, middle: 3100000, balance: 24800000 },
    keyBenefit: "서부산 유일무이 20평 테라스 보유 펜트하우스 (1세대 한정)"
  },
  {
    id: "155PENT",
    name: "155㎡ PENT",
    pyeong: "구 64평형 최고급 펜트하우스",
    category: "하이엔드 펜트하우스",
    totalGenUnits: 1,
    totalUnits: 1,
    generalRatio: "0.2%",
    exclusiveArea: 155.2873,
    exclusivePyeong: 46.97,
    supplyArea: 214.2011,
    supplyPyeong: 64.80,
    contractArea: 351.6949,
    contractPyeong: 106.39,
    balconyArea: 48.6344,
    terraceArea: 62.2797, // 18.84평 테라스!
    structure: "5BAY 최고급 판상형 펜트하우스 + 더블 야외 테라스",
    rooms: "침실 5개, 욕실 3개, 초대형 거실, 대형 아일랜드 주방, 더블 테라스(전면+측면), 드레스룸 3개소",
    features: [
      "단지 내 최고 면적(구 64평형) 최고급 펜트하우스 (단 1세대)",
      "더블 야외 테라스(약 18.84평)로 낙동강과 승학산 360도 파노라마 조망",
      "“대형 아일랜드” 주방 구성으로 호텔급 와이드 다이닝 공간",
      "수납 극대화: 신발장 + 현관창고 + 복도팬트리 + 침실팬트리 2개소 + 드레스룸 3개",
      "5개 침실과 3개 독립 욕실로 3대 동거 가능한 럭셔리 평면"
    ],
    dimensions: {
      livingRoom: "5.1m × 4.86m (대연회장급 거실)",
      terrace: "더블 테라스 약 62.3㎡ (18.84평)",
      bed1: "4.2m × 3.6m",
      bed2: "3.45m × 3.0m",
      bed3: "3.5m × 3.0m",
      bed4: "3.49m × 3.3m",
      bed5: "3.3m × 3.55m",
      kitchen: "4.62m × 4.37m (아일랜드 대형)"
    },
    priceRows: [
      { building: "103동 5호", line: "5호", floor: "27F (단독 펜트)", count: 1, totalPrice: 1461600000, pricePerPyeong: "@22,557,006", contract1: 10000000, contract2: 63080000, contractSum: 73080000, middleLoan: "무이자(60%)", balance: 511560000 }
    ],
    balconyCost: { total: 33000000, contract: 3300000, middle: 3300000, balance: 26400000 },
    keyBenefit: "부산 서부권을 대표할 단 하나의 시그니처 펜트하우스"
  }
];

export const BALCONY_SUMMARY = [
  { type: "59A1", price: 16000000, down: 1600000, middle: 1600000, balance: 12800000 },
  { type: "59A2", price: 16000000, down: 1600000, middle: 1600000, balance: 12800000 },
  { type: "59B", price: 15000000, down: 1500000, middle: 1500000, balance: 12000000 },
  { type: "74A", price: 18000000, down: 1800000, middle: 1800000, balance: 14400000 },
  { type: "74B", price: 17500000, down: 1750000, middle: 1750000, balance: 14000000 },
  { type: "84A", price: 21000000, down: 2100000, middle: 2100000, balance: 16800000 },
  { type: "84B", price: 18000000, down: 1800000, middle: 1800000, balance: 14400000 },
  { type: "84C", price: 21000000, down: 2100000, middle: 2100000, balance: 16800000 },
  { type: "101B", price: 21500000, down: 2150000, middle: 2150000, balance: 17200000 },
  { type: "133PENT", price: 31000000, down: 3100000, middle: 3100000, balance: 24800000 },
  { type: "155PENT", price: 33000000, down: 3300000, middle: 3300000, balance: 26400000 },
];
