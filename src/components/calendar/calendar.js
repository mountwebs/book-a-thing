import React, { useState } from "react";
import moment from "moment";
import CalendarHeader from "./calendar-header";
import WeekdayIndicator from "./weekday-indicator";
import DateIndicator from "./date-indicator";
import MonthIndicator from "./month-indicator";
import "./temp-scss/bae-calendar.scss";

// source: https://medium.com/dev-genius/creating-a-react-calendar-component-part-2-8992af1426fb

const Calendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());

  return (
    <div className={`bae-calendar-container`}>
      <CalendarHeader selectDate={selectDate} />
      <WeekdayIndicator />
      <DateIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
      <MonthIndicator selectDate={selectDate} setSelectDate={setSelectDate} />
    </div>
  );
};

export default Calendar;
