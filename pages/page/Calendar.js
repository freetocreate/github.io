import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameMonth } from 'date-fns';

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const prevMonth = () => {
    setSelectedMonth(subMonths(selectedMonth, 1));
  };

  const nextMonth = () => {
    setSelectedMonth(addMonths(selectedMonth, 1));
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    setShowPicker(false);
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center">
        <button onClick={prevMonth} className='text-lg'>{'<'}</button>
        <h2 className='text-black text-sm px-4'><span>{format(selectedMonth, 'yyyy')}</span><span className='pl-2'>{format(selectedMonth, 'MMM ')}</span></h2>
        <button onClick={nextMonth} className='text-lg'>{'>'}</button>
      </div>
    );
  };

  const renderMonthPicker = () => {
    if (!showPicker) return null;

    const months = Array.from({ length: 12 }, (_, i) => startOfMonth(new Date(selectedMonth.getFullYear(), i, 1)));

    return (
      <div className="flex flex-col items-center ml-40">
  <div className="text-base text-white font-bold text-center h-10 pt-2 w-80 bg-black">{format(selectedMonth, 'yyyy')}</div>
  <div className="grid grid-cols-4 gap-0 w-80">
    {months.map((month) => (
      <div
        key={month}
        className={`bg-gray-200 p-4 text-center cursor-pointer ${
          isSameMonth(month, selectedMonth) ? 'bg-black text-white' : ''
        }`}
        onClick={() => handleMonthClick(month)}
      >
        {format(month, 'MMM')}
      </div>
    ))}
  </div>
</div>

    );
  };

  return (
    <div className=" relative calendar flex items-center  " onClick={togglePicker}>
      {renderHeader()}
      {showPicker && (
    <div className="absolute top-1/2 left-1/4   transform -translate-x-1/2 -translate-y-1/2 mt-44 shadow-md">
      {renderMonthPicker()}
    </div>
  )}
    </div>
  );
};

export default Calendar;
