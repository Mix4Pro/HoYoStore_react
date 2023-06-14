import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/hooks';
import Header from './components/Header/Header';
import Items from './components/Items/Items';

function App() {
  useEffect(()=>{
    tg.ready()
  })
  const {tg,onToggle} = useTelegram()
  return (
    <div className="App">
      <Header />
      <button onClick={onToggle}>Toggle</button>
      <Items />
    </div>
  );
}

export default App;
