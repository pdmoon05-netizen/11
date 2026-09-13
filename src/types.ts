export interface UnitTypeInfo {
  id: string;
  name: string;
  pyeong: string;
  category: string;
  totalGenUnits: number;
  totalUnits: number;
  generalRatio: string;
  exclusiveArea: number; // 전용면적 ㎡
  exclusivePyeong: number;
  supplyArea: number; // 공급면적 ㎡
  supplyPyeong: number;
  contractArea: number; // 계약면적 ㎡
  contractPyeong: number;
  balconyArea: number;
  terraceArea?: number;
  structure: string; // e.g. "4BAY 판상형"
  rooms: string; // "Living Rm + Kitchen + 2Bath + 3Rm"
  features: string[];
  dimensions: {
    livingRoom?: string;
    bed1?: string;
    bed2?: string;
    bed3?: string;
    dressRoom?: string;
    kitchen?: string;
    bathroom?: string;
    alphaRoom?: string;
    terrace?: string;
    entranceStorage?: string;
    note?: string;
    [key: string]: string | undefined;
  };
  priceRows: PriceRow[];
  balconyCost: {
    total: number;
    contract: number;
    middle: number;
    balance: number;
  };
  keyBenefit: string;
}

export interface PriceRow {
  building: string;
  line: string;
  floor: string;
  count: number;
  totalPrice: number; // 원
  pricePerPyeong: string; // @평당가
  contract1: number; // 1천만원
  contract2: number;
  contractSum: number; // 5%
  middleLoan: string; // 60% 중도금 무이자
  balance: number; // 35% 잔금
}

export interface PremiumItem {
  number: number;
  title: string;
  subTitle: string;
  tag: string;
  description: string;
  points: string[];
  icon: string;
  badge?: string;
}

export interface LandscapeFeature {
  number: number;
  name: string;
  subtitle: string;
  description: string;
  details: string[];
  tag: string;
}

export interface CommunityFloor {
  floor: string;
  theme: string;
  subtitle: string;
  facilities: string[];
  description: string;
  highlights: string[];
}

export interface SkyCommunityItem {
  floor: string;
  building: string;
  title: string;
  features: string[];
  viewPoints: string[];
  description: string;
}
