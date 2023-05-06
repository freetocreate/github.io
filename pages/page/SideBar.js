import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-gray-100 rounded-md" style={{width:80}} >
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="/" className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700">
            <img className="w-8 h-8 rounded-md mr-2" src="/grammar.jpg" alt="Home icon" />
            <span></span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/about" className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700">
            <img className="w-8 h-8 rounded-md mr-2" src="/codse.png" alt="About icon" />
            <span></span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/contact" className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700">
            <img className="w-8 h-8 rounded-md mr-2" src="/translate.jpg" alt="Contact icon" />
            <span></span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/contact" className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700">
            <img className="w-8 h-8 rounded-md mr-2" src="/chat.png" alt="Contact icon" />
            <span></span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/contact" className="sidebar-link flex items-center px-4 py-2 hover:bg-gray-700">
            <img className="w-8 h-8 rounded-md mr-2" src="/more.png" alt="Contact icon" />
            <span></span>
          </a>
        </li>
       

      </ul>
    </div>
  );
};

export default Sidebar;
