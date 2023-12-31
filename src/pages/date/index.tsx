import Head from "next/head";
import DateParser, { DateTime } from "date-extractor";
import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState<DateTime>({} as DateTime);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim().length === 0) return;

    setDate({} as DateTime);
    new DateParser(input).execute().then((res) => {
      setDate(res);
    });
  };

  return (
    <>
      <Head>
        <title>Date Parser</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-screen  w-full  bg-white text-black">
        <div className="flex h-16 w-full flex-row items-center  rounded-xl px-4">
          <div className="flex-grow ">
            <div className="relative w-full">
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                value={input}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                type="text"
                placeholder="Ask me anything!"
                className="flex h-10 w-full rounded-xl border-2 border-indigo-500 pl-4 focus:border-indigo-300 focus:outline-none"
              />
            </div>
          </div>
          <div className="ml-4">
            <button
              onClick={handleSendMessage}
              className="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600"
            >
              <span>Send</span>
              <span className="ml-2">
                <svg
                  className="-mt-px h-4 w-4 rotate-45 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto p-20">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {Object.keys(date)?.map((key) => {
                    return <th key={key}>{key}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.values(date)?.map((value, i) => {
                    return <td key={i}>{JSON.stringify(value)}</td>;
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
