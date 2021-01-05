import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  let [breakLength, setbreakLength] = useState(5);
  let [sessionLength, setsessionLength] = useState(25);
  let [sec, setSec] = useState(0);
  let [mins, setMins] = useState(sessionLength);
  let [miliSec, setmilisec] = useState(sessionLength * 60 * 1000);

  const breakIncrement = () => setbreakLength(breakLength + 1);

  const breakDecrement = () =>
    breakLength > 1 ? setbreakLength(breakLength - 1) : breakLength;

  const sessionIncrement = () => {
    setsessionLength(sessionLength + 1);
    setMins(sessionLength + 1);
  };

  const sessionDecrement = () =>
    sessionLength > 1 ? setsessionLength(sessionLength - 1) : sessionLength;

  const reset = () => {
    setbreakLength(5);
    setsessionLength(25);
    setMins(25);
  };

  // useEffect(() => {
  // const intervalId = setInterval(startStop, 1000);
  // return () => clearInterval(intervalId);
  // }, []);

  const startStop = () => {
    const innerFunc = () => {
      let timeleft = miliSec % 60;
      miliSec--;
      timeleft === 59 ? setMins(prevstate => prevstate - 1) : timeleft;
      setSec(timeleft);
    };
    const intervalId = setInterval(innerFunc, 1000);
    return () => clearInterval(intervalId);
  };
  console.log(miliSec);

  return (
    <div className="App">
      <div id="break-label"> Break length </div>
      <button
        onClick={breakIncrement}
        className="arrow-btn"
        id="break-increment"
      >
        &#8593;
      </button>
      <p id="break-length"> {breakLength} </p>
      <button
        onClick={breakDecrement}
        className="arrow-btn"
        id="break-decrement"
      >
        &#8595;
      </button>
      <br />
      <div id="session-label"> Session length </div>
      <button
        onClick={sessionIncrement}
        className="arrow-btn"
        id="session-increment"
      >
        &#8593;
      </button>
      <div id="session-length"> {sessionLength} </div>
      <button
        onClick={sessionDecrement}
        className="arrow-btn"
        id="session-decrement"
      >
        &#8595;
      </button>
      <div id="timer-label"> session </div>
      <div id="time-left">
        {" "}
        {mins}:{sec < 10 ? "0" + sec : sec}{" "}
      </div>
      <button onClick={startStop} id="start_stop">
        Start
      </button>
      <button onClick={reset} id="reset">
        Reset
      </button>
    </div>
  );
}
