import { Carousel, ImageData } from "../slideImg"
import { Reserve } from "./styles"

interface Props {
  images: ImageData[]
}

export function ClientsOpnion({ images }: Props) {
  return (
    <Reserve>
      <h3>Oque os nossos clientes dizem ..</h3>

      <Carousel images={images} />
    </Reserve>
  )
}
