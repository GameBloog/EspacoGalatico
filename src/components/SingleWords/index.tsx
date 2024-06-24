import { SingleWord } from "./styles"

interface Props {
  text: string
}

export function SingleWords({ text }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SingleWord>
        <h3>{text}</h3>
      </SingleWord>
    </div>
  )
}
