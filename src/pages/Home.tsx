import { Link } from 'react-router-dom';
import { AllProducts, NewReleases, News } from '../components';
import { RightArrow } from '../icons';
import releaseA from '../assets/releaseB.png';
import releaseB from '../assets/releaseB.png';
import releaseC from '../assets/releaseC.png';
import imageA from '../assets/imageA.png';
import imageB from '../assets/imageB.png';
import imageC from '../assets/imageC.png';
import aboutMobile from '../assets/about-img-mobile.png';
import aboutDesktop from '../assets/about-img.png';
import { Button, Col, Row } from 'antd';
import { useEffect, useRef } from 'react';
import customFetch, { productFetch } from '@/utils/Fetch';
import axios from 'axios';
import { useUserContext } from '@/context/userContext';
import { useProductContext } from '@/context/productContext';
import { useWishlist } from '@/context/WishlistContext';
// import { bring } from '@/utils/Fetch';
export const bring = async () => {
  try {
    const response = await customFetch.get('/');
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await productFetch('/products', {
      method: 'get',
    });
    const product = await response.data;
    return product;
    // console.log(records[0].fields.images[0].url);
  } catch (error: any) {
    console.log(error?.response);
  }
};
export const getSingleProduct = async (id?: string) => {
  try {
    const response = await productFetch(`/products/${id}`, {
      method: 'get',
    });
    const product = await response.data;
    return product;
    // console.log(records[0].fields.images[0].url);
  } catch (error: any) {
    console.log(error?.response);
  }
};

const Home = () => {
  const { getLocalStorageUser } = useUserContext();
  const { products } = useProductContext();
  const { wishlist } = useWishlist();
  const user = getLocalStorageUser();

  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products);
  console.log(wishlist);

  return (
    <main className="relative overflow-clip">
      {/* Hero Section */}
      <section
        id="hero"
        className="py-16 px-5 mt-0 overflow-clip lg:py-24 lg: lg:px-12 xl:mt-8"
      >
        {/* <h2 className="max-w-[480px] text-8xl font-medium text-center md:mx-auto  md:min-w-[700px]  lg:text-[160px]   lg:min-w-[1204px]">
          URBAN STYLES
        </h2> */}
        <Row>
          <Col
            xs={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="flex justify-center"
          >
            <h2 className=" text-5xl sm:text-6xl text-center md:text-8xl font-medium block  lg:text-[10rem] 2xl:text-[25rem] ">
              URBAN STYLES
            </h2>
          </Col>
        </Row>
        <div
          id="hero-images-div"
          className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3 2xl:gap-8 2xl:mt-64"
        >
          <img
            src={imageA}
            alt=""
            id="imageA"
            className=" hidden object-fit lg:block xl:w-full"
          />
          <img
            src={imageB}
            alt=""
            className="object-fit block relative bottom-4 md:mx-auto w-full xl:mx-0 2xl:bottom-20"
          />
          <img
            src={imageC}
            alt=""
            id="imageC"
            className=" hidden object-fit lg:block xl:w-full"
          />
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="px-5 py-16 lg:px-12 lg:py-24 flex flex-col gap-24">
        <div id="upper-col" className="w-full flex">
          <div className="first hidden w-[10%] lg:w-[15%] lg:block"></div>
          <div className="second w-full lg:w-[75%] flex flex-col gap-6">
            <h2 className="text-8xl">About</h2>
            <p className="text-xl max-w-[620px]  md:min-w-[650px] lg:min-w-[976px] lg:text-2xl ">
              At Urban Styles, we're not just a fashion destination; we're a
              cultural movement. We understand that clothing isn't just
              something you wear; it's a statement, a reflection of your
              identity and the vibrant urban world you inhabit
            </p>
            <Link to={'products'}>SEE MORE</Link>
          </div>
        </div>
        <img
          src={aboutDesktop}
          alt="Urban Styles"
          className="hidden lg:block object-cover"
        />
        <img
          src={aboutMobile}
          className="block object-cover lg:hidden"
          alt="Urban Styles"
        />
      </section>
      {/* NEW RELEASE SECTION */}
      <NewReleases />
      {/* Affiliate section */}
      <section className="px-5 py-16 flex flex-col justify-center lg:px-12 lg:py-24 ">
        <div className="sales-img flex flex-col justify-center  lg:items-center text-center text-[#fff]">
          <h2 className=" max-w-[368px] text-[3.5rem] not-italic font-medium leading-[4.5rem]   lg:min-w-[550px]">
            Own a Store? Become Our Affiliate
          </h2>
          <p className="lg:max-w-[504px] text-xl font-light mt-2 leading-[32px]">
            Become a part of the chorus and unlock exciting opportunities for
            mutual growth and success.
          </p>
          <a
            href="/contact"
            className=" capitalize   p-4 border-[#fff] flex items-center   justify-center mt-16  border w-[194px] h-[56px] hover:bg-[rgb(31,4,4)] text-white  lg:block mx-auto"
          >
            contact sales <RightArrow />
          </a>
        </div>
      </section>
      {/* All Products Section */}
      <AllProducts />
      {/* News Section */}
      <News />
    </main>
  );
};

export default Home;
