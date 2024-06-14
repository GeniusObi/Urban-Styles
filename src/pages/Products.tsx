import { ProductCard } from '@/components';
import { useFilterContext } from '@/context/filterContext';

import { HeartIcon, PlusIcon } from '@/icons';
import customFetch, { productFetch } from '@/utils/Fetch';
import { products } from '@/utils/constants';
import { Button, Col, Row } from 'antd';
import { FormEvent, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export type imageType = {
  width: number;
  height: number;
  id: string;
  filename: string;
  size: number;
  type: string;
  url: any;
  thumbnails: {
    full: { url: string; width: number; height: number };
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
  };
};
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
    featured: boolean;
  };
};

const Products = () => {
  const { filteredProducts, updateSort } = useFilterContext();

  return (
    <main className="min-h-screen mt-10">
      {/* title section */}
      <div className=" flex py-16 px-5  justify-between p lg:px-16 lg:py-24 ">
        <h2>ALL PRODUCTS</h2>
        <select
          name="sort"
          id="sort"
          className="bg-[#FFF4F4] outline-none"
          value={'SORT-BY'}
          // onChange={(e: FormEvent<HTMLSelectElement>) => {
          //   updateSort(e.currentTarget.value);
          // }}
        >
          <option value="SORT-BY">SORT BY</option>
          <option value="VEST">VEST</option>
          <option value="HOODIE">HOODIE</option>
        </select>
      </div>
      {/* Product section */}
      <section className="py-16 px-5 lg:py-24 lg:px-12">
        <Row
          id="products-display-section"
          // className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          gutter={[32, 32]}
        >
          {filteredProducts.map((product, index) => {
            const { id, fields } = product;
            const { name, images, price } = fields;
            const image = images[0];
            const url = image.url;
            return (
              // <div
              //   key={index}
              //   className="w-full relative lg:w-[380px] 2xl:w-full "
              // >

              // </div>

              <Col key={index} xs={24} md={12} xl={8}>
                <Link
                  to={`/products/${id}`}
                  className="w-auto h-20 text-black hover:text-black"
                >
                  <ProductCard product={product} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </section>
    </main>
  );
};

export default Products;
