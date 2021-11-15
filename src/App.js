import EffectComponent from './Effect';
import './App.css';
import ContextComponent from './Context';
import RefComponent from './Ref';
import ReducerComponent from './Reducer';
import MemoComponent from './Memo';

function App() {
  return (
    <div className="App">
      <EffectComponent />
      <ContextComponent />
      <RefComponent />
      <ReducerComponent />
      <MemoComponent />
    </div>
  );
}

export default App;
