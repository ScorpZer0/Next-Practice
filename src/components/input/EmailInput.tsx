import React from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  id?: string;
  requried?: boolean;
};
const EmailInput: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  id,
  requried = true,
}) => {
  return (
    <input
      id={id}
      type="email"
      value={value}
      placeholder={placeholder}
      onChange={(event) => setValue(event.target.value)}
      required={requried}
    />
  );
};

export default EmailInput;