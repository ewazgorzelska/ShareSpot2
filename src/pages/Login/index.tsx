import { Center, TextInput } from '@mantine/core';
import Button from 'components/commons/Button';
import './index.styles.scss';

const Login = () => {
  return (
    <div className='login_container'>
      <h1>Log in to ShareSpot</h1>
      <Center className='form_container'>
        <TextInput label='Your e-mail' />
        <TextInput label='Your password' />
      </Center>
      <Button text='Log in' />
    </div>
  );
};

export default Login;
