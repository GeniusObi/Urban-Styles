const ContactForm = () => {
  return (
    <form action="" className="basis-[80%] max-h-full flex flex-col gap-4 ">
      <input
        type="text"
        className="  outline-none  border-[#B59191] border-b bg-[#FFF4F4]  py-3  px-2 focus:border-[#B5919] focus:border-b-2 "
        placeholder="Enter your full name"
      />
      <input
        type="email"
        className="  outline-none  border-[#B59191] border-b bg-[#FFF4F4]  py-3  px-2 focus:border-[#B5919] focus:border-b-2 "
        placeholder="Enter your email"
      />
      <input
        type="text"
        className="  outline-none  border-[#B59191] border-b bg-[#FFF4F4]  py-3  px-2 focus:border-[#B5919] focus:border-b-2  "
        placeholder="Enter phone number"
      />
      <textarea
        name="message"
        id=""
        className="h-[157px] outline-none  border-[#B59191] border-b resize-none bg-[#FFF4F4] focus:border-[#B5919] focus:border-b-2"
        placeholder="Write your message"
      ></textarea>
      <div className=" flex justify-end">
        <button
          type="submit"
          className="bg-[#1F0404] btn rounded-none text-[#FFF4F4] w-[192px] h-[57px] py-4 px-8 capitalize"
        >
          send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
