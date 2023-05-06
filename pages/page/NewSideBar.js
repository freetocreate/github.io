import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

const channels = [
  { id: 1, name: "general", unread: 3 },
  { id: 2, name: "random", unread: 2 },
  { id: 3, name: "news", unread: 5 },
  { id: 4, name: "games", unread: 1 },
];

const NewSideBar = () => {
  return (
    <div className="bg-gray-900 h-screen w-64 flex flex-col h-full" style={{width:300}}>
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <img
            src="/head2.jpg"
            alt="Discord"
            className="w-8 h-8"
          />
          <span className="text-white text-xl font-semibold"></span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition-colors duration-200">
            <FiPlus className="text-white" />
          </button>
          <button className="bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-200">
            <img
              src="/code.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="relative text-gray-400 focus-within:text-gray-600">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch />
          </span>
          <input
            className="block w-full bg-gray-800 rounded-lg py-2 pl-10 pr-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:bg-gray-700 focus:text-gray-100"
            placeholder="Search"
            type="text"
            name="search"
          />
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {channels.map((channel) => (
          <a
            key={channel.id}
            href="#"
            className="px-4 py-2 flex items-center justify-between text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            <span
              className={`${
                channel.unread > 0 ? "bg-green-500" : "bg-gray-700"
              } w-3 h-3 rounded-full mr-2`}
            />
            <span className="truncate">{channel.name}</span>
            {channel.unread > 0 && (
              <span className="bg-red-500 rounded-full px-2 py-1 text-xs font-semibold">
                {channel.unread}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewSideBar;
