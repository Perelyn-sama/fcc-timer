import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [breakLength, setbreakLength] = useState(5);
  const [sessionLength, setsessionLength] = useState(25);

  const startingMinutes = sessionLength;
  let time = startingMinutes * 60;

  const countdownEl = document.getElementById("countdown");

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

    // countdownEl.innerHTML = `${minutes} ${seconds}`;
    time--;
  }
  console.log(countdownEl);

  return (
    <div className="App">
      <div id="break-label"> Break label </div>
      <div id="session-label"> Session label </div>
      <button id="break-decrement">&#8595;</button>
      <button id="session-decrement">&#8595;</button>
      <button id="break-decrement">&#8593;</button>
      <button id="session-decrement">&#8593;</button>
      <div id="break-length"> {breakLength} </div>
      <div id="session-length"> {sessionLength} </div>
      <div id="timer-label"> session </div>
      <div id="countdown"> countdown </div>
    </div>
  );
}
