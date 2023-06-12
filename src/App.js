import './App.css';
import useEffect from "react-dom"

const tg = window.Telegram.WebApp;

function App() {

  const onClose = () =>{
    tg.close()
  }
  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
