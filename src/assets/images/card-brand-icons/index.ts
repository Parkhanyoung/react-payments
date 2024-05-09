import { ReactComponent as AMEX } from './AMEX.svg';
import { ReactComponent as Diners } from './Diners.svg';
import { ReactComponent as MasterCard } from './Mastercard.svg';
import { ReactComponent as UnionPay } from './UnionPay.svg';
import { ReactComponent as Visa } from './Visa.svg';

const VALID_CARD_BRAND = {
  AMEX: 'AMEX',
  Diners: 'Diners',
  MasterCard: 'MasterCard',
  UnionPay: 'UnionPay',
  Visa: 'Visa',
} as const;

export const CARD_BRAND = {
  ...VALID_CARD_BRAND,
  unknown: 'unknown',
} as const;

export type CardBrand = keyof typeof CARD_BRAND;
export type ValidCardBrand = keyof typeof VALID_CARD_BRAND;

export type CardBrandIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
type BankIcon = {
  [key in ValidCardBrand]: CardBrandIcon;
};
export const CARD_BRAND_ICON: BankIcon = {
  AMEX,
  Diners,
  MasterCard,
  UnionPay,
  Visa,
};
