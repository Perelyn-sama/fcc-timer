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
  console.log(<Timer.Seconds />);
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
      <Timer
        initialTime={miliSec}
        direction="backward"
        startImmediately={false}
      >
        {({ start, resume, pause, stop, reset }) => (
          <React.Fragment>
            <div id="time-left">
              <Timer.Minutes />:
              <Timer.Seconds
                formatValue={text =>
                  text.toString().length > 1 ? text : "0" + text
                }
              />
            </div>
            <div id="start_stop">
              <button id="reset" onClick={start}>
                Start
              </button>
              <button id="reset" onClick={pause}>
                Pause
              </button>
              <button id="reset" onClick={resume}>
                Resume
              </button>
              <button id="reset" onClick={stop}>
                Stop
              </button>
              <button
                id="reset"
                onClick={() => {
                  reset();
                  stop();
                }}
              >
                Reset
              </button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </div>
  );
}
