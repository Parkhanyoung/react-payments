export const CREDIT_CARD_VENDORS = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

export type CreditCardVendor = (typeof CREDIT_CARD_VENDORS)[number];
