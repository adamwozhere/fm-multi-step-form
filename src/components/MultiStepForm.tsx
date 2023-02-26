import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';
import { useState } from 'react';

interface MultiStepFormProps {
  children: React.ReactNode;
  formSchema: ZodType<any>;
}

export default function MultiStepForm({
  children,
  formSchema,
}: MultiStepFormProps) {
  const [formStep, setFormStep] = useState<number>(0);
  const methods = {
    ...useForm({ resolver: zodResolver(formSchema) }),
    formStep,
    setFormStep,
  };

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
