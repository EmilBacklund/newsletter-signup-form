import { MouseEvent } from "react";

type ButtonProps = {
  text: string;
  clickFunction?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ text, clickFunction }: ButtonProps) => {
  return (
    <div className="relative">
      <button onClick={(e) => {
        clickFunction?.(e);
      }} className="submitBtn bg-[#242742] relative w-full h-14 rounded-lg after:transition-opacity text-opacity-0 after:duration-300 after:rounded-lg text-white font-bold after:bg-gradient-to-tr after:from-[#FF6A3A] after:to-[#FF527B] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:border-inherit hover:after:opacity-100">
        {text}
      </button>
      <p className="absolute w-full text-center text-white font-bold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        {text}
      </p>
    </div>
  );
};

export default Button;
