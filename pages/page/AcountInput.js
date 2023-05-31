import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronLeftIcon  } from '@heroicons/react/solid';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';



const AcountInput = () => {
  const [activeButton, setActiveButton] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [account, setAccount] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const { username } = router.query;

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Access the environment variable

  const instance = axios.create({
    baseURL: "https://freetoknow.pythonanywhere.com"
  });
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleSave = () => {
    // Prepare the data to be sent to the backend
    const data = {
      type: activeButton,
      date: selectedDate,
      account,
      category,
      amount,
      note,
      description,
      username
    };

    instance .post(`/api/save-data?username=${username}`,  data)
      .then((response) => {
        // Handle the response from the server
        console.log('Save success:', response.data);
        // Redirect or handle success scenario
        // Redirect to page/Ledger.js
        router.push(`/page/Ledger?username=${username}`);
      })
      .catch((error) => {
        // Handle any errors that occur during the save operation
        console.error('Save error:', error);
      });
  };
  return (
    <div className='bg-white px-4 min-h-screen'>
      <div className='flex item-center'>
      <Link href={`/page/Ledger?username=`} ><ChevronLeftIcon className="w-6 h-6 mt-6 text-black" /></Link><h1 className='text-black font-mediumbold text-xl p-5  ml-2'>Expense</h1></div>
      <div className='flex'>
      <button
        className={`border rounded-lg h-8 px-4 mx-2 ${
          activeButton === 'income' ? 'border-orange-600 text-orange-600' : 'border-gray-300 text-gray-500'
        }`}
        onClick={() => handleButtonClick('income')}
      >
        Income
      </button>
      <button
        className={`border h-8  rounded-lg px-4  mx-2 ${
          activeButton === 'expense' ? 'border-orange-600 text-orange-600' : 'border-gray-300 text-gray-500'
        }`}
        onClick={() => handleButtonClick('expense')}
      >
        Expense
      </button>
      <button
        className={`border rounded-lg h-8 px-4 mx-2  ${
          activeButton === 'transfer' ? 'border-orange-600 text-orange-600' : 'border-gray-300 text-gray-500'
        }`}
        onClick={() => handleButtonClick('transfer')}
      >
       Transfer
      </button>
      </div>
      <div className="flex my-2 py-2 ml-8 items-center space-x-4">
        <label htmlFor="date" className="text-black">Date</label>
        <DatePicker
        id='date'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="rounded-lg border-gray-300 px-4 py-2 text-black"
      />
      </div>
      
      
      <div className="flex my-2 ml-4 items-center space-x-4">
        <label htmlFor="input1" className="text-gray-700">Acount</label>
        <input type="text" id="input1" value={account}
          onChange={(e) => setAccount(e.target.value)} className="border-b border-orange-500 px-4  py-2 text-black" placeholder="" />
      </div>
      <div className="flex my-2 ml-1  items-center space-x-4">
        <label htmlFor="input2" className="text-gray-700">Category</label>
        <input type="text" id="input2" value={category}
          onChange={(e) => setCategory(e.target.value)} className="border-b border-orange-500 px-4 py-2 text-black" placeholder="" />
      </div>
      <div className="flex my-2 ml-2  items-center space-x-4">
        <label htmlFor="input3" className="text-gray-700">Amount</label>
        <input type="text" id="input3" value={amount}
          onChange={(e) => setAmount(e.target.value)} className="border-b border-orange-500 px-4 py-2 text-black" placeholder="" />
      </div>
      <div className="flex my-2 ml-7 items-center space-x-4">
        <label htmlFor="input4" className="text-gray-700">Note</label>
        <input type="text" id="input4" value={note}
          onChange={(e) => setNote(e.target.value)} className="border-b border-orange-500 px-4 py-2 text-black" placeholder="" />
      </div>
      <div >
      <input type="text" id="input5" value={description}
          onChange={(e) => setDescription(e.target.value)} className="border-b mt-8 border-orange-500 px-4 py-2 text-black" placeholder="Description" /></div>
      
      <div  className="flex">
      <button
        onClick={handleSave}
        className={`border bg-orange-600  rounded-lg  mt-8 px-16 mx-2 h-10 w-80
        `}
      >
        Save
      </button>
      <button
        className={`border text-black rounded-lg mt-8 px-5 mx-2 h-10
        `}
      >
        Continue
      </button></div>
    </div>
  );
};

export default AcountInput;
