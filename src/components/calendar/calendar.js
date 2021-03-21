import React, { useState } from "react";
import moment from "moment";
import CalendarHeader from "./calendarHeader";
import WeekdayIndicator from "./weekdayIndicator";
import DateIndicator from "./dateIndicator";
import MonthIndicator from "./monthIndicator";

// source: https://medium.com/dev-genius/creating-a-react-calendar-component-part-2-8992af1426fb

const Calendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());

  return (
    <div>
      <CalendarHeader selectDate={selectDate} />
      <WeekdayIndicator />
      <DateIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
      <MonthIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
    </div>
  );
};

export default Calendar;
