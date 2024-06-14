import { Form } from 'react-router-dom';
import { CartContainer, CartTotals } from '../components';

export const action = async () => {
  return null;
};

const CartPage = () => {
  return (
    <section className="px-5 py-16 lg:px-12 lg:py-36">
      {/* Cart Items Information section*/}
      <section className=" w-full  flex flex-col lg:flex-row gap-8">
        <div id="leftcol" className=" grow-[2] flex flex-col gap-16  p-6 ">
          <h2 className="text-2xl">Carts</h2>
          <CartContainer />
          <Form id="coupon-form" className=" h-[56px] gap-8 flex w-full">
            <input
              type="text"
              placeholder="Enter your coupon code"
              className="w-[60%] bg-[#FFF4F4] outline-none border border-[#B59191] p-4 focus:border-2"
            />
            <button
              type="submit"
              className=" btn h-full rounded-none px-8 py-4 self-start bg-[#1F0404] text-[#FFF4F4]"
            >
              Apply Coupon
            </button>
          </Form>
        </div>
        {/* Cart Totals */}
        <CartTotals />
      </section>
    </section>
  );
};

export default CartPage;
