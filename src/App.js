import React, { useState, useEffect } from "react";
import "./style.css";
import Timer from "react-compound-timer";
import Countdown from "react-countdown";

export default function App() {
  let [breakLength, setbreakLength] = useState(5);
  let [sessionLength, setsessionLength] = useState(25);
  let [miliSec, setmilisec] = useState(sessionLength * 60 * 1000);
  const [date, setDate] = useState(Date.now() + miliSec);

  const breakIncrement = () => setbreakLength(breakLength + 1);

  const breakDecrement = () =>
    breakLength > 1 ? setbreakLength(breakLength - 1) : breakLength;

  const sessionIncrement = () => setsessionLength(sessionLength + 1);

  const sessionDecrement = () =>
    sessionLength > 1 ? setsessionLength(sessionLength - 1) : sessionLength;


  const reset = () => {
    setDate(Date.now() + miliSec);
    setbreakLength(5);
    setsessionLength(25);
  };

  const renderer = ({ api, formatted }) => {
    const { minutes, seconds } = formatted;
    const completed = api.isCompleted();
    return (
      <div>
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
          {minutes}:{seconds}{" "}
        </div>
        <button id="start_stop" onClick={api.start}>
          Start
        </button>
        <button
          id="reset"
          onClick={() => {
            reset();
            api.stop();
          }}
        >
          Reset
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <Countdown autoStart={false} date={date} renderer={renderer} />
    </div>
  );
}
