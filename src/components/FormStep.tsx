import { useContext } from 'react';
import { FormContext } from './FormContext';

interface FormStepProps {
  children: React.ReactNode;
  step: number;
  currentStep?: number;
  label?: string;
  description?: string;
}

export default function FormStep({
  step,
  currentStep,
  children,
  label,
  description,
}: FormStepProps) {
  const myContext = useContext(FormContext);
  console.log('context', myContext);

  const show = () => {
    return step === myContext.formStep;
  };

  return (
    <section className={`form-step ${step}`}>
      {label && <h3>{label}</h3>}
      {description && <p>{description}</p>}
      {children}
    </section>
  );
}
