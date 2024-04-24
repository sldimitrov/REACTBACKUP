import { useState } from "react";
import historyImg from "../../../../images/history.png";

export default function HistoryButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button id="history-button">
      <img
        src={historyImg}
        id="h-image"
        onClick={() => {
          console.log(1);
        }}
      />
    </button>
  );
}
