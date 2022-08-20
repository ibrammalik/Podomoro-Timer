import { useEffect, useState } from "react";

const ExtendedBreakTimer = () => {
  let defaultRemainingTime = 1500000;
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [active, setActive] = useState(false);

  const timer = () => {
    setRemainingTime((prevCount) => prevCount - 1000);
  };

  const toggleActive = () => {
    if (active) {
      setActive(false);
      document.getElementById("mainButtonExtended").innerHTML = "START!";
    } else {
      setActive(true);
      document.getElementById("mainButtonExtended").innerHTML = "STOP!";
    }
  };

  const resetTimer = () => {
    if (active) {
      document.getElementById("mainButtonExtended").click();
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
      <h3>Focus Time</h3>
      <p>
        {minutes()} : {seconds()}
      </p>
      <button onClick={toggleActive} id="mainButtonExtended">
        START!
      </button>
      <button onClick={resetTimer} id="resetButtonExtended">
        RESET!
      </button>
    </div>
  );
};

export default ExtendedBreakTimer;
