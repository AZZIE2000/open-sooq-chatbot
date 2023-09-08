import { memo } from "react";
import { NextPage } from "next";
import Image from "next/image";

interface BotMessageProps {
  message: string;
}

const BotMessage: NextPage<BotMessageProps> = memo(({ message }) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <Image
          alt="Picture of the author"
          src={"/botImage.jpg"}
          height={100}
          width={100}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 border-2 flex-shrink-0"
        />

        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
});

export default BotMessage;
