import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import logo from '../assets/logo.png';
import { type FormEvent } from 'react';
import customFetch from '@/utils/Fetch';
import axios, { AxiosError } from 'axios';
// export const action = async ({ request }) => {
//   const formData = await request.formData();
// };
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formdata = new FormData(event.currentTarget);
  const data = Object.fromEntries(formdata);

  try {
    const response = await customFetch.post(
      '/auth/users/',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  // event.currentTarget.reset();
};

const RegisterPage = () => {
  return (
    <main className=" h-screen grid place-items-center   ">
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
