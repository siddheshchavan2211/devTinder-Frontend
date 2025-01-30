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
    <div className="flex flex-col h-[600px] justify-center mx-auto mt-20 w-3/4 bg-gray-100 rounded-lg overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-red-400 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <h2 className="font-semibold">Chat </h2>
          </div>
        </div>
        <div className="flex space-x-4"></div>
      </div>

      {/* Messages */}
      {messages.map((msg) => (
        <div
          key={crypto.randomUUID()}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          <div className="chat chat-start flex gap-3 items-center">
            <div className="chat-image avatar">
              <div className="w-10 h-10 rounded-full">
                <img
                  className="w-10 h-10 rounded-full"
                  alt="Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-bubble max-w-[70%] p-3 rounded-lg bg-white text-gray-800">
              {msg?.text}
              <span>{msg.firstName}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Input area */}
      <form onSubmit={""} className="bg-white p-4 flex items-center space-x-2">
        <input
          type="text"
          value={newmessage}
          placeholder="Type a message..."
          onChange={(e) => {
            setnewmessage(e.target.value);
          }}
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
