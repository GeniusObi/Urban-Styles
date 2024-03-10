import { images, reviews } from '../utils/constants';
import { useState } from 'react';
import { ReviewsForm } from '../components';
export const loader = async () => {
  return null;
};

let sizeArray: Array<string>;
sizeArray = ['XL', 'L', 'M', 'S'];
let colorArray: Array<string>;
colorArray = ['bg-blue-300', 'bg-red-600', 'bg-black'];
const SingleProduct = () => {
  const [btnSize, setBtnSize] = useState<string>(sizeArray[0]);
  const [btnColor, setBtnColor] = useState<string>(colorArray[0]);
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  return (
    <>
      {/* Product details section */}
      <section
        id="product-details-section "
        className="px-5 py-16 lg:py-24 lg:px-12"
      >
        <h1 className=" text-5xl leading-[52px] text-[#1F0404] lg:text-6xl">
          Product details
        </h1>
        <div
          id="product-details-card"
          className="w-full mt-24  flex flex-col lg:flex-row gap-8 "
        >
          <div id="images" className=" flex gap-4 lg:flex-row ">
            <div
              id="side-images "
              className="w-[250px]   flex flex-row   gap-4 lg:flex-col  "
            >
              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="Single Product Image"
                    className={`object-fit w-full  h-full ${
                      currentImage === image
                        ? ' outline outline-[#1F0404]  outline-offset-4'
                        : null
                    }`}
                    onClick={() => setCurrentImage(image)}
                  />
                );
              })}
            </div>
            <img src={currentImage} className="object-fit w-[350px]  " alt="" />
          </div>
          <div id="description " className=" flex flex-col ">
            <h2 className="font-medium text-2xl w-fit">
              OVERSIZED BEAR BREAST
            </h2>
            <p className="max-w-[1024px]  text-base leading-tight font-normal mt-8 lg:min-w-[660px]">
              The Oversized Overdye Extended Neck Today T-shirt Blends
              Comtemporary Aesthetics With A Classic Touch.The Extended Neck
              Design Adds An Edgy Twist Making Sure You Catch Every Eye As Make
              Your Mark On The Urban Landscape.
            </p>
            <p className="font-medium text-2xl mt-8">N40,000 $(20)</p>
            <div id="actions " className="mt-[101px]">
              {/* choice actions */}
              <div
                id="choice-buttons"
                className="flex justify-between items-center"
              >
                <div id="color-buttons" className="flex gap-4">
                  {colorArray.map((color) => {
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
                  {sizeArray.map((size) => {
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
              <div id="add-to-cart-buttons" className="mt-[101px] flex gap-8">
                {/* add to wishlist button */}
                <button
                  type="button"
                  className="btn rounded-none  w-[183px] bg-[rgb(255,244,244)] h-14 border border-black focus:bg-[rgb(31,4,4)] focus:text-white lg:w-[304px] md:grow lg:grow  "
                >
                  ADD TO WISHLIST
                </button>
                {/* add to cart button */}
                <button
                  type="button"
                  className="btn rounded-none  w-[183px] bg-[rgb(255,244,244)] h-14 border border-black focus:bg-[rgb(31,4,4)] focus:text-white md:grow lg:w-[304px]"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="px-5 py-16 lg:py-24 lg:px-12">
        {/* Review section buttons */}
        <div className="  mx-auto flex gap-8 justify-center p-2 border border-black w-fit">
          {/* Reviews button */}
          <button
            type="button"
            className="btn rounded-none  w-[304px] bg-[rgb(255,244,244)] h-10  focus:bg-[rgb(31,4,4)] focus:text-white"
          >
            REVIEWS <span className="text-red-700">({reviews.length})</span>
          </button>
          {/*Related Products button */}
          <button
            type="button"
            className="btn rounded-none w-[304px] bg-[rgb(255,244,244)] h-10 focus:bg-[rgb(31,4,4)] focus:text-white"
          >
            RELATED PRODUCT
          </button>
        </div>
        {/* reviews-data-section */}
        <div
          id="reviews-container"
          className="w-full mt-24 grid grid-cols-1 lg:grid-cols-2  "
        >
          <div id="left-col" className="self-start flex gap-4">
            <div id="reviews-card" className="flex flex-col gap-8">
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
            <div id="scroll-bar" className="scrollbar-">
              i
            </div>
          </div>
          <div id="right-col" className="form-control ml-4 self-start">
            <ReviewsForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
