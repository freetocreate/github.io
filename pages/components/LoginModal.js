import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Register from './Register';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };
  const instance = axios.create({
    baseURL: "https://freetoknow.pythonanywhere.com"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();


    const loginData = {
      username,
      password
    };

    try {
      const response = await instance.post('/api/login', loginData);
      console.log(loginData)

      if (response.data.success) {
        // Login successful, navigate to the desired page

        router.push(`/page/Profile?username=${username}`);
      } else {
        // Login failed, display the error message
        setError(response.data.message);
        console.log(response.data)
      }
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error(error);
    }
  };

  const handleClose = () => {
    // Set the showModal state to false to hide the modal
    setShowModal(false);
  };

  if (!showModal) {
    return null; // If showModal is false, render nothing (hide the modal)
  }

  return (
    <>{showLoginModal && <Register />}
    {!showLoginModal &&<div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-black p-6 rounded shadow w-96">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl font-bold ">Login</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
            onClick={handleClose}
          >
            
          </button>
        </div>
        <form onSubmit={handleSubmit} >
          
       
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-400 font-bold mb-2">
              Username
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              className="border bg-gray-700 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="bg-gray-700 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
            >
              Login
            </button>
            
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="bg-grey text-white px-4 py-2 rounded w-full hover:bg-white hover:text-black"
              onClick={toggleLoginModal}
            >
              Register
            </button>
            
          </div>
          {/* <div className="flex justify-between">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded w-1/2 hover:bg-red-600"
            >
              Login with Google
            </button>
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded w-1/2 hover:bg-green-600"
            >
              Login with WeChat
            </button>
          </div> */}
        </form>
      </div>
    </div>}</>
  );
};

export default LoginModal;
