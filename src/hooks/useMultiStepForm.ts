import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ZodType } from 'zod';

interface useMultiStepFormProps {
  schema: any;
}

export default function useMultiStepForm({ schema }: useMultiStepFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema.partial()) });

  const [currentStep, setCurrentStep] = useState<number>(1);

  return {
    register,
    handleSubmit,
    watch,
    currentStep,
    setCurrentStep,
    errors,
  };
}
