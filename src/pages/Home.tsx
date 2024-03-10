import { Link } from 'react-router-dom';
import { AllProducts, NewReleases, News } from '../components';
import { RightArrow } from '../icons';
import releaseA from '../assets/releaseB.png';
import releaseB from '../assets/releaseB.png';
import releaseC from '../assets/releaseC.png';
import imageA from '../assets/imageA.png';
import imageB from '../assets/imageB.png';
import imageC from '../assets/imageC.png';
import { Button } from 'antd';
export const loader = async () => {
  return null;
};
const Home = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="hero" className="py-16 px-5 mt-0 lg:py-24 lg: lg:px-12 ">
        <h2 className="max-w-[480px] text-8xl font-medium text-center md:mx-auto  md:min-w-[700px]  lg:text-[160px]   lg:min-w-[1204px]">
          URBAN STYLES
        </h2>
        <div
          id="hero-images-div"
          className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3"
        >
          <img
            src={imageA}
            alt=""
            id="imageA"
            className=" block object-fit  "
          />
          <img
            src={imageB}
            alt=""
            className="object-fit block relative bottom-4 md: mx-auto w-full"
          />
          <img src={imageC} alt="" id="imageC" className=" block object-fit " />
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="px-5 py-16 lg:px-12 lg:py-24 flex flex-col gap-24">
        <div id="upper-col" className="w-full flex">
          <div className="first w-[10%] lg:w-[15%]"></div>
          <div className="second w-[75%] lg:w-[75%] flex flex-col gap-6">
            <h2 className="text-8xl">About</h2>
            <p className="text-xl w-[328px]  md:min-w-[650px] lg:w-[976px] lg:text-2xl ">
              At Urban Styles, we're not just a fashion destination; we're a
              cultural movement. We understand that clothing isn't just
              something you wear; it's a statement, a reflection of your
              identity and the vibrant urban world you inhabit
            </p>
            <Link to={'products'}>SEE MORE</Link>
          </div>
        </div>
        <div id="lower-col" className="about-img  "></div>
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
          <Link
            to={'/products'}
            className=" capitalize   p-4 border-[#fff] flex items-center   justify-center mt-16  border w-[194px] h-[56px] hover:bg-[rgb(31,4,4)] text-white  lg:block mx-auto"
          >
            contact sales <RightArrow />
          </Link>
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
