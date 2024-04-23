import { HeartIcon, PlusIcon } from '@/icons';
import customFetch from '@/utils/Fetch';
import { products } from '@/utils/constants';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/product');
    console.log(data);
    return { data };
  } catch (error) {
    console.log(error);
  }
};
type product = {
  name: string;
  image_url: any;
  price: string;
  description: string;
  quantity: number;
};

const Products = () => {
  const [wishlist, setWishList] = useState<boolean>(false);
  const { data } = useLoaderData() as { data: product[] };
  return (
    <main className="min-h-screen mt-10">
      {/* title section */}
      <div className=" flex py-16 px-5  justify-between p lg:px-16 lg:py-24 ">
        <h2>ALL PRODUCTS</h2>
        <select name="sort" id="sort" className="bg-[#FFF4F4;]">
          <option value="LOWEST">SORT BY</option>
          <option value="LOWEST">VEST</option>
          <option value="HIGHEST">HOODIE</option>
        </select>
      </div>
      {/* Product section */}
      <section className="py-16 px-5 lg:py-24 lg:px-12">
        <Row
          id="products-display-section"
          // className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          gutter={[32, 32]}
        >
          {data.map((product, index) => {
            const { name, image_url, price } = product;
            return (
              // <div
              //   key={index}
              //   className="w-full relative lg:w-[380px] 2xl:w-full "
              // >

              // </div>

              <Col key={index} xs={24} md={12} xl={8}>
                <article className="w-full relative form-control gap-3">
                  {/* product image */}
                  <img
                    src={image_url}
                    alt="Urban Styles Product"
                    className="object-fit w-full"
                  />
                  {/* product description */}
                  <div className=" flex items-center justify-between">
                    <div className="description">
                      <h2 className="card-title">{name}</h2>
                      <p className="mt-2">{price}</p>
                    </div>
                    <Button
                      type="text"
                      className="border  btn rounded-none mt-4 border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end flex justify-center items-center"
                    >
                      <PlusIcon />
                    </Button>
                    <button
                      type="button"
                      className={`border rounded-none   border-[#1F0404]  absolute top-8  right-6  p-2 w-10 h-10 ${
                        wishlist ? 'bg-[#1F0404] text-white' : null
                      }`}
                      onClick={() => setWishList(!wishlist)}
                    >
                      <HeartIcon />
                    </button>
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>
      </section>
    </main>
  );
};

export default Products;
