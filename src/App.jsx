import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Productos from "./pages/Productos"
import FAQ from "./pages/FAQ"
import Medios from "./pages/Medios"
import Galeria from "./pages/Galeria"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/preguntas" element={<FAQ />} />
        <Route path="/medios" element={<Medios />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App