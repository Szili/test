import React, { useState } from "react";

const Homepage = ({ user, ...props }) => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [wasSaved, setWasSaved] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();

    setWasSaved(true);
    const time = getTime(startTime, endTime);
    const timesArray = JSON.parse(localStorage.getItem("users")) || [];
    console.log("timesArray: ", timesArray);

    timesArray.push({ user, date, time });

    localStorage.setItem("users", JSON.stringify(timesArray));
  };

  const isFormValid = () => {
    const isValid = input && date && startTime && endTime;
    return isValid;
  };

  const getTime = (start, end) => {
    const startTime = start.split(":");
    const endTime = end.split(":");

    const startTimeMinutes = +startTime[0] * 60 + +startTime[1];
    const endTimeMinutes = +endTime[0] * 60 + +endTime[1];

    return endTimeMinutes - startTimeMinutes;
  };

  const onInputEdit = (value, setter) => {
    console.log("value; ", value);
    setter(value);
    setWasSaved(false);
  };

  return (
    <>
      <form id="time-form" onSubmit={onSubmitForm}>
        <div>
          <input
            type="text"
            placeholder="Input"
            value={input}
            onChange={(e) => onInputEdit(e.target.value, setInput)}
            required
          />
        </div>
        <div>
          {input && (
            <div>
              <input
                type="date"
                onChange={(e) => onInputEdit(e.target.value, setDate)}
                required
              />
              <p>From:</p>
              <input
                type="time"
                value={startTime}
                onChange={(e) => onInputEdit(e.target.value, setStartTime)}
                required
              />
              <p>To:</p>
              <input
                type="time"
                value={endTime}
                onChange={(e) => onInputEdit(e.target.value, setEndTime)}
                required
              />
            </div>
          )}
        </div>
        <div className="save-btn">
          {isFormValid() && (
            <button type="submit" disabled={wasSaved}>
              {wasSaved ? "Saved" : "Save"}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Homepage;
