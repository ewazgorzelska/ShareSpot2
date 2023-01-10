import { Link } from 'react-router-dom';
import { TextInput, PasswordInput, Flex, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  PASSWORD_MIN_LENGTH,
  REQUIRED_MESSAGE,
} from 'yup/messages';
import Button from 'components/commons/Button/Button';

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
    <Flex gap='xl' justify='center' align='center' direction='column' mb='40px'>
      <Title
        color={'var(--mantine-color-brand-1)'}
        mb='xl'
        size={largeScreen ? 'h1' : 'h3'}
      >
        Log in to ShareSpot
      </Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Flex gap='40px' justify='center' align='center' direction='column'>
          <TextInput
            label='Your e-mail:'
            type='email'
            required
            {...form.getInputProps('email')}
            w={largeScreen ? '500px' : '300px'}
            styles={{
              label: {
                color: 'var(--mantine-color-brand-1)',
              },
            }}
          />
          <PasswordInput
            label='Your password:'
            required
            {...form.getInputProps('password')}
            w={largeScreen ? '500px' : '300px'}
          />
          <Button text='Log in' type='submit' />
          <Link to='/signup'>Sign Up</Link>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
