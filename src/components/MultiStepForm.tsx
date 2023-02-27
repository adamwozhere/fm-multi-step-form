import { zodResolver } from '@hookform/resolvers/zod';
import { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ZodTypeAny } from 'zod';

import { FormContext } from './FormContext';

interface MultiStepFormProps {
  children: React.ReactNode;
  onSubmit: (data: unknown) => void;
  schema: ZodTypeAny;
}

export function MultiStepForm({
  children,
  onSubmit,
  schema,
}: MultiStepFormProps) {
  const [formStep, setFormStep] = useState<number>(1);

  const [data, setData] = useState({});

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleNext = (data: unknown) => {
    setFormStep((prev) => prev + 1);
    setData((prev) => ({ ...prev, data }));
    logData();
  };

  const logData = () => console.log('data: ', data);

  return (
    <>
      <FormContext.Provider value={{ register, watch, handleSubmit, formStep }}>
        <form onSubmit={handleSubmit(handleNext)}>{children}</form>
      </FormContext.Provider>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
}
