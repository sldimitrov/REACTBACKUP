import historyImg from "./history.png";

export default function HistoryButton() {
  return (
    <button id="history-button">
      <img src={historyImg} id="h-image" />
    </button>
  );
}
