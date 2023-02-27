import { Children } from 'react';
import useMultiStepForm from '../hooks/useMultiStepForm';
import { formSchema, FormSchema } from '../schemas/formSchema';

import FormStep from './FormStep';
import TextField from './TextField';

interface MultiStepFormProps {
  children: React.ReactNode;
}

export function MultiStepForm({ children }: MultiStepFormProps) {
  const { register, handleSubmit, errors, currentStep, setCurrentStep } =
    useMultiStepForm({
      schema: formSchema,
    });

  const onSubmit = (data: unknown) => {
    console.log('submitted!', data);
    setCurrentStep((prev) => prev + 1);
  };

  const _children = Children.toArray(children) as React.ReactElement[];
  const childSteps = _children.filter((child) => child.type === FormStep);
  console.log(childSteps);
  const totalChildren = childSteps.length;

  console.log('total children', totalChildren);

  return (
    <form>
      <h1>hello</h1>
      <div>{children}</div>
    </form>
  );
}
