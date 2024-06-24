import { RoudendImg, WhatIs } from "./styles"
import logo from "../../assets/imagens/logo.jpg"

export function Header() {
  return (
    <>
      <WhatIs>
        <h3>Buffet infantil Temático em Osasco</h3>
        <h1>Espaço Galático</h1>
        <h1>Onde a Magia Acontece!</h1>

        <h3>Aqui no Buffet, transformamos sonhos em festas inesquecíveis!</h3>
        <h3>Click abaixo e venha nos conhecer e fazer um orçamento.</h3>
      </WhatIs>

      <RoudendImg>
        <div>
          <img src={logo} alt="logo da empresa" />
        </div>
      </RoudendImg>
    </>
  )
}
