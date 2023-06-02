import { AiOutlineStop } from 'react-icons/ai';
const Error = () => {
  return (
    <div className="flex justify-center items-center h-[60vh] flex-col space-y-4">
      <AiOutlineStop className="w-8 h-8 text-red-500" />
      <p className="font-semibold text-lg">An error occurred</p>
      <p>Kindly reload</p>
    </div>
  );
};

export default Error;
