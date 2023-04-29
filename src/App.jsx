import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokeInfo from "./pages/PokeInfo";
import Footer from "./components/Footer";
import PokeFilter from "./pages/PokeFilter";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home setIsLogged={setIsLogged} />} />
        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokeInfo />} />
          <Route path="/pokefilter/:type" element={<PokeFilter />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
