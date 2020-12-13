import React, { useState } from "react";
import "./style.css";

export default function App() {
  let [breakLength, setbreakLength] = useState(5);
  let [sessionLength, setsessionLength] = useState(25);

  const startingMinutes = sessionLength;
  let time = startingMinutes * 60;

  const timeLeft = document.getElementById("time-left");

  if (breakLength === 5) {
    setInterval(updateCountdown, 1000);
  } else if (breakLength === 4) {
    setInterval(updateCountdown, 800);
  } else if (breakLength === 3) {
    setInterval(updateCountdown, 600);
  } else if (breakLength === 2) {
    setInterval(updateCountdown, 400);
  } else if (breakLength === 1) {
    setInterval(updateCountdown, 200);
  } else {
    null;
  }

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    // timeLeft.innerHTML = `${minutes} ${seconds}`;
    time--;
  }
  console.log(timeLeft);

  const breakIncrement = () =>
    breakLength < 5 ? setbreakLength(breakLength + 1) : breakLength;

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
      <div id="break-label"> Break label </div>
      <button
        onClick={breakIncrement}
        className="arrow-btn"
        id="break-increment"
      >
        &#8593;
      </button>
      <div id="break-length"> {breakLength} </div>
      <button
        onClick={breakDecrement}
        className="arrow-btn"
        id="break-decrement"
      >
        &#8595;
      </button>
      <br />
      <div id="session-label"> Session label </div>
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
      <button id="start-stop"> Start / Stop </button>
      <button onClick={reset} id="reset">
        {" "}
        reset{" "}
      </button>
    </div>
  );
}
