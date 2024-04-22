import Core from './components/simple/Core';
import Parent from './components/simple/Parent';
import RightSide from './components/simple/RightSide';

function App() {
  return (
    <div className='container'>
      <h1>TEST RENDER</h1>
      <Parent>
        
        <Core /> 
      </Parent>
    </div>
  );
}

export default App;
