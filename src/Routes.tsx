import { Routes, Route } from "react-router-dom"
import { Home } from "./paginas/index.tsx"

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Rotas
