import React from "react"
import { TitleText,DescriptionText, } from "./styles"

interface SlideWithTextProps {
  image: string
  title: string
  description: string
}

export const SlideWithText: React.FC<SlideWithTextProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: "100%" }} />
      <div>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </div>
    </div>
  )
}
