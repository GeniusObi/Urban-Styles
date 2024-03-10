import { Form, Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CartIcon, SearchIcon } from '../icons';
const myUser = true;
const cart = !true;
const Navbar = () => {
  return (
    <nav
      className={`border-[rgb(31,4,4)] border-b min-h-[128px]  px-5 ${
        cart ? 'mt-4' : null
      }    lg:px-8   flex flex-col   lg:h-[192px]`}
    >
      <div
        id="first-nav"
        className="flex mx-2 justify-between    border-[rgb(31,4,4)] border-b py-6"
      >
        <img src={logo} alt="Urban Styles" />
        <ul className="invisible lg:visible flex items-center gap-8">
          <li>
            <NavLink to={'/'}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={'about'}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={'contact'}>CONTACT</NavLink>
          </li>
          <li>
            <NavLink to={'wishlist'}>WISHLIST</NavLink>
          </li>
          <li>
            <NavLink to={'products'}>PRODUCTS</NavLink>
          </li>
          {myUser ? (
            <li>
              <NavLink to={'checkout'}>CHECKOUT</NavLink>
            </li>
          ) : null}
        </ul>
      </div>
      <div
        id="search-nav-container"
        className="border-[rgb(31,4,4)]    flex  justify-end gap-8 py-8 lg:border-none "
      >
        <Form
          id="input-container"
          className=" w-[607px] border-[#999999] p-3 border flex items-center gap-2  focus-within:border-2"
        >
          <div className="search-icon   focus:border-[#999999]">
            <SearchIcon />
          </div>
          <div className="grow focus:cursor-pointer">
            <input
              type="text"
              className=" bg-[rgb(255,244,244)] outline-none"
              placeholder="search"
            />
          </div>
        </Form>
        <Link to={'/cart'} id="cart" className="flex gap-2 items-center">
          <CartIcon />
          (0)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
