"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL); // backend URL

export default function ChatBox({ openModal, handleModal, setNewMessage }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [roomId, setRoomId] = useState(null);
  const [typing, setTyping] = useState(false);
  const [online, setOnline] = useState(false);

  const messagesRef = useRef(null);

  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId =
        "serah_user_" + Math.floor(Math.random() * 10 ** 8).toString(36);
      localStorage.setItem("visitorId", visitorId);
    }

    if (openModal) {
      socket.emit("visitor:join", { visitorId });
    }
    socket.on("room:joined", (id) => {
      setRoomId(id);
      loadHistory(id);
    });

    socket.on("admin:joined", ({ adminName }) => {
      setOnline(true);
      console.log("You are chating with ", adminName);
    });
    socket.on("message:new", (msg) => {
      setMessages((prev) => [msg, ...prev]);

      if (msg.sender !== "visitor") {
        setNewMessage(msg.message);
      } else {
        setNewMessage(null);
      }
    });

    socket.on("typing:start", ({ sender }) => {
      if (sender !== "visitor") setTyping(true);
    });

    socket.on("typing:stop", () => setTyping(false));

    return () => {
      socket.off("room:joined");
      socket.off("message:new");
      socket.off("typing:start");
      socket.off("typing:stop");
    };
  }, [openModal]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!roomId || !text.trim()) return;

    socket.emit("visitor:message", { roomId, message: text });
    socket.emit("typing:stop", {
      roomId,
      sender: "visitor",
    });
    setText("");
  };

  async function loadHistory(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chat/${id}/messages`,
    );
    const data = await res.json();
    setMessages(data);
  }

  return (
    <div
      className={`z-200 transform ${
        openModal
          ? " translate-x-0 backdrop-blur-xs  md:backdrop-filter-none"
          : " translate-x-full"
      } transition fixed inset-0 flex flex-col justify-end p-2`}
    >
      <div
        className={` mx-auto md:mb-0 my-auto w-full xl:w-1/3 2xl:w-1/4 lg:w-1/2 lg:mr-0 h-screen md:h-1/2 max-h-9/10 shadow-sm z-300 flex flex-col justify-between shadow-black shadow-xl bg-neutral-700`}
      >
        <div className="flex justify-between items-start bg-neutral-800 w-full p-4">
          <div className="block">
            <h1 className="text-lg text-neutral-100">Serah Constructions</h1>
            {online && (
              <div className="text-sm opacity-80 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-neutral-100">Online</span>
              </div>
            )}
          </div>
          <button
            className="hover:bg-neutral-600 text-neutral-100 rounded-full text-4xl text-center transition"
            onClick={handleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-2"
              width="0.75em"
              height="0.75em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18 12l.354-.354l.353.354l-.353.354zm-12 .5a.5.5 0 0 1 0-1zm8.354-4.854l4 4l-.708.708l-4-4zm4 4.708l-4 4l-.708-.708l4-4zM18 12.5H6v-1h12z"
              />
            </svg>
          </button>
        </div>

        <div
          ref={messagesRef}
          className="flex flex-col-reverse overflow-y-scroll custom-scroll-bar w-full h-full pb-4 gap-y-6 p-4"
        >
          {messages.length === 0 ? (
            <div className=" text-md text-left p-4 self-start">
              <p className="shadow-lg xl:py-3 py-2 px-4 text-left w-full block bg-neutral-400 text-neutral-800 rounded-e-full rounded-es-full">
                How can we assist you?
              </p>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-3/4 ${
                    msg.sender !== "visitor"
                      ? "text-left mr-auto"
                      : "text-right ml-auto"
                  }`}
                >
                  {/* <span className="text-xs font-normal text-neutral-400 mx-2">
                    {new Date(msg.createdAt).toLocaleTimeString("en-IN", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span> */}
                  <div
                    className={`shadow-lg xl:py-3 py-2 px-4 text-left ${
                      msg.sender !== "visitor"
                        ? "rounded-e-full rounded-es-full bg-neutral-400 text-neutral-800"
                        : "rounded-s-full rounded-se-full bg-primary-200 text-neutral-800"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
              <div
                className={`${typing ? "opacity-100" : "opacity-0"} transition text-left mr-auto text-neutral-400 text-xs text-gray-400 text-left`}
              >
                Typing…
              </div>
            </>
          )}
        </div>

        <form
          onSubmit={sendMessage}
          className="block w-full flex justify-between p-4 bg-neutral-800"
        >
          <input
            value={text}
            minLength={8}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-neutral-100 rounded-full p-3 px-6 text-neutral-900 foxus:ring-1"
          />
          <button className="bg-none text-primary-400 hover:text-primary:500 transition px-4 rounded-s-full rounded-se-full cursor-pointer">
            <svg
              width="2.286em"
              height="2em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 8"
            >
              <path fill="currentColor" d="m0 0l8 3.5L0 7l1-3q5-.5 0-1" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
