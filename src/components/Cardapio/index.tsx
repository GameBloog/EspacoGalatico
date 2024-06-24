import { Carousel, ImageData } from "../slideImg"
import {
  ImageWithTextContainerSlide,
  ImageWithTextSlides,
  TextStyle,
} from "./styles"

interface Props {
  images: ImageData[]
}

export function Cardapio({ images }: Props) {
  return (
    <ImageWithTextContainerSlide>
      <ImageWithTextSlides>
        <Carousel images={images} />
        <TextStyle>
          <h3>Cardápio Variado</h3>
          <p>
            Venha conhecer a grande variedade de comidinhas deliciosas que estão
            inclusas dentro dos nossos menus, são eles:
            <br />
            <br />
            <strong>Marte</strong> nosso menu tradicionalíssimo de
            <strong> Massa</strong>.
            <br />
            <br />
            <strong>Saturno</strong> nosso menu reforçado de{" "}
            <strong>Strogonoff</strong> de frango.
            <br />
            <br />
            <strong>Terra</strong> nosso menu queridinho e especial de{" "}
            <strong>Feijoada</strong>.
            <br />
            <br />
            Acompanhados das entradinhas, salgados fritos na hora, saladinha e é
            claro nossa grande variedade de bolos deliciosos e docinhos. As
            bebidas não alcoólicas também ficam por nossa conta, refrigerantes
            1ª linha, sucos e água.
            <br />
            Tudo isso incluso e a vontade na sua festa, para deixar todos os
            seus convidados felizes.
          </p>
        </TextStyle>
        <div>
          <button>
            <strong>Acesse nosso cardápio</strong>
          </button>
        </div>
      </ImageWithTextSlides>
    </ImageWithTextContainerSlide>
  )
}
