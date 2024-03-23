import React from "react";
import { Card, Text, TextField } from "@shopify/polaris";
interface TextFieldCustomProps {
  label: string;
  handleChangeValue: any;
  value: any;
  errorMessage: string;
}

const TextFieldCustom: React.FC<TextFieldCustomProps> = ({
  label,
  value,
  handleChangeValue,
  errorMessage,
}) => {
  const handleChange = (newValue: string) => {
    handleChangeValue(newValue, label);
  };
  return (
    <div>
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        error={!!errorMessage}
      />
      {errorMessage && (
        <Text as="h1" variant="bodyMd">
          {errorMessage}
        </Text>
      )}
    </div>
  );
};

export default TextFieldCustom;
