import { Form, Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import logo from '../assets/logo.png';
import { type FormEvent } from 'react';
import customFetch from '@/utils/Fetch';
import axios, { AxiosError } from 'axios';
import { useUserContext } from '@/context/userContext';

// export const action = async ({ request }) => {
//   const formData = await request.formData();
// };

const RegisterPage = () => {
  const { setLocalStorageUser } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);

    const username = formdata.get('username');
    const password = formdata.get('password');
    const email = formdata.get('email');
    const body = { email, username, password };
    console.log({ username, password, email });
    event.currentTarget.reset();

    try {
      // const response = await axios(
      //   'https://ariestobells.pythonanywhere.com/auth/users/',
      //   {
      //     method: 'post',
      //     data: body,
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      const userData = await customFetch('/auth/users/', {
        method: 'post',
        data: body,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { email, username, id } = userData?.data;

      // localStorage.setItem('user', JSON.stringify(userData.data));
      setLocalStorageUser({ email, username });
      return navigate('/login');
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <main className=" h-screen grid place-items-center">
      <form
        className="card w-96  flex flex-col gap-4  shadown-xl"
        onSubmit={handleSubmit}
      >
        <img
          src={logo}
          alt="Urban Styles"
          className="object-fit w-60 block mx-auto"
        />
        {/* username */}
        <FormInput name="username" type="text" />
        {/* email */}
        <FormInput name="email" type="email" />
        {/* password */}
        <FormInput name="password" type="password" />
        <SubmitBtn text="submit" />
        <p className="text-center">
          Already a member?
          <Link
            to={'/login'}
            className="ml-2 link link-hover underline-link link-neutral capitalize"
          >
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;
