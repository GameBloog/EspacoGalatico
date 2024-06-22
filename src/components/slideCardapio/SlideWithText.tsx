import React from "react"

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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
