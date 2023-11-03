import Image from "next/image";

interface CheckListItemProps {
  text: string;
}

const CheckListItem = ({ text }: CheckListItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <Image src="/images/icon-success.svg" alt="check icon" width={21} height={21} />
      <p>{text}</p>
    </div>
  );
};

export default CheckListItem;
