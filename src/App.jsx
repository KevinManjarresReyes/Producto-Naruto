
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Plantilla from './plantillas/Plantilla'
import Inicio from './views/Inicio'
import Detalles from './views/Detalles'
import axios from 'axios';
import { useState, useEffect } from 'react'
import AcercaDe from './views/AcercaDe'
function App() {
  const [characters, setCharacters] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const url = 'https://dattebayo-api.onrender.com/characters';

  async function fetchCharacters() {
    const response = await axios.get(url);
    setCharacters(response.data.characters);

    if (!fetchCompleted) {
      console.log("Fetch Realizado");
      setFetchCompleted(true);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <BrowserRouter>

      <Routes >

        <Route
          element={<Plantilla></Plantilla>}
        >
          <Route path='/' element={<Inicio characters={characters}></Inicio>}></Route>
          <Route path='/acerca' element={<AcercaDe></AcercaDe>}></Route>
          <Route path='/detalles/:id' element={<Detalles></Detalles>}></Route>
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
