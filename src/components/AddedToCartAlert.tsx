import { Link } from 'react-router-dom';
// const cart = true;
const AddedToCartAlert = () => {
  return (
    <div
      role="alert"
      className="bg-red-500  w-full relative top-0 translate-y-full px-2 py-0.5  flex flex-row-reverse items-center justify-between"
    >
      <Link to={'/cart'} className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M16.1716 11.4999L10.8076 6.13589L12.2218 4.72168L20 12.4999L12.2218 20.278L10.8076 18.8638L16.1716 13.4999H4V11.4999H16.1716Z"
            fill="#FFF4F4"
          />
        </svg>
      </Link>

      <span className="text-[#FFF4F4]">Product Added To Cart</span>
    </div>
  );
};

export default AddedToCartAlert;
