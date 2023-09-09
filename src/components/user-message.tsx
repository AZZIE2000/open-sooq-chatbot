import { NextPage } from "next";
import Image from "next/image";

interface UserMessageProps {
  message: string;
}

const UserMessage: NextPage<UserMessageProps> = ({ message }) => {
  return (
    <div className=" rounded-lg p-3">
      <div className="flex flex-row-reverse items-center justify-start">
        <Image
          alt="Picture of the author"
          src={"/user.jpg"}
          height={100}
          width={100}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-indigo-500"
        />
        <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
