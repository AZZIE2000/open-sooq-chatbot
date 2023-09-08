import { memo } from "react";
import { NextPage } from "next";
import Image from "next/image";

interface UserMessageProps {
  message: string;
}

const UserMessage: NextPage<UserMessageProps> = memo(({ message }) => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <Image
          alt="Picture of the author"
          src={"/user.jpg"}
          height={100}
          width={100}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 border-2 flex-shrink-0"
        />
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{message}</div>
        </div>
      </div>
    </div>
  );
});

export default UserMessage;
