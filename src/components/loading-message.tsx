import Image from "next/image";

const LoadingMessage = () => {
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
          <div className="loading loading-dots "></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMessage;
