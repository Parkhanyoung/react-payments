import { CARD_BRAND, CardBrand } from 'ryan-card-info-hooks';
import Input, { InputProps } from '../../../common/Input';

export interface ICardNumberInputProps extends InputProps {
  formattedValue: string;
  cardBrand: CardBrand;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const MAX_LENGTH = {
  [CARD_BRAND.Diners]: 16,
  [CARD_BRAND.AMEX]: 17,
  [CARD_BRAND.Visa]: 19,
  [CARD_BRAND.MasterCard]: 19,
  [CARD_BRAND.UnionPay]: 19,
  [CARD_BRAND.UNKNOWN]: 19,
};

export default function CardNumberInput({
  formattedValue,
  cardBrand,
  onChange,
  onBlur,
  ...attributes
}: ICardNumberInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const rawValue = inputValue.replace(/ /g, '');

    onChange({ ...e, target: { ...e.target, value: rawValue } });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const rawValue = inputValue.replace(/ /g, '');

    onBlur({ ...e, target: { ...e.target, value: rawValue } });
  };

  return (
    <Input
      value={formattedValue}
      onChange={handleChange}
      onBlur={handleBlur}
      maxLength={MAX_LENGTH[cardBrand]}
      {...attributes}
    />
  );
}
