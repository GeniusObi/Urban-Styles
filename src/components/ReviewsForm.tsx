import {
  type ComponentPropsWithoutRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

export type formHandle = {
  clear: () => void;
};
type formProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};
const ReviewsForm = forwardRef<formHandle, formProps>(function ReviewsForm(
  { onSave },
  ref
) {
  const formRef = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        formRef.current?.reset();
      },
    };
  });
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form
      ref={formRef}
      className="basis-full lg:basis-[80%] flex flex-col gap-4 "
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className=" w-full  outline-none  border-[#B59191] border-b bg-[#FFF4F4]  py-3  px-2 focus:border-[#B5919] focus:border-b-2 "
        placeholder="Enter your full name"
      />
      <input
        name="email"
        type="email"
        className="  outline-none  border-[#B59191] border-b bg-[#FFF4F4]  py-3  px-2 focus:border-[#B5919] focus:border-b-2 "
        placeholder="Enter your email"
      />
      <input
        name="location"
        type="text"
        className="  outline-none  border-[#B59191] border-b bg-[#FFF4F4]  py-3  px-2 focus:border-[#B5919] focus:border-b-2 "
        placeholder="Enter your location"
      />

      <textarea
        name="description"
        id=""
        className="h-[157px] outline-none  border-[#B59191] border-b resize-none bg-[#FFF4F4] focus:border-[#B5919] focus:border-b-2"
        placeholder="Write your message"
      ></textarea>
      <input type="image" src="" alt="" />
      <div className=" flex justify-end">
        <button
          type="submit"
          className="bg-[#1F0404] btn rounded-none text-[#FFF4F4] w-[192px] h-[57px] py-4 px-8 capitalize"
        >
          Submit
        </button>
      </div>
    </form>
  );
});

export default ReviewsForm;
