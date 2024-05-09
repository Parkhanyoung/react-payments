import { ReactComponent as BC } from './BC.svg';
import { ReactComponent as Hana } from './Hana.svg';
import { ReactComponent as Hyundai } from './Hyundai.svg';
import { ReactComponent as Kakao } from './Kakao.svg';
import { ReactComponent as KB } from './KB.svg';
import { ReactComponent as Lotte } from './Lotte.svg';
import { ReactComponent as Shinhan } from './Shinhan.svg';
import { ReactComponent as Woori } from './Woori.svg';
import { CARD_TYPE, CardType } from '../../../constants/cardType';

type BankIcon = {
  [key in CardType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
export const BANK_ICON: BankIcon = {
  [CARD_TYPE.BC카드]: BC,
  [CARD_TYPE.하나카드]: Hana,
  [CARD_TYPE.현대카드]: Hyundai,
  [CARD_TYPE.카카오뱅크]: Kakao,
  [CARD_TYPE.국민카드]: KB,
  [CARD_TYPE.롯데카드]: Lotte,
  [CARD_TYPE.신한카드]: Shinhan,
  [CARD_TYPE.우리카드]: Woori,
};
