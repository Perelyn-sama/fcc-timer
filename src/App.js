import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  let [breakLength, setbreakLength] = useState(5);
  let [sessionLength, setsessionLength] = useState(25);

  const startStop = () => {
    setInterval(updateCountdown, 1000);
  };

  // const startingMinutes = sessionLength;
  // let time = startingMinutes * 60;

  const timeLeft = document.getElementById("time-left");
  useEffect(() => {
    console.log(timeLeft);
  });

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    // timeLeft.innerHTML = `${minutes} ${seconds}`;
    console.log(`${minutes} ${seconds}`);
    time--;
  }
  console.log(timeLeft == null ? timeLeft : timeLeft.innerHTML.split(":")[0]);

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
      <button onClick={startStop} id="start_stop">
        {" "}
        Start / Stop{" "}
      </button>
      <button onClick={reset} id="reset">
        {" "}
        reset{" "}
      </button>
    </div>
  );
}
