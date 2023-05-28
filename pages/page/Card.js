import React from 'react';

const Card = ({history}) => {
  if (!history) {
    return null; // Render nothing if history is undefined
  }
  return (
    <div className="w-full rounded-lg shadow-lg my-4">
     
      <div className="px-6 py-2">
        <div className="font-bold text-black text-xl mb-2">{history.question}</div>
        <p className="text-gray-700 text-base">
          {history.answer}
        </p>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {history.time}
        </span>
        
      </div>
    </div>
  );
};

export default Card;
