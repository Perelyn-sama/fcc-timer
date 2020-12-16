import React, { useState, useEffect } from "react";
import "./style.css";
import Timer from "react-compound-timer";

export default function App() {
  let [breakLength, setbreakLength] = useState(5);
  let [sessionLength, setsessionLength] = useState(25);
  let [min, setMin] = useState(sessionLength);
  let [sec, setSec] = useState(0);
  let [time, setTime] = useState(min * 60);

  const startStop = () => {
    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer);
  };

  const countdown = () => {
    if (time >= 0) {
      sec = time % 60;
      time--;
      console.log(sec);
      return sec;
    }
  };

  const breakIncrement = () => setbreakLength(breakLength + 1);

  const breakDecrement = () =>
    breakLength > 1 ? setbreakLength(breakLength - 1) : breakLength;

  const sessionIncrement = () => setsessionLength(sessionLength + 1);

  const sessionDecrement = () =>
    sessionLength > 1 ? setsessionLength(sessionLength - 1) : sessionLength;

  const reset = () => {
    setbreakLength(5);
    setsessionLength(25);
  };

  return (
    <div className="App">
      <div> {countdown()} </div>
      <div> {sec} </div>
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
      <div id="time-left"> {sessionLength}:00 </div>
      <button onClick={startStop} id="start_stop">
        {" "}
        Start / Stop{" "}
      </button>
      <button onClick={reset} id="reset">
        {" "}
        reset{" "}
      </button>
      
      <Timer initialTime={55000}>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <div>
              <Timer.Days /> days
              <Timer.Hours /> hours
              <Timer.Minutes /> minutes
              <Timer.Seconds /> seconds
              <Timer.Milliseconds /> milliseconds
            </div>
            <div>{timerState}</div>
            <br />
            <div>
              <button onClick={start}>Start</button>
              <button onClick={pause}>Pause</button>
              <button onClick={resume}>Resume</button>
              <button onClick={stop}>Stop</button>
              <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}
