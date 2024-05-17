import React, { useState } from "react";
import "./Styles.css";

const AddTimer = ({ createTimer }) => {
  const [sec, setSec] = useState("");

  const addTimer = () => {
    createTimer(sec);
    setSec("");
  };

  return (
    <div className="inputContainer">
      <label htmlFor="#timer">Add Timer</label>
      <input
        type="number"
        id="timer"
        onChange={(e) => setSec(e.target.value)}
      />
      <button className="btn" onClick={addTimer}>
        Add
      </button>
    </div>
  );
};

export default AddTimer;
