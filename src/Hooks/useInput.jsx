import { useState } from "react";

export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);

  const handleDate = (value, keyType) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: value,
      };
    });
  };

  const handleCardNumber = (value, keyType) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: value,
      };
    });
  };

  const handleNameToUpperCase = (value) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        value: value.toUpperCase(),
      };
    });
  };

  const handleSecurityCode = (value) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        value: "•".repeat(value.length),
      };
    });
  };

  const handlePassword = (value, keyType) => {
    console.log(value);
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: "•".repeat(value.length),
      };
    });
  };
  const handleCardAlias = (value) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        value,
      };
    });
  };

  const onChange = (event, keyType) => {
    const {
      target: { value, name },
    } = event;

    if (name === "expireDate") {
      handleDate(value, keyType);
      return;
    }

    if (name === "cardNumber") {
      handleCardNumber(value, keyType);
      return;
    }

    if (name === "holderName") {
      handleNameToUpperCase(value);
      return;
    }

    if (name === "securityCode") {
      handleSecurityCode(value);
      return;
    }

    if (name === "password") {
      handlePassword(value, keyType);
      return;
    }

    if (name === "cardAlias") {
      handleCardAlias(value, keyType);
    }
  };

  return [value, onChange, setValue];
}