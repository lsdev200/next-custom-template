"use client";
import React, { useState, useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [currentDate, setCurrentDate] = useState(selectedDate);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  useEffect(() => {
    setCurrentDate(selectedDate);
    setSelectedMonth(selectedDate.getMonth());
    setSelectedYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const handleDateChange = (date: Date) => {
    setCurrentDate(date);
    onDateChange(date);
  };

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
    const days = daysInMonth(selectedYear, selectedMonth);
    const daysArray = [];

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= days; i++) {
      daysArray.push(i);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-gray-700">
            {day}
          </div>
        ))}
        {daysArray.map((day, index) => (
          <div
            key={index}
            onClick={() => {
              if (day !== null) {
                const newDate = new Date(selectedYear, selectedMonth, day);
                handleDateChange(newDate);
                console.log(newDate);
              }
            }}
            className={`text-center cursor-pointer ${
              day === null ? "text-gray-300" : ""
            } ${
              day === currentDate.getDate()
                ? "bg-blue-500 text-white rounded"
                : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(event.target.value);
    setSelectedMonth(month);
    const newDate = new Date(selectedYear, month, currentDate.getDate());
    handleDateChange(newDate);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
    const newDate = new Date(year, selectedMonth, currentDate.getDate());
    handleDateChange(newDate);
  };

  const generateMonthOptions = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months.map((month, index) => (
      <option key={index} value={index}>
        {month}
      </option>
    ));
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      years.push(year);
    }

    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };

  const handlePreviousMonth = () => {
    const newMonth = selectedMonth - 1;
    if (newMonth < 0) {
      const newYear = selectedYear - 1;
      setSelectedYear(newYear);
      setSelectedMonth(11);
      const newDate = new Date(newYear, 11, currentDate.getDate());
      handleDateChange(newDate);
    } else {
      setSelectedMonth(newMonth);
      const newDate = new Date(selectedYear, newMonth, currentDate.getDate());
      handleDateChange(newDate);
    }
  };

  const handleNextMonth = () => {
    const newMonth = selectedMonth + 1;
    if (newMonth > 11) {
      const newYear = selectedYear + 1;
      setSelectedYear(newYear);
      setSelectedMonth(0);
      const newDate = new Date(newYear, 0, currentDate.getDate());
      handleDateChange(newDate);
    } else {
      setSelectedMonth(newMonth);
      const newDate = new Date(selectedYear, newMonth, currentDate.getDate());
      handleDateChange(newDate);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-72 w-[450px] cursor-pointer">
      <div className="flex justify-between mb-2">
        <button onClick={handlePreviousMonth}>
          <BiLeftArrow className="text-2xl opacity-70" />
        </button>
        <div className="cursor-pointer">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="mr-2 cursor-pointer"
          >
            {generateMonthOptions()}
          </select>

          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="cursor-pointer"
          >
            {generateYearOptions()}
          </select>
        </div>
        <button onClick={handleNextMonth}>
          <BiRightArrow className="text-2xl opacity-70" />
        </button>
      </div>
      {renderCalendar()}
    </div>
  );
};

export default DatePicker;
