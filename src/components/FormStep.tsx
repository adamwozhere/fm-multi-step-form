import { useContext } from 'react';
import { FormContext } from './FormContext';

interface FormStepProps {
  children?: React.ReactNode;
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

  console.log(step, currentStep, step === currentStep);
  const showStep = () => {
    return step === currentStep;
  };

  if (showStep()) {
    return (
      <section className={`form-step ${step}`}>
        {currentStep}
        {label && <h3>{label}</h3>}
        {description && <p>{description}</p>}
        {children}
      </section>
    );
  } else {
    return <></>;
  }
}
