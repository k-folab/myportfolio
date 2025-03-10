import React from "react";

const Currentdate = () => {
  const today = new Date();
  const day = today.getDate();

  const monthNames = [
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

  const month = monthNames[today.getMonth()];

  return (
    <div className="text-lg text-blue-600 dark:text-gray-200">
      {day}, {month}
    </div>
  );
};

export default Currentdate;
