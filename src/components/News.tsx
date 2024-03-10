import { Form, Link } from 'react-router-dom';

const News = () => {
  return (
    <section id="news_section" className="py-16 px-5 lg:py-24 lg:px-12">
      <div className="news-banner py-16 px-2   text-center flex flex-col items-center lg:py-16 lg:px-2 ">
        <h2 className=" w-[286px] text-xl md:text-3xl text-[#fff] lg:text-5xl  lg:w-[580px] ">
          Be The First To Know About Our New Release
        </h2>
        <p className="max-w-[423px] text-lg capitalize text-[#fff] mt-8 lg:text-xl ">
          amazing product on its way, Subscribe and be the first to know when we
          release new product.
        </p>
        <form
          action=""
          method="post"
          className="form p-2 w-full flex flex-col gap-6 mt-16 items-center md:flex-row lg:gap-8 lg:p-0 lg:w-auto lg:flex-row "
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            className=" h-16 w-full  outline-none bg-[#000000B8] p-8 border border-[#FFF4F4] text-[#FFF] text-[1rem] placeholder:text-[#FFF]  lg:w-[390px] lg:grow-[2] lg:h-[56px] "
          />
          <button
            type="submit"
            className="p-4 w-full h-[56px] md:w-1/2  bg-[#fff] border-[#fff] border     lg:text-[rgb(31,4,4)] lg:w-[121px] hover:bg-[rgb(31,4,4)] hover:text-[#fff] lg:grow"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default News;
