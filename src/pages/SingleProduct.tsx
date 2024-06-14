import { images, reviews } from '../utils/constants';
import { useEffect, useRef, useState } from 'react';
import { ReviewsForm } from '../components';
import { formHandle } from '../components/ReviewsForm';
import { Col, Row } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { productFetch } from '@/utils/Fetch';
import { imageType } from './Products';

type product = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    price: string;
    description: string;
    quantity: number;
    Size: string[];
    colors: string[];
    images: imageType[];
    featured?: boolean;
  };
};
let sizeArray: Array<string>;
sizeArray = ['XL', 'L', 'M', 'S'];
let colorArray: Array<string>;
colorArray = ['bg-blue-300', 'bg-red-600', 'bg-black'];

const SingleProduct = () => {
  const { id } = useParams<string>();
  const [btnSize, setBtnSize] = useState<string>(sizeArray[0]);
  const [btnColor, setBtnColor] = useState<string>(colorArray[0]);

  const ExternalReviewFormRef = useRef<formHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as {
      name: string;
      description: string;
      location: string;
      image: string;
    };
    console.log(extractedData);

    ExternalReviewFormRef.current?.clear();
  }

  const [singleProduct, setSingleProduct] = useState<product | undefined>(
    undefined
  );

  const getSingleProduct = async (id: string | undefined) => {
    try {
      const response = await productFetch(`/products/${id}`, {
        method: 'get',
      });
      const data = await response.data;
      setSingleProduct(data);
      console.log(singleProduct);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  useEffect(() => {
    console.log(singleProduct);
  }, [singleProduct]);

  const [currentImage, setCurrentImage] = useState<string>(
    singleProduct?.fields.images[0].url
  );
  return (
    <>
      {/* Product details section */}
      <section
        id="product-details-section "
        className="px-5 py-16 lg:py-24 lg:px-12 2xl:overflow-clip"
      >
        <h1 className=" text-5xl leading-[52px] text-[#1F0404] lg:text-6xl">
          Product details
        </h1>
        <Row id="product-details-card" className=" mt-24  " gutter={[16, 16]}>
          <Col
            id="images"
            className=" min-h-full flex flex-col lg:flex-row "
            xl={12}
          >
            <Row gutter={[16, 16]} className="h-full ">
              <Col
                xs={12}
                sm={4}
                md={12}
                xl={8}
                className="order-2 lg:order-none"
              >
                <div
                  id="side-images "
                  className="h-full  shrink-0  flex flex-row   gap-4 lg:flex-col 2xl:gap-10  "
                >
                  {singleProduct?.fields.images.map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image.url}
                        alt="Single Product Image"
                        className={`object-center w-full h-full ${
                          currentImage === image.url
                            ? ' outline outline-[#1F0404]  outline-offset-4'
                            : null
                        }`}
                        onClick={() => setCurrentImage(image.url)}
                      />
                    );
                  })}
                </div>
              </Col>
              <Col md={24} xl={16}>
                <img
                  src={currentImage}
                  className="object-cover h-full md:w-full shrink-0 order-1  lg:order-none 2xl:2xl:shrink"
                  alt="single product image"
                />
              </Col>
            </Row>
          </Col>
          <Col
            id="description "
            // className=" shrink-[4] flex flex-col 2xl:shrink-0 w-[42%] 2xl:justify-between"
            xl={12}
          >
            <div>
              <h2 className="font-medium text-2xl w-fit 2xl:text-6xl">
                {singleProduct?.fields.name}
              </h2>
              <p className="w-full  text-base leading-tight font-normal mt-8  2xl:text-6xl  2xl:leading-[72px] ">
                {singleProduct?.fields.description}
              </p>
              <p className="font-medium text-2xl mt-8 2xl:text-6xl">
                {singleProduct?.fields.price}
              </p>
              <div id="actions " className="mt-[101px]">
                {/* choice actions */}
                <div
                  id="choice-buttons"
                  className="flex justify-between items-center 2xl:relative bottom-20"
                >
                  <div id="color-buttons" className="flex gap-4">
                    {singleProduct?.fields.colors.map((color) => {
                      return (
                        <button
                          key={color}
                          className={` btn-circle rounded-[50%] h-[32px] w-[32px]  ${color} ${
                            btnColor === color
                              ? ' outline outline-black  outline-offset-4'
                              : null
                          }`}
                          onClick={() => setBtnColor(color)}
                        ></button>
                      );
                    })}
                  </div>
                  <div id="size-buttons" className="flex gap-2">
                    {singleProduct?.fields.Size.map((size) => {
                      return (
                        <button
                          key={size}
                          type="button"
                          className={` btn border bg-[rgb(255,244,244)] rounded-none border-[#1F0404] p-3 w-[48px] h-[48px]  flex items-center   ${
                            size === btnSize
                              ? 'bg-[rgb(31,4,4)] text-white'
                              : null
                          }`}
                          onClick={() => setBtnSize(size)}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* add to cart actions */}
                <div
                  id="add-to-cart-buttons"
                  className="mt-[101px]  grid grid-cols-2 gap-4 2xl:items-baseline"
                >
                  {/* add to wishlist button */}
                  <div className="">
                    <button
                      type="button"
                      className="btn rounded-none w-44 lg:min-w-[320px]  bg-[rgb(255,244,244)] h-14 border border-black focus:bg-[rgb(31,4,4)] focus:text-white    "
                      // className="btn rounded-none  w-full bg-[rgb(255,244,244)] h-14 border border-black focus:bg-[rgb(31,4,4)] focus:text-white "
                    >
                      ADD TO WISHLIST
                    </button>
                  </div>
                  {/* add to cart button */}
                  <div>
                    <button
                      type="button"
                      className="btn rounded-none w-44 lg:min-w-[320px] bg-[rgb(255,244,244)] h-14 border border-black focus:bg-[rgb(31,4,4)] focus:text-white  "
                      // className="btn rounded-none  w-full  bg-[rgb(255,244,244)] h-14 border border-black focus:bg-[rgb(31,4,4)] focus:text-white "
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* Reviews Section */}
      <section className="px-5 py-16 lg:py-24  lg:px-12">
        {/* Review section buttons */}
        <div className="  mx-auto grid grid-cols-2 gap-2 md:gap-8 justify-center p-2 border border-black w-full ">
          {/* Reviews button */}
          <button
            type="button"
            className="btn rounded-none w-40  bg-[rgb(255,244,244)] h-10  focus:bg-[rgb(31,4,4)] focus:text-white lg:w-[304px]"
          >
            REVIEWS <span className="text-red-700">({reviews.length})</span>
          </button>
          {/*Related Products button */}
          <button
            type="button"
            className="btn rounded-none w-40 bg-[rgb(255,244,244)] h-10 focus:bg-[rgb(31,4,4)] focus:text-white lg:w-[304px]"
          >
            RELATED PRODUCT
          </button>
        </div>
        {/* reviews-data-section */}
        <div
          id="reviews-container"
          className="w-full mt-24 flex  flex-col  lg:flex-row"
        >
          <div
            id="left-col"
            className="self-start overflow-hidden h-screen flex-1 flex gap-4"
          >
            <div
              id="reviews-card"
              className="flex  overflow-y-scroll flex-col gap-8"
            >
              {reviews.map((review, index) => {
                const { name, image, location, description } = review;
                return (
                  <article
                    className="card border-[#D9D9D9] rounded-none border-b  py-6"
                    key={index}
                  >
                    <div className="card-title">
                      <img src={image} alt="" />
                      <div>
                        <h1>{name}</h1>
                        <p>{location}</p>
                      </div>
                    </div>
                    <div id="card-body">
                      <p className="text-left">{description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div id="right-col" className="form-control flex-1   ml-4 self-start">
            <ReviewsForm ref={ExternalReviewFormRef} onSave={handleSave} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

//  <div
//         id="side-images "
//         className="w-[125px]  shrink-0  flex flex-row   gap-4 lg:flex-col 2xl:w-[750px] 2xl:gap-10  "
//       >
//         {images.map((image, index) => {
//           return (
//             <img
//               key={index}
//               src={image}
//               alt="Single Product Image"
//               className={`object-fit w-full h-full ${
//                 currentImage === image
//                   ? ' outline outline-[#1F0404]  outline-offset-4'
//                   : null
//               }`}
//               onClick={() => setCurrentImage(image)}
//             />
//           );
//         })}
//       </div>
//       <img
//         src={currentImage}
//         className="object-fit shrink-0 w-[350px] 2xl:w-[1330px] 2xl:shrink"
//         alt=""
//       />
