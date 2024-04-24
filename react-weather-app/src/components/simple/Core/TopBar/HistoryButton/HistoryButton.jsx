import historyImg from "../../../../images/history.png";

export default function HistoryButton() {
  return (
    <button id="history-button">
      <img src={historyImg} id="h-image" onClick={console.log(1)} />
    </button>
  );
}
