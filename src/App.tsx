import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { formSchema, FormSchema } from './schemas/formSchema';
import { MultiStepForm } from './components/MultiStepForm';
import FormStep from './components/FormStep';

function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema.partial()) });

  const [step, setStep] = useState<number>(0);

  const onSubmit = (data: unknown) => {
    alert('submit');
    console.log(data);
    setStep((current) => current + 1);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            {...register('name')}
          />
          {errors.name && (
            <span role="alert">{errors.name?.message as string}</span>
          )}
        </div>
        {step === 1 && (
          <div>
            <label htmlFor="email-input">Email</label>
            <input
              type="text"
              {...register('email')}
            />
            {errors.email && (
              <span role="alert">{errors.email?.message as string}</span>
            )}
          </div>
        )}
        <div>
          <input type="submit" />
        </div>
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      <MultiStepForm
        onSubmit={(data) => console.log(data)}
        schema={formSchema.partial()}
      >
        <FormStep
          step={1}
          currentStep={0}
        >
          <div>
            <label htmlFor="name-input">Name</label>
            <input
              type="text"
              {...register('name')}
            />
            {errors.name && (
              <span role="alert">{errors.name?.message as string}</span>
            )}
          </div>
        </FormStep>
        <FormStep
          step={2}
          currentStep={0}
        >
          <div>
            <label htmlFor="email-input">Email</label>
            <input
              type="text"
              {...register('email')}
            />
            {errors.email && (
              <span role="alert">{errors.email?.message as string}</span>
            )}
          </div>
        </FormStep>
        <input type="submit" />
      </MultiStepForm>
    </div>
  );
}

export default App;

/*

<stepper active="0"> <-- the stepper holds an array of children 'stepper.steps' and renders based on active
  is it easier to just setup use context and handle the rendering of steps inside their own component?
  Pass down a useContext somehow as prop from the outer FormProvider ?
  (might be easier then to manage the structure of the form, and can follow useContextTutorial)
  Or composition? just send only the props needed down, e.g. the step number, or the useForm function ?

  <stepper.step>
    content
  </stepper.step


</stepper>



*/
