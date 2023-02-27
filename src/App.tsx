import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { formSchema, FormSchema } from './schemas/formSchema';
import { MultiStepForm } from './components/MultiStepForm';
import FormStep from './components/FormStep';
import TextField from './components/TextField';

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
      <MultiStepForm>
        <FormStep
          step={1}
          label="Personal info"
        >
          <TextField
            id={'input-name'}
            label={'Name'}
            fieldProps={register('name')}
            error={errors.name?.message as string}
          />
        </FormStep>
        <FormStep
          step={2}
          label="Step 2"
        >
          <TextField
            id="input-email"
            label="Email"
            fieldProps={register('email')}
            error={errors.email?.message as string}
          />
        </FormStep>
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
