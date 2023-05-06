import axios from "axios";
import React, { useState } from 'react';
import HeadIcon from "./HeadIcon";
import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import Sidebar from "./SideBar";
import DemaList from "./DemaList"; 
import FriendDetail from "./FriendDetail";
import NewSideBar from "./NewSideBar";
import { FiChevronRight } from 'react-icons/fi';

const baseURL = "http://127.0.0.1:5000/api/generate-names";

export default function gramCorrection() {

  const [formData, setFormData] = useState('');
  const [responses, setResponses] = useState({});
  const [dialg,setDialg] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // scroll to the bottom of the chat box
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [dialg]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(baseURL,  {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log(response.data.choices[0].text)
      setResponses(response.data.choices[0].text);
      setDialg(prevDialg => [...prevDialg, formData, response.data.choices[0].text])

      console.log('API response:', response.result);
    } catch (error) {
      console.error('API error:', error);
    }
    setFormData('')
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);
  
  return (

    <div className="flex" >
      {!isMobile && <Sidebar />}
      {!isMobile ? <NewSideBar /> : null}
<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-0 lg:py-0 flex-auto rounded-md" style={{width: !isMobile ?750:450}}>
  <div className="mx-auto max-w-7xl px-8 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
    
      <div className="max-w-xl lg:max-w-lg " style={{marginTop:30}}>
      <div className="flex  justify-between ">
        <div className=" ">
          <span className="text-white text-lg ml-2" style={{position:"relative", bottom:10}}>Begin chatGPT </span>
        </div>
        <FiChevronRight className="text-white" />
      </div>
        {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2> */}
        <div
          style={{width:!isMobile ?600:390, height:!isMobile ?350:450,'--scrollbar-track-color': 'transparent'
          }}
          ref={chatBoxRef}
          id="answer" 
          className="scrollbar-hidden overflow-hidden overflow-y-auto 
          min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2
            text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset
            focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="">
            <style>
              {`
                #answer::-webkit-scrollbar {
                  display: none;
                }
              `}
           </style>
           <ul style={{listStyleType: 'none'}}>
          
            {dialg.map((item, index) => (
             
              <li key={index}  style={{display: 'flex', alignItems: 'top'}}>
               <HeadIcon src={(index + 1) % 2 === 0 ? "/robot.png" : "/Dom.png"} alt="head icon" />
      <div style={{marginLeft: '10px'}}>{item}</div><br/><br/></li>
            
            ))}
          </ul>
        </div>
        <p className="mt-4 text-lg leading-8 text-gray-300"></p>
        <div className="mt-6 flex max-w-md gap-x-4"  style={{width:500}} >
        <form onSubmit={handleSubmit} className="relative"  >
          <label htmlFor="description" className="sr-only">Email address</label>
          <input 
            style={{width:!isMobile ?600:390,}}
            value = {formData}
            name="description" onChange={(event) => setFormData(event.target.value )}
            id="description"required className="min-w-0  flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your question"/>
           
          <button 
            type="submit"  
            className="flex-none rounded-md bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white 
            shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-indigo-500">
              <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="white"
      viewBox="0 0 24 24"
      stroke="black"
      style={{position:'relative',left:530,bottom:42}}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
            </button>
        　</form>
        </div>
      </div>
      {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
          <dd className="mt-2 leading-7 text-gray-400">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>
          </div>
          <dt className="mt-4 font-semibold text-white">No spam</dt>
          <dd className="mt-2 leading-7 text-gray-400">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
        </div>
      </dl> */}
    </div>
  </div>
  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div 
      className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
      style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
      ></div>
    </div>
  </div>
    {!isMobile ? <FriendDetail /> : null}
  </div>
  )
}