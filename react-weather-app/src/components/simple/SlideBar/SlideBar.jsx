import exitButton from "../../images/button.png";

export default function SlideBar() {
  return (
    <aside class="aside">
      <div class="sidebar-container">
        <div class="sidebar-nav">
          <h2 id="sidebar-heading">Searching History</h2>
          <button id="exit-button">
            <img src={exitButton} alt="exit button" id="exit-img" />
          </button>
        </div>
        <section class="history-container">
          <div class="browsed-city" id="example"></div>
        </section>
      </div>
    </aside>
  );
}
