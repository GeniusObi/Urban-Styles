import { Form, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import logo from '../assets/logo.png';
export const action = async () => {
  return null;
};

const Login = () => {
  return (
    <main className="h-screen grid place-items-center">
      <Form className="card w-96 form-control gap-4  shadown-xl">
        <img
          src={logo}
          alt="Urban Styles"
          className="object-fit w-60 block mx-auto "
        />
        {/* email */}
        <FormInput name="email" type="email" />
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
      </Form>
    </main>
  );
};

export default Login;
