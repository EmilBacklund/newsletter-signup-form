import Image from 'next/image';
import Button from './Button';

type SuccessMessageProps = {
  submitSuccessful: boolean;
  setSubmitSuccessful: (isValid: boolean) => void;
  email: string;
  setEmail: (isValid: string) => void;
};

const SuccessMessage = ({
  submitSuccessful,
  setSubmitSuccessful,
  email,
  setEmail,
}: SuccessMessageProps) => {
  const dismissMessage = () => {
    setSubmitSuccessful(!submitSuccessful);
    setEmail("");
  };

  return (
    <div
      className={`absolute transition duration-300 h-screen sm:h-auto bg-white sm:rounded-[36px] w-full flex flex-col justify-between max-w-[504px] px-6 pb-10 pt-[149px] sm:px-16 sm:pb-16 sm:pt-12 ${
        !submitSuccessful
          ? 'opacity-0 pointer-events-none -z-10'
          : 'opacity-100 pointer-events-auto z-10'
      }`}
    >
      <div className="flex flex-col pb-10">
        <Image
          src="/images/icon-success.svg"
          alt="success icon"
          width={64}
          height={64}
          className='pb-10'
        />
        <h1 className="text-[40px] lg:text-[56px] leading-10 lg:leading-[56px] font-bold pb-6">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{' '}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </p>
      </div>
      <Button text="Dismiss message" clickFunction={dismissMessage} />
    </div>
  );
};

export default SuccessMessage;
