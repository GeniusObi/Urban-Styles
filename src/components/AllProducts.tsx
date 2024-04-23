import { useState } from 'react';
import { PlusIcon, HeartIcon } from '../icons';
import { products } from '../utils/constants';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const AllProducts = () => {
  const [wishlist, setWishList] = useState<boolean>(false);
  return (
    <section className="flex flex-col gap-8 py-16 px-5 lg:gap-16 lg:py-24 lg:px-12">
      {/*Section Title */}
      <div id="section-title" className="flex justify-between">
        <div id="left-col" className="flex flex-col gap-2 ">
          <h3 className="text-4xl not-italic font-medium leading-[4.5rem] lg:text-[3.5rem]">
            All Products
          </h3>
          <p className=" text-lg not-italic font-normal leading-normal capitalize lg:text-[1.25rem]  ">
            All Items Available for purchase
          </p>
        </div>
        <div
          id="right-col"
          className="self-end  text-lg not-italic font-normal leading-normal capitalize lg:text-[1.25rem]"
        >
          SEE ALL
        </div>
      </div>
      {/* Products */}
      <Row
        id="products-display-section"
        // className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
        gutter={[32, 32]}
      >
        {products.map((product, index) => {
          const { name, image, price } = product;
          return (
            // <div
            //   key={index}
            //   className="w-full relative lg:w-[380px] 2xl:w-full "
            // >

            // </div>

            <Col key={index} xs={24} md={12} xl={8}>
              <article className="w-full relative  flex flex-col gap-3">
                {/* product image */}
                <img
                  src={image}
                  alt="Urban Styles Product"
                  className="object-fit w-full"
                />
                {/* product description */}
                <div className=" flex items-center justify-between">
                  <div className="description flex flex-col gap-4">
                    <h2 className=" text-lg 2xl:text-6xl">
                      Slim V Neck Limited Pique Polo
                    </h2>
                    <p className="mt-2 2xl:text-4xl">{price}</p>
                  </div>
                  <Button
                    type="text"
                    className="border  btn rounded-none mt-4 border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end flex justify-center items-center 2xl:h-[7rem] 2xl:w-[7rem] "
                  >
                    <PlusIcon />
                  </Button>
                  <button
                    type="button"
                    className={`border rounded-none   border-[#1F0404] flex items-center justify-center text-2xl  absolute top-8  right-6  p-2 w-10 h-10 ${
                      wishlist ? 'bg-black ' : null
                    }`}
                    onClick={() => setWishList(!wishlist)}
                  >
                    <AiOutlineHeart
                      className={`${wishlist ? 'text-white' : 'text-black'}`}
                    />
                  </button>
                </div>
              </article>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default AllProducts;
