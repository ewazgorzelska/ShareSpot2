import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import {
  INVALID_EMAIL_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  PASSWORD_MIN_LENGTH,
  REQUIRED_MESSAGE,
} from 'yup/messages';
import { useForm, yupResolver } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Flex,
  Title,
  Select,
  Button,
  Group,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';

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

const SignUp = () => {
  const form = useForm({
    validate: yupResolver(SignInSchema),
    initialValues: {
      name: '',
      surname: '',
      email: '',
      number: '',
      location: '',
      password: '',
      confirmPassword: '',
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
        Sign Up to ShareSpot
      </Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Flex gap='lg' justify='center' align='center' direction='column'>
          <TextInput
            label='Your name:'
            type='text'
            required
            {...form.getInputProps('name')}
            w={largeScreen ? '500px' : '300px'}
            styles={{
              label: {
                color: 'var(--mantine-color-brand-1)',
              },
            }}
          />
          <TextInput
            label='Your surname:'
            type='text'
            required
            {...form.getInputProps('surname')}
            w={largeScreen ? '500px' : '300px'}
            styles={{
              label: {
                color: 'var(--mantine-color-brand-1)',
              },
            }}
          />
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
          <Group>
            <TextInput
              label='Parking spot number:'
              type='text'
              required
              {...form.getInputProps('number')}
              w={largeScreen ? '435px' : '235px'}
              styles={{
                label: {
                  color: 'var(--mantine-color-brand-1)',
                },
              }}
            />
            <Button type={'button'} mt='21px'>
              +
            </Button>
          </Group>
          <Select
            label='Parking spot location:'
            placeholder='Pick one'
            required
            {...form.getInputProps('location')}
            w={largeScreen ? '500px' : '300px'}
            styles={{
              label: {
                color: 'var(--mantine-color-brand-1)',
              },
            }}
            data={[
              { value: 'up', label: 'outside' },
              { value: 'down', label: 'garage' },
            ]}
          />
          <PasswordInput
            label='Your password:'
            required
            {...form.getInputProps('password')}
            w={largeScreen ? '500px' : '300px'}
          />
          <PasswordInput
            label='Confirm password:'
            required
            {...form.getInputProps('confirmPassword')}
            w={largeScreen ? '500px' : '300px'}
          />
          <Button type='submit'>Sign up</Button>
          <Link to='/signin'>Sign in</Link>
        </Flex>
      </form>
    </Flex>
  );
};

export default SignUp;
