import React from 'react';
import { FiSearch, FiChevronRight } from 'react-icons/fi';

const friends = [
  { name: 'John Doe', online: true, head:'girl1' },
  { name: 'Jane Smith', online: false, head:'girl2'},
  { name: 'Mike Johnson', online: true,head:'head5' },
  { name: 'Sarah Lee', online: false, head:'head3' },
  { name: 'Tom Brown', online: true, head:'head4'},
];

const DemaList = () => {
  return (
    <div className="bg-gray-800 w-72 h-screen flex flex-col rounded-md h-full">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-700 w-8 h-8 flex items-center justify-center">
            <img
              src="/head2.jpg"
              alt="Profile"
              className="rounded-full w-6 h-6"
            />
          </div>
          <span className="text-white text-lg ml-2">Your Name</span>
        </div>
        <FiChevronRight className="text-white" />
      </div>
      <div className="border-t border-gray-700 mt-auto">
        <div className="px-4 py-3">
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch />
            </span>
            <input
              className="block w-full bg-gray-700 rounded-lg py-2 pl-10 pr-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:bg-gray-800 focus:text-gray-100"
              placeholder="Search"
              type="text"
              name="search"
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-700"
            >
              <div className="flex items-center">
                <div className="rounded-full bg-gray-700 w-8 h-8 flex items-center justify-center">
                  <img
                    src={`/${friend.head}.jpg`}
                    alt="Profile"
                    className="rounded-full w-6 h-6"
                  />
                  {friend.online && (
                    <div className="absolute right-0 bottom-0 bg-green-500 rounded-full w-2 h-2"></div>
                  )}
                </div>
                <span className="text-gray-200 ml-2">{friend.name}</span>
              </div>
              <FiChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemaList;
