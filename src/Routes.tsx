import { Routes, Route } from "react-router-dom"
import Home from "./paginas/Home"

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Rotas
