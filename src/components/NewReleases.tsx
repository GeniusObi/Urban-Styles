// type NewReleaseProp = {
//   image: string;
//   name: string;
//   price: number;
// };
import { Link } from 'react-router-dom';
import { products } from '../utils/constants';
import { useState } from 'react';
import { PlusIcon, HeartIcon } from '../icons';
const NewReleases = () => {
  const [wishlist, setWishList] = useState<boolean>(false);
  return (
    <section className="py-16 px-5 lg:px-12 lg:py-24 form-control gap-y-16">
      <div className="heading flex justify-between items-baseline">
        <div className="A">
          <h2 className="text-4xl">New Release</h2>
          <p className="mt-2">All available for purchase</p>
        </div>
        <div id="see-all" className=" self-end">
          <Link to={'/products'}>SEE ALL</Link>
        </div>
      </div>
      {/* Products */}
      <div
        id="products-display-section"
        className="grid grid-cols-1 gap-y-8  lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
      >
        {products.slice(2, 5).map((product) => {
          const { name, image, price } = product;
          return (
            <div key={name} className="w-full lg:w-[380px]  ">
              <article className="w-full  relative form-control gap-3  lg:w-full">
                {/* product image */}
                <img
                  src={image}
                  alt="Urban Styles Product"
                  className="object-fit w-full"
                />
                {/* product description */}
                <div className=" flex items-center justify-between">
                  <div className="description">
                    <h2 className="card-title">
                      Slim V Neck Limited Pique Polo
                    </h2>
                    <p className="mt-2">{price}</p>
                  </div>
                  <button
                    type="button"
                    className="border btn rounded-none border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end focus:bg-[#1F0404] text-white"
                  >
                    <PlusIcon />
                  </button>
                  <button
                    type="button"
                    className={`border rounded-none   border-[#1F0404]  absolute top-8 right-8  p-2 w-10 h-10 ${
                      wishlist ? 'bg-[#1F0404] text-white' : null
                    }`}
                    onClick={() => setWishList(!wishlist)}
                  >
                    <HeartIcon />
                  </button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewReleases;
