import { Center, TextInput, PasswordInput, MediaQuery } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  PASSWORD_MIN_LENGTH,
  REQUIRED_MESSAGE,
} from 'yup/messages';
import Button from 'components/commons/Button/Button';
import './Login.styles.scss';
import { useMediaQuery } from '@mantine/hooks';

interface ISignInFormValues {
  email: string;
  password: string;
}

const SignInSchema: SchemaOf<ISignInFormValues> = Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL_MESSAGE).required(REQUIRED_MESSAGE),
  password: Yup.string()
    .min(PASSWORD_MIN_LENGTH, INVALID_PASSWORD_MESSAGE)
    .required(REQUIRED_MESSAGE),
});

const Login = () => {
  const form = useForm({
    validate: yupResolver(SignInSchema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const largeScreen = useMediaQuery('(min-width: 900px)');

  return (
    <div className='login_container'>
      <h1>Log in to ShareSpot</h1>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Center className='form_container'>
          <TextInput
            label='Your e-mail:'
            type='email'
            withAsterisk
            required
            {...form.getInputProps('email')}
            w={largeScreen ? '500px' : '300px'}
          />
          <PasswordInput
            label='Your password:'
            withAsterisk
            required
            {...form.getInputProps('password')}
            w={largeScreen ? '500px' : '300px'}
          />
          <Button text='Log in' type='submit' />
        </Center>
      </form>
    </div>
  );
};

export default Login;
