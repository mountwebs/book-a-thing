import React from "react";
import { getMonth } from "./utils/moment-utils";
import { getMonthSet } from "./utils/date-utils";
import { monthsFull } from "./date-constants";
const MonthIndicator = ({ selectDate, setSelectDate }) => {
  const changeMonth = (e) => {
    setSelectDate(e.target.getAttribute("data-date"));
  };
  const monthSet = getMonthSet(selectDate);
  return (
    <div className="bae-month-indicator">
      <h4 data-date={monthSet.prev} onClick={changeMonth}>
        {monthsFull[getMonth(monthSet.prev)]}
      </h4>
      <h3>{monthsFull[getMonth(monthSet.current)]}</h3>
      <h4 data-date={monthSet.next} onClick={changeMonth}>
        {monthsFull[getMonth(monthSet.next)]}
      </h4>
    </div>
  );
};
export default MonthIndicator;
