import {
  Container,
  Section,
  MobileHomePage,
  DesktopHomePage,
  DesktopImageText,
  MidleDiv,
  SectionImg,
  EspacoFestas,
  ImgEspacofestas,
} from "./styles.ts"

import mesaDeJogos from "../assets/imagens/Mesas-de-jogos.jpg"
import mesaRefeitorio from "../assets/imagens/Mesas-refeitorio.jpg"
import espacoPrivativo from "../assets/imagens/Espaços-privativos.jpg"
import pacotesEspeciais from "../assets/imagens/pacotes-especiais.jpg"
import espacoFestas from "../assets/imagens/espaço-de-festas.jpg"

import { CarouselwithText } from "../components/slideCardapio/index.tsx"
import { Header } from "../components/Header/index.tsx"
import { Button } from "../components/Button/index.tsx"
import { ImgLogos } from "../components/LogoImgs/index.tsx"
import { ImageWithTextSlide } from "../components/ImageWithTextSlide/index.tsx"
import { Cardapio } from "../components/Cardapio/index.tsx"
import { SingleWords } from "../components/SingleWords/index.tsx"
import { ClientsOpnion } from "../components/clientsOpnions/index.tsx"
import { LastPage } from "../components/LastPage/index.tsx"
import { ButtonFixed } from "../components/ButtonFixed/index.tsx"
import { EndPage } from "../components/Footer/styles.ts"

const images = [
  { id: "1", image: mesaDeJogos },
  { id: "2", image: mesaRefeitorio },
  { id: "3", image: espacoPrivativo },
  { id: "4", image: pacotesEspeciais },
]

export function Home() {
  const handleClickButtonOrcamento = () =>
    window.open("https://wa.me/5511960767865/?text=urlencodedtex", "_blank")

  const handleRedirectionClick = () => {
    const element = document.getElementById("socialMediaSection")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Container>
      <main>
        <Section>
          <MobileHomePage>
            <DesktopHomePage>
              <Header />
            </DesktopHomePage>
            <Button
              buttonText="Fale conosco e peça seu orçamento"
              onClick={handleClickButtonOrcamento}
            />
            <ImgLogos />
          </MobileHomePage>
        </Section>

        <DesktopImageText>
          <ImageWithTextSlide
            description="Contamos com uma vasta seleção de brinquedos, incluindo
                  labamba, brinquedão com enorme piscina de bolinhas, cama
                  elástica, multijogos, tombo legal, air game, space game e
                  muito mais. Além disso, nossas recreadoras promovem jogos e
                  atividades interativas e criativas para manter a criançada
                  sempre entretida."
            title="Brinquedos e Atividades"
            images={images}
          />
          <ImageWithTextSlide
            description="Contamos com uma vasta seleção de brinquedos, incluindo
                  labamba, brinquedão com enorme piscina de bolinhas, cama
                  elástica, multijogos, tombo legal, air game, space game e
                  muito mais. Além disso, nossas recreadoras promovem jogos e
                  atividades interativas e criativas para manter a criançada
                  sempre entretida."
            title="Brinquedos e Atividades"
            images={images}
          />

          <Cardapio images={images} />

          <SingleWords text=" Temos opções para diferentes tamanhos de festas e orçamentos." />

          <CarouselwithText />

          <ImageWithTextSlide
            description=" Espaço totalmente temático, ótimo para tirar aquelas fotos
                  incríveis para as redes socias, comporta até 70 pessoas.
                  Contamos com uma equipe completa, motivada e treinada, além da
                  estrutura com ar condicionados, muitos brinquedos,
                  proporcionando todo conforto e organização necessárias para
                  que sua festa seja incrível."
            title="Espaço"
            images={images}
          />

          <ImageWithTextSlide
            description=" Contamos com um espaço determinado para a montagem da
                  decoração, temos inúmeros temas disponíveis e a montagem da
                  decoração está inclusa em seu pacote. Na hora dos parabéns
                  fazemos uma entrada muito especial com música, iluminação e
                  máquina de fumaça."
            title="Decorações"
            images={images}
          />

          <SingleWords text="Confira nossos pacotes e garanta sua festa completa." />
          <h3>Confira nossos pacotes e garanta sua festa completa.</h3>
        </DesktopImageText>

        <MidleDiv>
          <SectionImg>
            <EspacoFestas>
              <h3>Agende sua visita e conheça o nosso espaço!</h3>
              <Button
                buttonText="Veja nossas redes!"
                onClick={handleRedirectionClick}
              />
            </EspacoFestas>
          </SectionImg>

          <ImgEspacofestas>
            <img src={espacoFestas} alt="" />
          </ImgEspacofestas>

          <ClientsOpnion images={images} />
        </MidleDiv>

        <Section>
          <LastPage />
        </Section>

        <ButtonFixed />
      </main>

      <EndPage />
    </Container>
  )
}
