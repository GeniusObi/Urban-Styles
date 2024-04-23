import { Link, Outlet } from 'react-router-dom';
import {
  AddedToCartAlert,
  AddedToWishList,
  Footer,
  Navbar,
} from '../components';
const cart = false;
const wishlist = true;
const SharedLayout = () => {
  return (
    /*
    ========Todos for this page========
    Todo 1:
       To toggle the alert, use useState hook
    Todo 2:
   */
    <main className="min-h-screen relative">
      {cart && <AddedToCartAlert />}
      {(cart && wishlist) || wishlist ? <AddedToWishList /> : null}
      <Navbar />
      <section className="bg-[#FFF4F4]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default SharedLayout;
