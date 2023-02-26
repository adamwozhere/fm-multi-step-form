// import useForm from './hooks/useForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from './components/TextField';
import style from './css/globals.css';

function App() {
  const formSchema = z.object({
    testField: z.string().min(4),
    name: z.string().min(2).max(80),
    email: z.string().email(),
    phone: z
      .string()
      .regex(
        /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/
      ),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => console.log(data);

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="test-field"
          label="Test Field"
          type="text"
          placeholder="hello"
          fieldProps={{ ...register('testField') }}
          error={errors.testField?.message as string}
        />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name')}
          />
          {errors.name && (
            <span role="alert">{errors.name?.message as string}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email')}
          />
          {errors.email && (
            <span role="alert">{errors.email?.message as string}</span>
          )}
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            aria-invalid={errors.phone ? 'true' : 'false'}
            {...register('phone')}
          />
          {errors.phone && (
            <span role="alert">{errors.phone?.message as string}</span>
          )}
        </div>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
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
