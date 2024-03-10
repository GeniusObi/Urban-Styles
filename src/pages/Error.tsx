import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className="h-screen flex flex-col gap-4 justify-center items-center">
      <h2 className="text-2xl lg:text-4xl text-center font-bold">
        404 ERROR PAGE NOT FOUND
      </h2>
      <Link
        to={'/'}
        className="p-4 border border-r-2 bg-[rgb(31,4,4)] text-white"
      >
        Back to home
      </Link>
    </main>
  );
};

export default Error;
