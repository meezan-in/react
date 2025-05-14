import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function LightSwitch() {
  const [isOn, setIsOn] = useState(false); // light is initially OFF

  const toggleLight = () => {
    setIsOn((prev) => !prev); // switch the light on/off
  };

  return (
    <div>
      <p>The light is {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggleLight}>{isOn ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
}

export default LightSwitch;
