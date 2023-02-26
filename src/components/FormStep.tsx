import { useFormContext } from 'react-hook-form';

interface FormStepProps {
  step: number;
  children: React.ReactNode;
}

export default function FormStep({ children, step }: FormStepProps) {
  const { formState } = useFormContext();
  const formStep = formState.submitCount;
  return <div>{formStep >= step && children}</div>;
}
