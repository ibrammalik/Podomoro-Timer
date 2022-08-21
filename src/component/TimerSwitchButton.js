import { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const TimerSwitchButton = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Podomoro", value: "1" },
    { name: "Break", value: "2" },
    { name: "Long Break", value: "3" },
  ];

  useEffect(() => {
    if (radioValue === "1") {
      console.log("2");
    } else if (radioValue === "2") {
      document.getElementById("timer").style.display = "none";
      document.getElementById("longBreak").style.display = "none";
      document.getElementById("break").style.display = "block";
    } else if (radioValue === "3") {
      console.log("3");
    }
  }, [radioValue]);

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={"outline-primary"}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => {
            setRadioValue(e.currentTarget.value);
          }}
          className="px-5 my-5"
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default TimerSwitchButton;
