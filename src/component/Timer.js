import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Alarm from "../asset/sounds/Alarm.mp3";

const Timer = (props) => {
  const { podomorotime, breaktime, longbreaktime } = props;
  let podomoroTime = Number(podomorotime) * 60000;
  let defaultBreakTime = Number(breaktime) * 60000;
  let defaultLongBreakTime = Number(longbreaktime) * 60000;
  const [remainingTime, setRemainingTime] = useState(podomoroTime);
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
      setRemainingTime(podomoroTime);
    } else {
      setRemainingTime(podomoroTime);
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

  useEffect(() => {
    setRemainingTime(podomoroTime);
  }, [podomoroTime]);

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

  const setPodomoro = () => setRemainingTime(podomoroTime);

  const setBreak = () => setRemainingTime(defaultBreakTime);

  const setLongBreak = () => setRemainingTime(defaultLongBreakTime);

  return (
    <div id="timer">
      <div className="mt-3 mb-5">
        <Button onClick={setPodomoro} className="mx-2">
          Podomoro
        </Button>
        <Button onClick={setBreak} className="mx-2">
          Break
        </Button>
        <Button onClick={setLongBreak} className="mx-2">
          Long Break
        </Button>
      </div>
      <h1 className="my-5">
        {minutes()} : {seconds()}
      </h1>
      <Button onClick={toggleActive} id="mainButton" className="mx-2">
        START!
      </Button>
      <Button onClick={resetTimer} id="resetButton" className="mx-2">
        <i class="bi bi-arrow-counterclockwise"></i>
      </Button>
      <audio src={Alarm} controls className="Non-active" id="audioAlarm" />
    </div>
  );
};

export default Timer;
