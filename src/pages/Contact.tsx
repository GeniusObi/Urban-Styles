import { ContactForm, MapZoomButtons } from '../components';
import map from '../assets/map.png';
const Contact = () => {
  return (
    <>
      <section className="  grid py-16 px-5 grid-cols-1 lg:px-12 lg:py-24 w-full lg:grid-cols-2 gap-8 ">
        <div id="left-col" className="max-h-[538px] flex flex-col gap-8">
          {' '}
          <div className=" basis-[20%] content">
            <h2 className="font-normal text-6xl leading-[75px] capitalize not-italic">
              Get in touch
            </h2>
            <p className="text-xl font-normal leading-3-[24px] not-italic">
              have a question? Let's answer them
            </p>
          </div>
          <ContactForm />
        </div>
        <div id="map" className="relative">
          <img
            src={map}
            alt=""
            className="object-fill    w-full min-h-[538px]"
          />
          <MapZoomButtons />
        </div>
        {/* <div id="right-col" className="   self-start map relative ">
          <MapZoomButtons />
        </div> */}
      </section>
      {/* FAQS SECTION */}
      <section className="h-screen px-16 py-24 flex flex-col  items-center ">
        <div className="heading text-center">
          <h2 className="text-4xl">FAQS</h2>
          <p className="text-lg">Questions you might want to ask</p>
        </div>
        <section className="question-tag mt-3  border-[#AAB1B0]"></section>
      </section>
    </>
  );
};

export default Contact;
