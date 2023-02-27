import { RefCallback } from 'react';

type fieldPropsRegister = {
  onChange: (event: { target: any; type?: any }) => Promise<void | boolean>;
  onBlur: (event: { target: any; type?: any }) => Promise<void | boolean>;
  ref: RefCallback<HTMLInputElement>;
  name: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  type?: 'text' | 'password' | 'tel' | 'email';
  placeholder?: string;
  fieldProps?: fieldPropsRegister;
}

export default function TextField({
  id,
  label,
  type,
  error,
  placeholder,
  fieldProps,
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ?? 'text'}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        {...(fieldProps ?? {})}
      />
      {error ? <span role="alert">{error}</span> : null}
    </div>
  );
}
