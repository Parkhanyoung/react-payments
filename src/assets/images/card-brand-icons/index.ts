import { ValidCardBrand } from 'ryan-card-info-hooks';
import { ReactComponent as AMEX } from './AMEX.svg';
import { ReactComponent as Diners } from './Diners.svg';
import { ReactComponent as MasterCard } from './Mastercard.svg';
import { ReactComponent as UnionPay } from './UnionPay.svg';
import { ReactComponent as Visa } from './Visa.svg';

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
