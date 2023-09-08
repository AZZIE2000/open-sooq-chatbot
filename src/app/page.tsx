"use client";
import BotMessage from "@components/bot-message";
import UserMessage from "@components/user-message";
import LoadingMessage from "@components/loading-message";
import { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const getResponse = async (text: string) => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify({ text, convId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    const data = await response.json();
    setLoading(false);
    return data;
  };
  const handleSendMessage = async (text: string) => {
    setMessages((messages) => {
      return [
        ...messages,
        {
          from: "bot",
          message: response.message,
        },
      ];
    });
    const response = await getResponse(text);
  };
  return (
    <main className="max-h-screen  w-full  text-black bg-white">
      <div className="h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-12  overflow-y-auto gap-y-2">
          {messages.map((message) => {
            if (message.from === "bot") {
              return <BotMessage message={message.message} />;
            } else {
              return <UserMessage message={message.message} />;
            }
          })}
          {loading && <LoadingMessage />}
        </div>
      </div>

      <div className="flex flex-row items-center h-16 rounded-xl  w-full px-4">
        <div className="flex-grow ">
          <div className="relative w-full">
            <input
              // onKeyDown={(e) => {
              //   if (e.key === "Enter") {
              //     handleSendMessage(e.target.value);
              //     e.target.value = "";
              //   }
              // }}
              type="text"
              placeholder="Ask me anything!"
              className="flex w-full border-indigo-500 border-2 rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </div>
        </div>
        <div className="ml-4">
          <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
            <span>Send</span>
            <span className="ml-2">
              <svg
                className="w-4 h-4 transform rotate-45 -mt-px"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
