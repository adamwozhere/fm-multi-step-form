import { useFormContext } from 'react-hook-form';

interface FieldProps {
  label: string;
  id: string;
  placeholder: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
}

export default function Field({
  label,
  id,
  placeholder,
  type = 'text',
  name,
}: FieldProps) {
  const { register, formState: errors } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        aria-invalid={errors ? 'true' : 'false'}
        {...register(name)}
      />
      {errors ? <span role="alert">errors.name.message</span> : null}
    </div>
  );
}
