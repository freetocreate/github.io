import React, { useEffect, useState, useRef } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { PlusIcon } from '@heroicons/react/solid';
import { FaPizzaSlice, FaFootball, FaShoppingBag } from 'react-icons/fa';

import Calendar from './Calendar';
import Link from 'next/link'
import axios from 'axios';


const Ledger = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  const [activeItem, setActiveItem] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // Access the environment variable

  const instance = axios.create({
    baseURL: baseURL
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/api/get-table-data');
        const responseData = response.data;
        console.log(responseData);
        setTableData(responseData);
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  console.log(tableData);
  console.log("dddddd");
  const totalExpense = tableData.reduce((total, data) => {
    const sumAmount = data.amount;
    return data.activeButton === 'expense' ? total + sumAmount : total;
  }, 0);
  
  const totalIncome = tableData.reduce((total, data) => {
    const inAmount = data.amount;
    return data.activeButton === 'income' ? total + inAmount : total;
  }, 0);
  return (
    <div className='bg-white min-h-screen'>
      <div className=" text-black ">
        <Calendar /></div>
      <ul className="text-grey flex ">
        <li className={`flex items-center text-sm float-left btn text-[#6e6d6e]  border-0 justify-center w-40 h-10 border-gray-300 ${activeItem === 1 ? 'border-b-2 border-orange-500 font-bold' : ''
          } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(1)}>Daily</li>
        <li className={`flex float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 ${activeItem === 2 ? 'border-b-2 border-orange-500 font-bold' : ''
          } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(2)}>Monthly</li>
        <li className={`flex float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 ${activeItem === 3 ? 'border-b-2 border-orange-500 font-bold' : ''
          } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(3)}>Yearly</li>

        <li className={`flex float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 ${activeItem === 4 ? 'border-b-2 border-orange-500 font-bold' : ''
          } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(4)}>Total</li>

        <li className={`flex float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 ${activeItem === 5 ? 'border-b-2 border-orange-500 font-bold' : ''
          } transition-all duration-500 ease-in-out`} onClick={() => handleItemClick(5)}>Note</li>

      </ul><hr />
      <ul className="text-grey flex ">
        <li className={`flex flex-col items-center text-sm float-left btn text-[#6e6d6e]  border-0 justify-center w-40 h-10 border-gray-300 `} ><span>Income</span>
          <span className='text-blue-500'>${totalIncome}</span></li>
        <li className={`flex flex-col float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 `} ><span>Expenses</span>
          <span className='text-orange-500'>${totalExpense}</span></li>
        <li className={`flex flex-col float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300`} ><span>Total</span>
          <span>${totalIncome-totalExpense}</span></li>
      </ul><hr />
      {tableData.map((data) => {
        
        const itemsForDay = 
        tableData
              .filter((item) => item.date === data.date)

        // Calculate the sum of item.amount for the same day and activeButton as "expense"
        const sumAmount = itemsForDay
          .filter(item => item.activeButton === 'expense')
          .reduce((total, item) => total + item.amount, 0);
        const inAmount = itemsForDay
          .filter(item => item.activeButton === 'income')
          .reduce((tot, item) => tot + item.amount, 0);
      const dateObj = new Date(data.date);
      const monthYear = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long' }).format(dateObj);
      const dayOfWeek = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(dateObj);
      const dayOfMonth = dateObj.getDate();
      const words = monthYear.split('');
      const monthAbbreviation = words.slice(0, 3).join('');
      const year = words.slice(-5);

      const dayAbbreviation = dayOfWeek.split('').slice(0, 3).join('');
      return (<div key={data.date}>
        <ul className="flex" style={{ margin: "-5px 0" }}>
          <li className={`flex items-center text-sm float-left btn   border-0 justify-center w-40 h-10 border-gray-300 `} ><span className='text-black text-lg font-semibold'>{dayOfMonth}</span><span><button
            className={`border text-xs bg-[#555ff2] text-white rounded-lg  px-2 mx-1 
        `}
          >
            {dayAbbreviation}
          </button></span>
            <span className='text-[#8c8a89] text-xs  pt-1'>{monthAbbreviation}{year}</span></li>
          <li className={`flex  float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300 `} ><span className='text-blue-500'>${inAmount.toFixed(2)}</span>
          </li>
          
          <li className={`flex float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300`} ><span className='text-orange-500'>${sumAmount.toFixed(2)}</span>
          </li>
        </ul><hr />
        {itemsForDay
            .map((item) => (
          <ul key={item.id} className="flex">
            <li className={`flex items-center text-sm float-left btn   border-0  w-2 h-10 border-gray-300 pl-3 `} ><span><FaPizzaSlice color="orange" size={15} /></span><span className='text-gray-500 text-xs'>{item.category}</span><span></span>
            </li>
            <li className={`flex flex-col float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-80 h-10 border-gray-300 `} ><span className='text-black'>{item.note}</span><span className='text-gray text-xs'>{item.acount}</span>
            </li>
            <li className={`flex float-left text-sm border-0 btn text-[#6e6d6e] items-center justify-center w-40 h-10 border-gray-300`} ><span className='text-orange-500'>${item.amount}</span>
            </li>
          </ul>))}

      </div>);
    })}
      <hr />
      <div className='fixed bottom-0 right-0 mr-4 mb-4'>
        <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center">
          <Link href={`/page/AcountInput?username=`} ><PlusIcon className="h-6 w-6 text-white" /></Link>
        </div></div>
    </div>
  );
};

export default Ledger;
