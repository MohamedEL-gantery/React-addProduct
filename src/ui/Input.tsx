import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <>
      <input
        className="border-[1px] px-3 py-3 border-gray-300 shadow-md focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500 rounded-md text-md"
        {...rest}
      />
    </>
  );
};

export default Input;
