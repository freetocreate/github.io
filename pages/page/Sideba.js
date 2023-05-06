import React from 'react';
import Link from 'next/link'
import MessageSquareIcon from './MessageSquareIcon';




const Sideba = ({ isOpen, onClose }) => {
  return (
    
    <div className={`Sidebar ${isOpen ? 'open' : ''}`}>
      <div className="Sidebar-header">
        <h6>+  New Chat</h6>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="Sidebar-content">
        <ul>

          <ul>
          <label className='label'>Basic</label>
          <li><Link
          href="/page/HistoryTruth"><div className="list-item"><MessageSquareIcon/><span>History Truth</span></div></Link></li>
            <li><Link
          href="/page/ChatGPTMobile"><div className="list-item"><MessageSquareIcon /><span>Grammar Correction</span></div></Link></li>
            <li><Link
          href="/page/FriendChat"><div className="list-item"><MessageSquareIcon/><span>Friend Chat</span></div></Link></li>
            
          </ul>

          <ul>
          <label className='label'>Advance</label>
            <li><Link
          href="/page/ExplainCode"><div className="list-item"><MessageSquareIcon/><span>Explain Code</span></div></Link></li>
            <li><Link
          href="/page/EssayOutline"><div className="list-item"><MessageSquareIcon/><span>Generate writing outline</span></div></Link></li>
            <li><Link
          href="/page/EnglishOther"><div className="list-item"><MessageSquareIcon/><span>English Translate</span></div></Link></li>
          </ul>
          <ul>
          <label className='label'>More</label>
            <li><Link
          href="/page/StoryCreate">
            <div className="list-item">
              
              <MessageSquareIcon/><span>Story Create</span></div></Link></li>
          
          </ul>
        
        </ul>     
      </div>
    </div>
   
  );
};

export default Sideba;
