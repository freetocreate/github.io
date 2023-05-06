import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const friendDetails = {
  name: 'John Doe',
  online: true,
  photo: 'https://via.placeholder.com/150',
  introduction:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mollis orci, in efficitur risus tempus ac. Duis ut enim quis nulla dapibus vulputate quis sit amet nulla. ',
};

const FriendDetail = () => {
  return (
    <div className="bg-gray-800 w-72 h-screen flex flex-col rounded-md h-full" style={{width:300}}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-700 w-8 h-8 flex items-center justify-center">
            <img
              src="/girl1.jpg"
              alt="Profile"
              className="rounded-full w-6 h-6"
            />
          </div>
          <span className="text-white text-lg ml-2">{friendDetails.name}</span>
        </div>
        <FiChevronRight className="text-white" />
        
      </div>
      <div className="border-t border-gray-700 justify-items-center py-10" >
  <div className="grid grid-cols-2 grid-rows-2 gap-2 " style={{width:200,margin:'auto'}}>
    <img src="/view1.jpg" alt="Profile" className="rounded-md w-full h-full object-cover" />
    <img src="/view2.jpg" alt="Profile" className="rounded-md w-full h-full object-cover" />
    <img src="/view3.jpg" alt="Profile" className="rounded-md w-full h-full object-cover" />
    <img src="/view4.jpg" alt="Profile" className="rounded-md w-full h-full object-cover" />
  </div>
  <div className="px-4 py-6">
    <div className="text-gray-400">{friendDetails.introduction}</div>
  </div>
</div>

        
    </div>
  );
};

export default FriendDetail;
