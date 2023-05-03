import type { Meta } from '@storybook/react';
import { useRef, useState } from 'react';
import { PasswordInput } from '../../../components/input/PasswordInput';

const meta = {
  title: 'Example/Input/CardInput',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Password = () => {
  const passwordInputRef = useRef(null);
  const [password, setPassword] = useState(['', '']);

  return (
    <PasswordInput
      passwordInputRef={passwordInputRef}
      password={password}
      setPassword={setPassword}
    />
  );
};