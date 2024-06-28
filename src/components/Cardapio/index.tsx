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
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1enm9ok5ZFiAQSYCG_mFhVuJDMw-JL5lB/view?usp=sharing",
      "_blank"
    )
  }

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
          </p>
        </TextStyle>
        <div>
          <button onClick={handleClick}>
            <strong>Acesse nosso cardápio</strong>
          </button>
        </div>
      </ImageWithTextSlides>
    </ImageWithTextContainerSlide>
  )
}
