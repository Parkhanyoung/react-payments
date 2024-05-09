import { ReactComponent as InactiveCheckIcon } from './inactive.svg';
import { ReactComponent as ActiveCheckIcon } from './active.svg';

export interface ICheckIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Icon active status
   */
  isActive: boolean;
  /**
   * Icon size (decide the width and height of the icon)
   * @defaultValue '24px'
   */
  length?: string;
}

export default function CheckIcon({ isActive, length = '24px', ...attributes }: ICheckIconProps) {
  return isActive ? (
    <ActiveCheckIcon width={length} height={length} {...attributes} />
  ) : (
    <InactiveCheckIcon width={length} height={length} {...attributes} />
  );
}
