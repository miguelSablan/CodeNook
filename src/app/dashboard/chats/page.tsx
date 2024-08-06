"use client";

import Sidebar from "@/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const users = [
  {
    id: 1,
    name: "User 1",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    recentMessage: "Hello, how are you?",
  },
  {
    id: 2,
    name: "User 2",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    recentMessage: "Let's meet tomorrow.",
  },
  {
    id: 3,
    name: "User 3",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    recentMessage: "See you soon!",
  },
];

// Mock data for chat messages
const chatMessages = [
  {
    id: 1,
    text: "Hey, I noticed you're working with Next.js too. How do you handle server-side rendering with authentication?",
    sender: "current",
    timestamp: "12:45",
  },
  {
    id: 2,
    text: "Hi! Yes, I use NextAuth.js for authentication. Do you need help setting it up?",
    sender: "other",
    timestamp: "12:47",
  },
  {
    id: 3,
    text: "That would be great! Thanks!",
    sender: "current",
    timestamp: "12:49",
  },
  {
    id: 4,
    text: "No problem! Happy coding!",
    sender: "other",
    timestamp: "12:51",
  },
];

const selectedUser = {
  id: 1,
  name: "John Doe",
  username: "@johndoe",
  avatar:
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
};

const UserList = () => {
  return (
    <div>
      <div className="mb-4">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <input type="text" className="grow text-black" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-700"
          >
            <img src={user.avatar} className="w-10 h-10 rounded-full" />
            <div className="ml-4 flex-1">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-gray-400 truncate">
                {user.recentMessage}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatInterface = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 border-b border-gray-700">
        <img
          src={selectedUser.avatar}
          alt={`${selectedUser.name} avatar`}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <div className="text-lg font-semibold">{selectedUser.name}</div>
          <div className="text-sm text-gray-400">{selectedUser.username}</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={`chat ${
              message.sender === "current" ? "chat-end" : "chat-start"
            }`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  src={selectedUser.avatar}
                  alt={`${selectedUser.name} avatar`}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <div className="chat-header">
              {message.sender === "current" ? "You" : selectedUser.name}
              <time className="text-xs opacity-50 ml-2">
                {message.timestamp}
              </time>
            </div>
            <div className="chat-bubble">{message.text}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 p-4 flex">
        <input
          type="text"
          className="flex-1 p-2 bg-transparent text-white"
          placeholder="Type a message..."
        />
        <button className="ml-2 btn btn-primary rounded-full">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

const Chats = () => {
  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-1 min-h-screen text-white">
        <div className="w-1/4 p-4 border-r border-gray-700">
          <UserList />
        </div>
        <div className="flex-1">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default Chats;
