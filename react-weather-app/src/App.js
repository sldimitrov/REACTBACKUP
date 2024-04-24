import Core from './components/simple/Core';
import Parent from './components/simple/Parent';
import RightSide from './components/simple/RightSide';
import './index.css'

function App() {
  return (
    <Parent>
      <Core /> 
      <RightSide />
      {isTrue && <LeftSide />}  
    </Parent>
  );
}

export default App;
