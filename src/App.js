import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Characters from './Pages/Characters';
import CharacterDetails from './Pages/CharacterDetails';
import HouseDetails from './Pages/HouseDetails';

function App() {

  return (
    <div className="App">
      <div><h1 id="welcome">HARRY POTTER LIBRARY</h1></div>
      <Routes>
        <Route path="/house/:houseId" element={<HouseDetails />}/>
        <Route path="/character/:characterId" element={<CharacterDetails />}/>
        <Route exact path="/" element={<Characters />}/>
      </Routes>
      <br></br>
    </div>
  );
}

export default App;