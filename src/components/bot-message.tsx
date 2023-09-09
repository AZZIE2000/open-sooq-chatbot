import { memo } from "react";
import { NextPage } from "next";
import Image from "next/image";

interface BotMessageProps {
  message: string;
}

// eslint-disable-next-line react/display-name
const BotMessage: NextPage<BotMessageProps> = memo(({ message }) => {
  return (
    <div className="col-start-1 col-end-8 rounded-lg p-3">
      <div className="flex flex-row items-center">
        <Image
          alt="Picture of the author"
          src={"/bot.png"}
          height={100}
          width={100}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-indigo-500"
        />

        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
          {message === "Hi I'm OpenSooq New Bot, How can I help you?" ? (
            <div>{message}</div>
          ) : (
            <a className="link link-info " href={message} target="_blank">
              {message}
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default BotMessage;
