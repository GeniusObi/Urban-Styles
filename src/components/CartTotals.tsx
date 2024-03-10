import { Link } from 'react-router-dom';

const myUser = true;
const CartTotals = () => {
  return (
    <section
      id="rightcol"
      className=" w-[25%] mt-24 h-[304px] flex flex-col gap-8 "
    >
      <h2>Order summary</h2>
      <div className="lists flex justify-between">
        <div className="leftcol">
          <ul className="flex flex-col gap-6">
            <li>Cart Item</li>
            <li>Sub total</li>
            <li>Delivery</li>
            <li>Total</li>
          </ul>
        </div>
        <div className="rightcol">
          <ul className="flex flex-col gap-6 text-end">
            <li>3</li>
            <li>200000</li>
            <li>20</li>
            <li>3000000</li>
          </ul>
        </div>
      </div>
      {myUser ? (
        <Link
          to={'/checkout'}
          className=" btn  rounded-none px-8 py-4 self-start bg-[#1F0404] capitalize text-[#FFF4F4]"
        >
          Proceed to checkout
        </Link>
      ) : (
        <Link
          to={'/login'}
          className=" btn  rounded-none px-8 py-4 self-start bg-[#1F0404] capitalize text-[#FFF4F4]"
        >
          Please login
        </Link>
      )}
    </section>
  );
};

export default CartTotals;
