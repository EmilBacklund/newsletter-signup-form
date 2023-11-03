"use client";

import { useState } from "react";
import MailInput from "./MailInput";

type FormProps = {
  setSubmitSuccessful: (isValid: boolean) => void;
};

const Form = ({ setSubmitSuccessful }: FormProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [email, setEmail] = useState("");

  console.log(isValid);
  console.log(email.length);

  const handleSubmit = () => {
    if (isValid && email.length > 0) {
      setSubmitSuccessful(true);
      setIsValid(true);
    } else {
      setIsValid(false);
      setSubmitSuccessful(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-6 "
      action=""
    >
      <MailInput setIsValid={setIsValid} isValid={isValid} email={email} setEmail={setEmail} />
      <div className="relative">
        <button className="submitBtn bg-[#242742] relative w-full h-14 rounded-lg after:transition-opacity text-opacity-0 after:duration-300 after:rounded-lg text-white font-bold after:bg-gradient-to-tr after:from-[#FF6A3A] after:to-[#FF527B] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:opacity-0 after:border-inherit hover:after:opacity-100">
          Subscribe to monthly newsletter
        </button>
        <p className="absolute w-full text-center text-white font-bold left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          Subscribe to monthly newsletter
        </p>
      </div>
    </form>
  );
};

export default Form;
