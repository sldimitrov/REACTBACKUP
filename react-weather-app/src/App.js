import { useState } from 'react';

import Core from "./components/simple/Core";
import Parent from "./components/simple/Parent";
import RightSide from "./components/simple/RightSide";
import SlideBar from "./components/simple/SlideBar";
import "./index.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClickHistory() {
    setIsClicked((curButton) => !isClicked)
  }

  return (
    <Parent>
      <Core />
      <RightSide />
      {isClicked && <SlideBar />}
    </Parent>
  );
}

export default App;
