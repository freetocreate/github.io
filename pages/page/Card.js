import React from 'react';

const Card = ({ hist }) => {
  if (!hist) {
    return null; // Render nothing if history is undefined
  }
  return (
      <div className="w-full rounded-lg shadow-lg my-4">

        <div className="px-6 py-2">
          <div className="font-bold text-black text-xl mb-2"></div>
          <p className="text-gray-700 text-base">
            {hist.answer}
          </p>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {hist.time}
          </span>

        </div>
      </div>
  );
};

export default Card;
