import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import FooterLogo from '../assets/FooterLogo.png';
const Footer = () => {
  return (
    <section className=" px-5  form-control bg-[rgb(31,4,4)] gap-2 lg:bg-[rgb(31,4,4)]   text-white 2xl:h-[53vh]">
      <div
        id="up-tag"
        className="grid grid-cols-3 gap-3  items-center py-16  border-[#FFF4F4] border-b lg:gap-0 "
      >
        <div id="tag-one" className="border-[#ffffff] border-b"></div>
        <img
          src={FooterLogo}
          alt="Urban Styles"
          className="object-fit fill-[#FFF4F4] place-self-center"
        />
        <div id="tag-two" className="border-[#ffffff] border-b"></div>
      </div>
      <div
        id="pages"
        className="border-[#FFF4F4] border-b py-8 flex justify-center"
      >
        <ul className=" grid grid-cols-2 py-16   lg:flex gap-8 lg:py-8">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/products">PRODUCTS</a>
          </li>
          <li>
            <a href="/wishlist">WISHLIST</a>
          </li>
          <li>
            <a href="/cart">CART</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div
        id="sub-links"
        className="grid grid-cols-1 border-b-0 lg:grid-cols-3 py-8  lg:border-[#FFF4F4] lg:border-b  "
      >
        <div className="grow flex flex-col items-center text-center gap-8 border-[#FFF4F4] border-b py-16  lg:border-[#FFF4F4]  lg:border-r  lg:border-b-0">
          <h2 className="">CONTACT</h2>
          <p className="max-w-[416px] text-xl">
            Email: support@urbanstyles.com Phone: (555) 555-5555, (222) 222-2222
            No 22, Lekki Ajah Complex Hall
          </p>
        </div>
        <div className="grow-[2] flex flex-col items-center gap-8 border-[#FFF4F4]  border-b border-r-0 py-16  lg:border-[#FFF4F4]  lg:border-r lg:border-b-0">
          <h2>SOCIALS</h2>
          <ul className="flex flex-col gap-y-4">
            <li className="text-center">Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="grow flex flex-col items-center gap-8 text-center border-[#FFF4F4] py-16  border-b lg:border-none">
          <h2>BUSINESS HOURS</h2>
          <p className="max-w-[416px] text-xl ">
            Monday to Friday: 9:00 AM to 6:00 PM (EST) Saturday: 12:00 AM to
            6:00 PM (EST) Closed on sunday
          </p>
        </div>
      </div>
      <div className="terms flex justify-center pb-12 mt-3 lg:justify-end">
        <p>TERMS AND CONDITIONS</p>
      </div>
    </section>
  );
};

export default Footer;
