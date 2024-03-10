import { News, ProductCard } from '../components';
import releaseA from '../assets/releaseB.png';
import releaseB from '../assets/releaseB.png';
import releaseC from '../assets/releaseC.png';
import { HeartIcon, PlusIcon } from '../icons';
// import { useRef } from 'react';

const Wishlist = () => {
  // const wishlist_ref = useRef(null);
  return (
    <main className="min-h-screen">
      <section className="py-16 px-5  flex flex-col gap-24 lg:px-12 lg:py-24 ">
        <h2 className="text-6xl">Wishlist</h2>
        <div className="grid grid-cols-1 gap-y-8  lg:grid-cols-3 lg:gap-x-8 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <News />
    </main>
  );
};

export default Wishlist;
