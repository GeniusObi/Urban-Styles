import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import logo from '../assets/logo.png';
export const action = async () => {
  return null;
};
const RegisterPage = () => {
  return (
    <main className=" h-screen grid place-items-center   ">
      <Form method="post" className="card w-96  form-control gap-4  shadown-xl">
        <img
          src={logo}
          alt="Urban Styles"
          className="object-fit w-60 block mx-auto"
        />
        {/* username */}
        <FormInput name="username" type="text" />
        {/* email */}
        <FormInput name="username" type="email" />
        {/* password */}
        <FormInput name="" type="password" />
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
      </Form>
    </main>
  );
};

export default RegisterPage;
