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

import espacoFestas from "../assets/imagens/espaço-de-festas.jpg"

import avaliacao1 from "../assets/imagens/clientOpnion/Imagem1.png"
import avaliacao2 from "../assets/imagens/clientOpnion/Imagem2.png"
import avaliacao3 from "../assets/imagens/clientOpnion/Imagem3.png"
import avaliacao4 from "../assets/imagens/clientOpnion/Imagem4.png"
import avaliacao5 from "../assets/imagens/clientOpnion/Imagem5.png"

import mesaDeJogos from "../assets/imagens/games/Mesas-de-jogos.jpg"
import pacotesEspeciais from "../assets/games/imagens/pacotes-especiais.jpg"
import brinquedos from "../assets/imagens/games/Brinquedos.jpg"
import brinquedos2 from "../assets/imagens/games/Brinquedos2.jpg"
import brinquedos3 from "../assets/imagens/games/Brinquedos3.jpg"
import brinquedos4 from "../assets/imagens/games/Brinquedos4.jpg"

//Aguardar novas imgens
import mesasRefeitorio from "../assets/imagens/Cardapio/visao-ampla.jpg"
import camarinCardapio from "../assets/imagens/Cardapio/Camarin.jpg"
import espacoCardapio from "../assets/imagens/Cardapio/Espaco2.jpg"

import camarin from "../assets/imagens/espaco/Camarin.jpg"
import espaco2 from "../assets/imagens/espaco/Espaco2.jpg"
import espacoDeFestas from "../assets/imagens/espaco/espaço-de-festas.jpg"
import visaoAmpla from "../assets/imagens/espaco/visao-ampla.jpg"

import decoracao from "../assets/imagens/decoration/Decoracao.jpg"
import fachada from "../assets/imagens/decoration/fachada.jpg"
import mesas from "../assets/imagens/decoration/Mesas-refeitorio.jpg"

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

const games = [
  { id: "1", image: mesaDeJogos },
  { id: "2", image: pacotesEspeciais },
  { id: "3", image: brinquedos },
  { id: "4", image: brinquedos2 },
  { id: "5", image: brinquedos3 },
  { id: "6", image: brinquedos4 },
]

const cardapio = [
  { id: "1", image: mesasRefeitorio },
  { id: "2", image: camarinCardapio },
  { id: "3", image: espacoCardapio },
]

const espaco = [
  { id: "1", image: camarin },
  { id: "2", image: espaco2 },
  { id: "3", image: espacoDeFestas },
  { id: "4", image: visaoAmpla },
]

const decoration = [
  { id: "1", image: decoracao },
  { id: "2", image: fachada },
  { id: "3", image: mesas },
]

const clientOpnion = [
  { id: "1", image: avaliacao1 },
  { id: "2", image: avaliacao2 },
  { id: "3", image: avaliacao3 },
  { id: "4", image: avaliacao4 },
  { id: "5", image: avaliacao5 },
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
            images={games}
          />

          <Cardapio images={cardapio} />

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
            images={espaco}
          />

          <ImageWithTextSlide
            description=" Contamos com um espaço determinado para a montagem da
                  decoração, temos inúmeros temas disponíveis e a montagem da
                  decoração está inclusa em seu pacote. Na hora dos parabéns
                  fazemos uma entrada muito especial com música, iluminação e
                  máquina de fumaça."
            title="Decorações"
            images={decoration}
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

          <ClientsOpnion images={clientOpnion} />
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
