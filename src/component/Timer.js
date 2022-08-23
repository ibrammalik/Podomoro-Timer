import { useEffect, useState } from "react";
import Alarm from "../asset/sounds/Alarm.mp3";

const Timer = () => {
  let defaultPodomoroTime = 1500000;
  let defaultBreakTime = 300000;
  let defaultLongBreakTime = 900000;
  const [remainingTime, setRemainingTime] = useState(defaultPodomoroTime);
  const [active, setActive] = useState(false);

  const timer = () => {
    setRemainingTime((prevCount) => prevCount - 1000);
  };

  const toggleActive = () => {
    if (active) {
      setActive(false);
      document.getElementById("mainButton").innerHTML = "START!";
    } else {
      setActive(true);
      document.getElementById("mainButton").innerHTML = "STOP!";
    }
  };

  const resetTimer = () => {
    if (active) {
      document.getElementById("mainButton").click();
      setRemainingTime(defaultPodomoroTime);
    } else {
      setRemainingTime(defaultPodomoroTime);
    }
    document.getElementById("audioAlarm").pause();
    document.getElementById("audioAlarm").currentTime = 0;
  };

  useEffect(() => {
    if (active) {
      const intervalTimer = setInterval(() => {
        timer();
      }, 1000);
      return () => clearTimeout(intervalTimer);
    } else return;
  }, [active]);

  useEffect(() => {
    if (remainingTime === 0) {
      document.getElementById("mainButton").click();
      document.getElementById("audioAlarm").play();
    } else if (remainingTime < 1000) setRemainingTime(0);
  }, [remainingTime]);

  let minutes = () => {
    if (Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)) < 10) {
      return `0${Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))}`;
    } else {
      return Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    }
  };
  let seconds = () => {
    if (Math.floor((remainingTime % (1000 * 60)) / 1000) < 10) {
      return `0${Math.floor((remainingTime % (1000 * 60)) / 1000)}`;
    } else {
      return Math.floor((remainingTime % (1000 * 60)) / 1000);
    }
  };

  const setPodomoro = () => setRemainingTime(defaultPodomoroTime);

  const setBreak = () => setRemainingTime(defaultBreakTime);

  const setLongBreak = () => setRemainingTime(defaultLongBreakTime);

  return (
    <div id="timer">
      <div>
        <button onClick={setPodomoro}>Podomoro</button>
        <button onClick={setBreak}>Break</button>
        <button onClick={setLongBreak}>Long Break</button>
      </div>
      <h3>Focus Time</h3>
      <p>
        {minutes()} : {seconds()}
      </p>
      <button onClick={toggleActive} id="mainButton">
        START!
      </button>
      <button onClick={resetTimer} id="resetButton">
        RESET!
      </button>
      <audio src={Alarm} controls className="Non-active" id="audioAlarm" />
    </div>
  );
};

export default Timer;
