import { SingleWord } from "./styles"

interface Props {
  text: string
}

export function SingleWords({ text }: Props) {
  return (
    <SingleWord>
      <h3>{text}</h3>
    </SingleWord>
  )
}
