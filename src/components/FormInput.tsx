import { Flex, Input } from 'antd';
import Password from 'antd/es/input/Password';

type formInputProp = {
  name: string;
  type: 'email' | 'text' | 'password';
};

const FormInput = ({ name, type }: formInputProp) => {
  // reminder check that code file in the typescript course to learn about rendering based on a type.Just check the infobox code file in the typesrcipt folder

  if (type === 'text') {
    return (
      <>
        <label className=" rounded-md p-2 border border-[rgb(31,4,4)]   flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            name={name}
            type="text"
            className="grow bg-[#FFF4F4]   focus:outline-none"
            placeholder="Username"
            required
          />
        </label>
      </>
    );
  }
  if (type === 'email') {
    return (
      <>
        <label className="rounded-md p-2 border-[rgb(31,4,4)] border  focus:border-none flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            name={name}
            type={type}
            className="grow bg-[#FFF4F4]  placeholder:no-underline focus:bg-[#FFF4F4] "
            placeholder="JohnDoe@gmail.com"
            required
          />
        </label>
      </>
    );
  }

  if (type === 'password') {
    return (
      <>
        <Password name={name} size="large" required />
      </>
    );
  }

  return (
    <>
      <label htmlFor="label" className="label">
        <span>Name</span>
        <input type="text" name="name" id="" />
      </label>
    </>
  );
};

export default FormInput;
