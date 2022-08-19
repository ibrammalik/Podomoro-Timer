import { useEffect, useState } from "react";

const Timer = () => {
  let defaultRemainingTime = 1500000;
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
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
      setRemainingTime(defaultRemainingTime);
    } else {
      setRemainingTime(defaultRemainingTime);
    }
  };

  useEffect(() => {
    if (active) {
      const intervalTimer = setInterval(() => {
        timer();
      }, 1000);
      return () => clearTimeout(intervalTimer);
    } else return;
  }, [active]);

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

  return (
    <div>
      <p>
        {minutes()} : {seconds()}
      </p>
      <button onClick={toggleActive} id="mainButton">
        START!
      </button>
      <button onClick={resetTimer} id="resetButton">
        RESET!
      </button>
    </div>
  );
};

export default Timer;
