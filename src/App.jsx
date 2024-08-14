import "./App.css";
import { CartProvider } from "./Contexts/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Snacks from "./Pages/Snacks";
import Bebidas from "./Pages/Bebidas";
import Shots from "./Pages/Shots";
import Carrito from "./Pages/Carrito";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shots" element={<Shots />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
