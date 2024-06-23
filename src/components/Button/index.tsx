import { Buttons } from "./styles"

interface ButtonProps {
  buttonText: string
  onClick: () => void
}

export function Button({ buttonText, onClick }: ButtonProps) {
  return <Buttons onClick={onClick}>{buttonText}</Buttons>
}
