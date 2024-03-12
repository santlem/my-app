import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={handleClick}>Haz click aquí!</Button>
        {clicked && <d>Te quiero mucho preciosa!❤️</d>}
      </header>
    </div>
  );
}

export default App;
