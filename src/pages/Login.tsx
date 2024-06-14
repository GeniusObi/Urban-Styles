import { Form, Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import logo from '../assets/logo.png';
import { type FormEvent } from 'react';
import axios from 'axios';
import { useUserContext } from '@/context/userContext';
import customFetch from '@/utils/Fetch';
export const action = async () => {
  return null;
};

const Login = () => {
  const navigate = useNavigate();
  const { getLocalStorageUser } = useUserContext();
  const handleUserLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    try {
      const response = await axios(
        'https://ariestobells.pythonanywhere.com/auth/token/login/',
        {
          method: 'post',
          data: { password, username },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="h-screen grid place-items-center">
      <form
        onSubmit={handleUserLogin}
        className="card w-96 form-control gap-4  shadown-xl"
      >
        <img
          src={logo}
          alt="Urban Styles"
          className="object-fit w-60 block mx-auto "
        />
        {/* email */}
        <FormInput name="username" type="text" />
        {/* password */}
        <FormInput name="password" type="password" />
        <SubmitBtn text="submit" />
        <p className="text-center">
          Don't have an account yet?
          <Link
            to={'/register'}
            className="ml-2 link link-hover hover:underline text-[rgb(31,4,4)] capitalize"
          >
            Register
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
