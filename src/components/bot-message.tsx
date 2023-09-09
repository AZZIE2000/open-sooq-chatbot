import { memo } from "react";
import { NextPage } from "next";
import Image from "next/image";

interface BotMessageProps {
  message: string;
}

const BotMessage: NextPage<BotMessageProps> = ({ message }) => {
  return (
    <div className="rounded-lg p-3">
      <div className="flex flex-row items-center">
        <Image
          alt="Picture of the author"
          src={"/bot.png"}
          height={100}
          width={100}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-indigo-500"
        />

        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
          {message.includes("help") || message.includes("sorry") ? (
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
};

export default BotMessage;
