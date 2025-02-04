import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import createsocketconn from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const param = useParams();
  const toUserMsg = param.userid;
  const [messages, setMessages] = useState([]);
  const [newmessage, setnewmessage] = useState("");
  const userData = useSelector((state) => state.user.user);
  const fromUsermMsg = userData?._id;

  useEffect(() => {
    if (!fromUsermMsg) return null;
    const socket = createsocketconn();
    socket.emit("joinchat", { fromUsermMsg, toUserMsg });

    socket.on("messageReceived", ({ firstName, text }) => {
      console.log(firstName + " " + text);
      setMessages((prev) => [...prev, { firstName, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [fromUsermMsg, toUserMsg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const socket = createsocketconn();
    socket.emit("sendmessage", {
      firstName: userData.firstName,
      fromUsermMsg,
      toUserMsg,
      text: newmessage,
    });
    setnewmessage("");
  };

  return (
    <div className="flex flex-col h-[600px]    w-3/4 mx-auto  bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-semibold">Chat</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-b-lg">
        {messages.map((msg) => (
          <>
            <div
              key={crypto.randomUUID()}
              className={`chat ${
                userData.firstName === msg.firstName ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-bubble bg-white text-black">
                <span className="font-semibold">{msg.firstName}</span>:{" "}
                {msg.text}
              </div>
            </div>
          </>
        ))}
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 flex items-center space-x-3 rounded-b-lg shadow-md"
      >
        <input
          type="text"
          value={newmessage}
          placeholder="Type a message..."
          onChange={(e) => setnewmessage(e.target.value)}
          className="flex-1 border bg-white text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Chat;
