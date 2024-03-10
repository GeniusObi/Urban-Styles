import { useNavigation } from 'react-router-dom';
type SubmitBtnProp = {
  text: string;
};
const SubmitBtn = ({ text }: SubmitBtnProp) => {
  const navigation = useNavigation();
  let isSubmitting = navigation.state === 'submitting';
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full btn bg-[rgb(31,4,4)]  text-white"
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending..
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};

export default SubmitBtn;
