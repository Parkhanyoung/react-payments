import { forwardRef } from "react";
import styled from "styled-components";

export interface InputProps {
  label: string;
  $width: string;
  $textPosition: string;
  type: string;
  placeholder?: string;
  error?: { isError: boolean; errorMessage: string };
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOutFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      $width,
      $textPosition,
      placeholder = "",
      type,
      error = { isError: false, errorMessage: "" },
      handleInput,
      handleOutFocus,
      handleFocus,
    },
    ref
  ) => {
    const { isError, errorMessage } = error;

    return (
      <Colum $width={$width}>
        <InputField
          placeholder={placeholder}
          id={label}
          name={label}
          onInput={handleInput}
          onBlur={handleOutFocus}
          onFocus={handleFocus}
          $textPosition={$textPosition}
          type={type}
          ref={ref}
        />
        {<ErrorMessage>{isError ? errorMessage : ""}</ErrorMessage>}
      </Colum>
    );
  }
);

const Colum = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input<{ $textPosition: string }>`
  height: 45px;
  background-color: #ecebf1;
  border-radius: 7px;
  text-align: ${(props) => props.$textPosition};

  font-size: 16px;
  font-weight: 500;

  padding: 0 10px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="password"]::-ms-reveal {
    display: none;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  width: max-content;
  height: 15px;
  color: red;
`;