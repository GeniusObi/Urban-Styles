import { Col, Row } from 'antd';
import { News, ProductCard } from '../components';
// import { useEffect } from 'react';
// import  customFetch  from '@/utils/Fetch';
import { products } from '@/utils/constants';
import { useWishlist } from '@/context/WishlistContext';

// import { useRef } from 'react';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <main className="min-h-screen">
      <section className="py-16 px-5  flex flex-col gap-24 lg:px-12 lg:py-24 ">
        <h2 className="text-6xl">Wishlist</h2>
        <Row gutter={[32, 16]}>
          {wishlist.map((product) => {
            return (
              <Col xs={24} md={12} xl={8} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
          {/* <Col xs={24} md={12} xl={8}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Col> */}
          {/* <Col xs={24} md={12} xl={8}>
            <ProductCard />
          </Col>
          <Col xs={24} md={12} xl={8}>
            <ProductCard />
          </Col> */}
        </Row>
      </section>
      <News />
    </main>
  );
};

export default Wishlist;

// <div className="grid grid-cols-1 gap-y-8  lg:grid-cols-3 lg:gap-x-8 ">
//   <ProductCard />
//   <ProductCard />
//   <ProductCard />
// </div>;
