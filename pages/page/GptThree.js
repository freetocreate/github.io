
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sideba from './Sideba';
import axios from 'axios';
import SendIcon from './SendIcon';
import HeadIcon from './HeadIcon';
import Link from 'next/link';
import { ArrowLeftIcon, DotsHorizontalIcon } from '@heroicons/react/solid';


function GptThree() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const { username } = router.query;
  const [result, setResult] = useState('');
  const [messages, setMessages] = useState([]);
  const [animal, setAnimal] = useState('');
  const [message, setMessage] = useState('');
  const payload = {
    username: username,
    animal: animal
  };
  const chatBoxRef = useRef(null);
  useEffect(() => {
    // scroll to the bottom of the chat box
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  // useEffect(() => {
  //   // scroll to the bottom of the chat box
  //   handleSendMessage(result)}, [result]);
  const handleMessageChange = (event) => {

    setAnimal(event.target.value);
    setMessage(event.target.value)
    console.log(animal)
  }

  const handleSendMessage = (message) => {
    setMessages(messages => [...messages, message]);
  }


  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && message !== '') {
      handleSendMessage(message);
      setMessage('');
    }
  }

  const handleSendClick = () => {
    if (message !== '') {
      handleSendMessage(message);
      setMessage('');
    }
  }


  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Access the environment variable

  const instance = axios.create({
    baseURL: baseURL
  });

  const handleGenerateNames = async (event, animal) => {
    event.preventDefault();
    console.log(animal)
    try {
      const response = await instance.post("/api/gpt-three", payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.error) {
        console.error('API error:', response.data.error);
      } else {
        console.log('API response:', response.data.result);
      }
      console.log(response)
      console.log(response.data)
      console.log('API response:', response.data.result);
      setResult(response.data.result)

      handleSendMessage(response.data.result);

      console.log(messages)
    } catch (error) {
      console.error('API error:', error);
    }
  };






  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="App-header">
        <div className="navbar">
          <button className="menu-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>&#9776;</button>
          <h6 className="App-title">New chat</h6>
          <button className="plus-button"><Link href={`/page/Profile?username=${username}`} className='text-sm'>Back
  </Link></button>
        </div>
      </header>
      <div className='App-content' ref={chatBoxRef} style={{ overflowY: 'scroll', marginTop: 4, marginLeft: 10, marginRight: 10 }}>
        <ul style={{ listStyleType: 'none' }}>
          {messages.map((item, index) => (
            <li key={index} style={{
              display: 'flex', alignItems: 'top', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: '10px'
            }}>


              {index % 2 === 0 && <HeadIcon src={(index + 1) % 2 === 0 ? '/github.io/chatGPT2.png' : '/github.io/me.png'} alt="head icon" />}

              <div style={{ marginLeft: '10px' }}>
                <div
                  style={{
                    backgroundColor: (index + 1) % 2 === 0 ? '#f0f0f0' : '#a2e855',
                    borderRadius: '8px',
                    padding: '10px',
                    color: 'black',
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: '10px',
                    textAlign: 'left',
                  }}
                >
                  {item}
                </div>

              </div>
              {index % 2 === 1 && <HeadIcon src={(index + 1) % 2 === 0 ? '/github.io/chatGPT2.jpg' : '/github.io/me.png'} alt="head icon" />}
            </li>
          ))}
        </ul>

      </div>
      <div className="chat-container" style={{ marginTop: 'auto' }} >
        <div className="ChatInput" >
          <div className="InputContainer" >
            <form onSubmit={(event) => handleGenerateNames(event, animal)}>
              <input
                type="text"
                placeholder="Type a sentence..."
                value={message}
                name="animal"
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}

              />
              <button className="SendButton" onClick={handleSendClick}>
                <SendIcon />
              </button>
            </form>
          </div>

          <div className="ChatInfo">
            Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 3 Version.
          </div>

        </div>

      </div>
      <Sideba isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default GptThree;
