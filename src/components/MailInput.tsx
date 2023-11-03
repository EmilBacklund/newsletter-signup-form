"use client";

import { ChangeEvent } from "react";

type MailInputProps = {
  setIsValid: (isValid: boolean) => void;
  isValid: boolean;
  setEmail: (isValid: string) => void;
  email: string;
};

const MailInput = ({ setIsValid, isValid, setEmail, email }: MailInputProps) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(emailRegex.test(newEmail)); // Check if the email matches the regex pattern
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs font-bold leading-[18px]">
        <label className="leading-[18px]">Email address</label>
        {!isValid && <p className="text-[#FF6155]">Valid email required</p>}
      </div>
      <input
        id="email"
        name="email"
        className={`w-full border h-14 pl-6 rounded-lg focus:border-[#242742] placeholder-[#242742]/50 transition duration-300 ${
          isValid
            ? "border-[#19182B]/25 bg-[#FFF] text-[#242742]"
            : "border-[#FF6155] bg-[#FFE7E6] text-[#FF6155]"
        }`}
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email@company.com"
        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        required
      ></input>
    </div>
  );
};

export default MailInput;
