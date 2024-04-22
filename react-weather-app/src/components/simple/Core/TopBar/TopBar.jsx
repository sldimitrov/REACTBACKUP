import Logo from "./Logo";
import Form from "./Form";
import HistoryButton from "./HistoryButton";
import SearchButton from "./SearchButton";

export default function TopBar() {
  return (
    <div id="top-bar-container">
      <Logo />
      <div id="menu-container">
        <Form />
        <HistoryButton />
        <SearchButton />
      </div>
    </div>
  );
}
