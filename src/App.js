import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/hooks';

function App() {
  useEffect(()=>{
    tg.ready()
  })
  const {tg,onToggle} = useTelegram()
  return (
    <div className="App">
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}

export default App;
