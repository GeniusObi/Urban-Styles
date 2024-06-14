import { Form, Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CartIcon, SearchIcon } from '../icons';
import { Col, Dropdown, MenuProps, Row } from 'antd';
import { HoverCard, Button, Text, Group } from '@mantine/core';
import Bars from '../assets/Bars.png';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FormEvent, useState } from 'react';
import HoverBlock from './HoverBlock';
import AuthButtons from './AuthButtons';
const myUser = true;
const cart = !true;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to={'/register'} rel="noopener noreferrer">
        Register
      </Link>
    ),
  },
  {
    key: '2',
    label: <Link to={'/login'}>login</Link>,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const handleSearchOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchOrder = formData.get('search-query');
    navigate(`/search/${searchOrder}`);
    event.currentTarget.reset();
  };
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
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <NavLink to={'/'}>HOME</NavLink>
          </li>

          <li>
            <NavLink to={'/contact'}>CONTACT</NavLink>
          </li>
          <li>
            <NavLink to={'/wishlist'}>WISHLIST</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>PRODUCTS</NavLink>
          </li>
          {myUser ? (
            <li>
              <NavLink to={'/checkout'}>CHECKOUT</NavLink>
            </li>
          ) : null}
        </ul>

        <Sheet>
          <SheetTrigger className="block lg:hidden">
            <img src={Bars} alt="Mobile Nav Icon" />
          </SheetTrigger>
          <SheetContent className="w-[270px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>
                <img src={logo} alt="Urban Styles" />
              </SheetTitle>
              <SheetDescription>
                <ul className=" mt-8 flex flex-col items-start justify-evenly gap-10">
                  <li>
                    <NavLink to={'/'} className={'text-black'}>
                      HOME
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to={'/contact'} className={'text-black'}>
                      CONTACT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/wishlist'} className={'text-black'}>
                      WISHLIST
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/products'} className={'text-black'}>
                      PRODUCTS
                    </NavLink>
                  </li>
                  {myUser ? (
                    <li>
                      <NavLink to={'/checkout'} className={'text-black'}>
                        CHECKOUT
                      </NavLink>
                    </li>
                  ) : null}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div
        className="my-8 l flex  gap-4 lg:my-auto lg:justify-end "
        // gutter={[16, 16]}
      >
        <div className="w-full lg:w-fit">
          <form
            onSubmit={handleSearchOrder}
            className="max-w-xl justify-self-stretch border-[#999999] p-3 border flex items-center gap-4  focus-within:border-2 lg:w-[450px] 2xl:min-w-[1050px] "
          >
            <div className="search-icon   focus:border-[#999999]">
              <SearchIcon />
            </div>
            <div className="grow w-full focus:cursor-pointer">
              <input
                type="text"
                className="w-full bg-[rgb(255,244,244)] outline-none"
                placeholder="search"
                name="search-query"
              />
            </div>
          </form>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to={'/cart'}
            id="cart"
            className="text-red-500 flex items-center justify-center"
          >
            <CartIcon /> (6)
          </Link>
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//  <div
//    id="search-nav-container"
//    className="border-[rgb(31,4,4)]    flex  justify-end gap-8 py-8 lg:border-none "
//  >
//    <Form
//      id="input-container"
//      className=" w-[607px] border-[#999999] p-3 border flex items-center gap-2  focus-within:border-2"
//    >
//      <div className="search-icon   focus:border-[#999999]">
//        <SearchIcon />
//      </div>
//      <div className="grow focus:cursor-pointer">
//        <input
//          type="text"
//          className=" bg-[rgb(255,244,244)] outline-none"
//          placeholder="search"
//        />
//      </div>
//    </Form>
//    <Link to={'/cart'} id="cart" className="flex gap-2 items-center">
//      <CartIcon />
//      (0)
//    </Link>
//    <Dropdown menu={{ items }} placement="topRight">
//      <p>menu</p>
//    </Dropdown>
//  </div>;
