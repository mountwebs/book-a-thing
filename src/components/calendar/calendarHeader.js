import React from "react";
import moment from "moment";

const calendarHeader = ({ selectDate }) => {
  return (
    <div>
      <h1>{moment(selectDate).format("dddd")}</h1>
      <h1>{moment(selectDate).format("MMMM Do")}</h1>
      {moment(selectDate).year()}
    </div>
  );
};

export default calendarHeader;
