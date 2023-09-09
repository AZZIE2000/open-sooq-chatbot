import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import BotMessage from "~/components/bot-message";
import LoadingMessage from "~/components/loading-message";
import UserMessage from "~/components/user-message";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default function Home() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      message: "Hi I'm OpenSooq New Bot, How can I help you?",
    },
  ]);
  const convId = useMemo(() => {
    return uuidv4();
  }, []);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    setLoading(true);
    setMessages((messages) => {
      return [
        ...messages,
        {
          from: "user",
          message: input,
        },
      ];
    });
    setInput("");
    const body = {
      text: input,
      convId,
    };
    console.log(body);
    try {
      const data = await axios.post("http://localhost:8080/", body);
      if (data?.data?.url) {
        setMessages((messages) => {
          return [
            ...messages,
            {
              from: "bot",
              message: data?.data?.url,
            },
          ];
        });
      }
    } catch (e) {
      setMessages((messages) => {
        return [
          ...messages,
          {
            from: "bot",
            message: "I'm sorry, I didn't understand that.",
          },
        ];
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-screen  w-full  bg-white text-black">
        <div className="h-[calc(100vh-4rem)]">
          <div className="grid grid-cols-12  gap-y-2 overflow-y-auto">
            {messages.map((message, i) => {
              if (message.from === "bot") {
                return <BotMessage key={i} message={message.message} />;
              } else {
                return <UserMessage key={i} message={message.message} />;
              }
            })}
            {loading && <LoadingMessage />}
          </div>
        </div>

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
      </main>
    </>
  );
}