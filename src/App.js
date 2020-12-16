import React, { useState, useEffect } from "react";
import "./style.css";
import Timer from "react-compound-timer";

export default function App() {
  let [breakLength, setbreakLength] = useState(5);
  let [sessionLength, setsessionLength] = useState(25);
  let [miliSec, setmilisec] = useState(sessionLength * 60 * 1000);

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
      <button  id="start_stop">
        {" "}
        Start / Stop{" "}
      </button>
      <button onClick={reset} id="reset">
        {" "}
        reset{" "}
      </button>

      <Timer initialTime={miliSec} direction="backward" startImmediately={false}>
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <Timer.Days /> days
            <br />
            <Timer.Hours /> hours
            <br />
            <Timer.Minutes /> minutes
            <br />
            <Timer.Seconds /> seconds
            <br />
            <Timer.Milliseconds /> milliseconds
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
