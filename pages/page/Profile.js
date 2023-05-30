import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Card from './Card';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [historyData, setHistoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(1);
  const [usernamer, setUsernamer] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Access the environment variable
  const instance = axios.create({
    baseURL: "https://freetoknow.pythonanywhere.com"
  });
  const router = useRouter();
  const { username } = router.query;
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const fetchProfilePictureUrl = async (username) => {
    // Make an API call to retrieve the profile picture URL based on the username
    // You can use axios or another library for this
    // Example using axios:
    try {
      const response = await instance.get(`/api/picture?username=${username}`);
      const data = await response.data;
      if (data.success) {
        const { success, url } = data;
        setProfileImageUrl(url);
      } else {
        console.log('picture not found font');
        const message = data.message; // Retrieve the error message
        setProfileImageUrl('');
        console.log('Error message:', message);
      }
    } catch (error) {
      console.log('Error fetching profile picture:', error);
      setProfileImageUrl('');
    }
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        console.log(username)
        const response = await instance.get(`/api/user?username=${username}`);
        const data = await response.data;
        console.log(data)
        if (data.success) {
          const user_data = data.message;
          setProfileData(user_data);
          console.log('User:', user_data);
          console.log('Usersssssss:', profileData);
        } else {
          console.log('user not found font');
          const message = data.message; // Retrieve the error message
          setProfileData(null);
          console.log('Error message:', message);

        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching profile data:', error);
        console.log('9999999999')
        setIsLoading(false);
        setProfileData(null); // Set profileData to null in case of any error

      }
    };

    fetchProfileData();
  }, [username]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await instance.get(`/api/history?membername=${username}`);
        const data = await response.data;
        if (data.success) {
          const history = data.history;
          setHistoryData(history);
          // console.log('User:', user);
        } else {
          console.log('History not found');
          const message = data.message; // Retrieve the error message
          setHistoryData(null);
          console.log('Error message:', message);

        }
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching profile data:', error);
        setHistoryData(null);
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [username]);

  useEffect(() => {
    // Fetch the profile picture URL using an API call or state management library
    fetchProfilePictureUrl(username);
  }, [username]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid grid-cols-3 gap-0 min-h-screen'>
      <div className="bg-white col-span-2">
        <div className='h-40 bg-gradient-to-b from-sky-200 to-white '></div>
        {profileData ? (
          <div className="text-black px-6 ">
            <h2 className="username text-6xl mb-8 font-medium font-serif hover:font-sans">{profileData.username}<Link
              href="./ChatGPTMobile"><DotsHorizontalIcon className="w-6 h-6 text-gray-500 float-right" /></Link></h2>

            <ul className="text-grey flex ">
              <li className={`flex items-center float-left btn text-[#6e6d6e]  border-0 justify-center w-40 h-10 border-gray-300 ${activeItem === 1 ? 'border-b' : ''
                } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(1)}>Home</li>
              <li className={`flex float-left border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 ${activeItem === 2 ? 'border-b transition' : ''
                } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(2)}>List</li>
              <li className={`flex float-left border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 ${activeItem === 3 ? 'border-b' : ''
                } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(3)}>About</li>
            </ul><hr />
            <div className="p-6" >
              {historyData && historyData.map((history, index) => (
                <Card key={index} history={history} />
              ))}


            </div>
            {/* <p className="email font-sans">{profileData.email}</p>
          <p className="phonenumber font-sans">{profileData.phonenumber}</p> */}
            {/* Render other profile information */}
          </div>
        ) : (
          <div className="no-data">No profile data available.</div>
        )}


        <style jsx>{`
        .profile-container {
          // Tailwind CSS classes for mobile view
          @apply // Add Tailwind CSS classes for mobile view;
        }

        @media screen and (min-width: 768px) {
          .profile-container {
            // Tailwind CSS classes for desktop view
            @apply // Add Tailwind CSS classes for desktop view;
          }
        }

        .profile {
          // Shared CSS classes using Tailwind CSS
          @apply // Add shared Tailwind CSS classes;
        }

        .username {
          // CSS for username
          @apply // Add Tailwind CSS classes for username;
        }

        .email {
          // CSS for email
          @apply // Add Tailwind CSS classes for email;
        }

        .phonenumber {
          // CSS for phone number
          @apply // Add Tailwind CSS classes for phone number;
        }

        .no-data {
          // CSS for no profile data
          @apply // Add Tailwind CSS classes for no data;
        }
      `}</style>

      </div> <div className="bg-white col-span-1 p-8 relative">
        {/* <HeadIcon src={'/chatGPT.jpg'} alt="head icon" /> */}
        <img
          src={profileImageUrl ? profileImageUrl : 'girl1.jpg'} alt="Profile Picture"
          className="rounded-full h-32 w-32 m-8"
        />
        <h2 className="username text-2xl font-semibold text-black ml-8  font-sans">{profileData.username}</h2>
        <p className='text-base font-medium text-[#6e6d6e]  ml-8 '>Every thing has been happened</p>
        <p className='text-base font-medium text-[#059c6a] m-8 '><Link href={`/page/FileUpload?username=${profileData.username}`}>Edit Profile</Link></p>

        <ul className='text-sm fixed bottom-9 font-medium text-[#6e6d6e]  justify-end ml-8 flex space-x-4'><li>Text to Speech</li><li><Link
          href={`/page/GptThree?username=${profileData.username}`}>Start chatGPT</Link></li>
          <li><Link
            href={`/page/Ledger?username=${profileData.username}`}>Ledger</Link></li></ul>
      </div>

    </div>

  );
};

export default Profile;
