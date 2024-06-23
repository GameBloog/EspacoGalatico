import { Button } from "./styles"
import whatsappcanto from "../../assets/imagens/apps/wppdecantoV2.png"

export function ButtonFixed() {
  return (
    <Button
      href="https://wa.me/5511960767865/?text=urlencodedtex"
      target="_blank"
    >
      <img src={whatsappcanto} alt="Botão para whatsapp" />
    </Button>
  )
}
