'use client';

import { useState } from 'react';
import MailInput from './MailInput';
import Button from './Button';

type FormProps = {
  setSubmitSuccessful: (isValid: boolean) => void;
  email: string;
  setEmail: (isValid: string) => void;
};

const Form = ({ setSubmitSuccessful, email, setEmail }: FormProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);

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
      <MailInput
        setIsValid={setIsValid}
        isValid={isValid}
        email={email}
        setEmail={setEmail}
      />
      <Button
        text="Subscribe to monthly newsletter"
      />
    </form>
  );
};

export default Form;
