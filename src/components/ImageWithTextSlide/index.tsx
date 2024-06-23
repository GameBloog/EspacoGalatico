import { Carousel, ImageData } from "../slideImg"
import {
  ImageWithTextContainerSlide,
  ImageWithTextSlides,
  TextStyle,
} from "./styles"

interface Props {
  title: string
  description: string
  images: ImageData[]
}

export function ImageWithTextSlide({ title, description, images }: Props) {
  return (
    <ImageWithTextContainerSlide>
      <ImageWithTextSlides>
        <Carousel images={images} />
        <TextStyle>
          <h3>{title}</h3>

          <p>{description}</p>
        </TextStyle>
      </ImageWithTextSlides>
    </ImageWithTextContainerSlide>
  )
}
