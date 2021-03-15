import React, { useState } from "react";
import moment from "moment";

import CalendarHeader from "./calendarHeader";

// source: https://medium.com/dev-genius/creating-a-react-calendar-component-part-2-8992af1426fb

const getDaysInMonth = (month, year) => {
  return moment(`${month}-${year}`, "MM-YYYY").daysInMonth();
};

const getFirstWeekdayOfMonth = (month, year) => {
  return moment(`${month}-${year}`, "MM-YYYY").startOf("month").weekday();
};

const getPrevMonthYear = (month, year) => {
  // If it is January... prev month is Dec of the previous year
  if (month === 1) {
    return {
      month: 12,
      year: year - 1,
    };
  }
  // Otherwise, same year, but month - 1
  return {
    month: month - 1,
    year,
  };
};
const getNextMonthYear = (month, year) => {
  // If it is January... prev month is Dec of the previous year
  if (month === 1) {
    return {
      month: month + 1,
      year,
    };
  }
  // Otherwise, same year, but month - 1
  return {
    month: 12,
    year: year + 1,
  };
};

const getDatesInMonthDisplay = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstWeekday = getFirstWeekdayOfMonth(month, year);
  const result = [];
  const prev = getPrevMonthYear(month, year);
  const prevDaysInMonth = getDaysInMonth(prev.month, prev.year);
  // Add prev overflow dates...
  for (let j = firstWeekday - 1; j >= 0; j--) {
    result.push({
      date: moment(
        `${prev.month}-${prevDaysInMonth - j}-${prev.year}`,
        "MM-DD-YYYY"
      ).toDate(),
      currentMonth: false,
    });
  }
  // Add current month's dates
  for (let i = 1; i <= daysInMonth; i++) {
    result.push({
      date: moment(`${month}-${i}-${year}`, "MM-DD-YYYY").toDate(),
      currentMonth: true,
    });
  }
  // Overflow dates for next month to meet 42 days per month display   requirement
  if (result.length < 42) {
    const daysToAdd = 42 - result.length;
    const next = getNextMonthYear(month, year);
    for (let k = 1; k <= daysToAdd; k++) {
      result.push({
        date: moment(`${next.month}-${k}-${next.year}`, "MM-DD-YYYY").toDate(),
        currentMonth: false,
      });
    }
  }
  return result;
};
// July 2020
// Note, since we use MomentJs's formatting, we do not index the month. This is getting the first weekday of the month for January 2020. Result is 0-indexed
console.log(getDatesInMonthDisplay(7, 2020));

const Calendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());

  return <CalendarHeader selectDate={selectDate} />;
};

export default Calendar;
