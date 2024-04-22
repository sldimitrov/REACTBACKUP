import Logo from './components/simple/Logo';
import Core from './components/simple/Core';
import Parent from './components/simple/Parent';
import RightSide from './components/simple/RightSide';

function App() {
  return (
    <div className='container'>
      <div id="top-bar-container">
          <Logo />
          <section class="search-bar-container blank-line" />
          <input
            type="text"
            placeholder="Search Location..."
            spellcheck="false"
            id="search-text"
            maxlength="16"
          />
          <button id="history-button">
            <img src="images/history.png" id="history-img" />
          </button>
          <button id="search-button">
            <img src="images/search.png" id="searcher-img" />
          </button>
          <section />
        </div>
      <Parent>
        <Core /> 
        <RightSide />
      </Parent>
    </div>
  );
}

export default App;
