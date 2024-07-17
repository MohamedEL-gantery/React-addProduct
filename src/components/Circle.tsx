import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const Circle = ({ color, ...rest }: IProps) => {
  return (
    <>
      <span
        className="block rounded-full h-5 w-5 cursor-pointer"
        style={{ backgroundColor: color }}
        {...rest}
      />
    </>
  );
};

export default Circle;
