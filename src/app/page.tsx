"use client";

import Image from "next/image";
import CheckListItem from "@/components/ChecklistItem";
import Form from "@/components/Form";
import { useState } from "react";
import SuccessMessage from "@/components/SuccessMessage";

export default function Home() {
  const [submitSuccessful, setSubmitSuccessful] = useState<boolean>(false);
  const [email, setEmail] = useState('');

  return (
    <main className="bg-[#36384D] h-screen text-[#242742] flex justify-center items-center relative">
      <div
        className={`bg-white max-w-[928px] h-fit rounded-lg sm:rounded-[36px] overflow-hidden flex flex-col sm:gap-8 lg:gap-16 sm:flex-row-reverse w-full sm:mx-10 lg:py-6 lg:pr-6 sm:pl-8 lg:pl-16 lg:items-center transition duration-500 ${
          !submitSuccessful
            ? "opacity-100 pointer-events-auto z-0 max-h-[1000px]"
            : "opacity-0 pointer-events-none -z-10 max-h-0"
        }`}
      >
        <header className="min-h-[284px] flex-1 relative rounded-b-2xl sm:rounded-b-none sm:rounded-l-2xl overflow-hidden lg:rounded-tl-2xl lg:min-h-[593px]">
          <Image
            src="/images/illustration-sign-up-mobile.svg"
            alt="Super chill illustration of a web browser with some cool graphs popping out and a red badge showing the number 94. It's like, surfing the web but make it artsy!"
            fill={true}
            className="object-cover sm:hidden"
          />
          <Image
            src="/images/illustration-sign-up-desktop.svg"
            alt="Super chill illustration of a web browser with some cool graphs popping out and a red badge showing the number 94. It's like, surfing the web but make it artsy!"
            fill={true}
            className="object-cover hidden sm:block"
          />
        </header>
        <div className="py-10 px-6 sm:px-0 sm:max-w-[376px]">
          <div className="flex flex-col gap-6 pb-10">
            <h1 className="text-[40px] lg:text-[56px] lg:leading-[56px] leading-10 font-bold">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="flex flex-col gap-2.5">
              <CheckListItem text="Product discovery and building what matters" />
              <CheckListItem text="Measuring to ensure updates are a success" />
              <CheckListItem text="And much more!" />
            </div>
          </div>
          <Form setSubmitSuccessful={setSubmitSuccessful} email={email} setEmail={setEmail} />
        </div>
      </div>
      <SuccessMessage submitSuccessful={submitSuccessful} setSubmitSuccessful={setSubmitSuccessful} email={email} setEmail={setEmail} />
    </main>
  );
}
