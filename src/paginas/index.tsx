import {
  Section,
  MobileHomePage,
  DesktopHomePage,
  Button,
  WhatIs,
  Container,
  Img,
  ImgLogos,
  RoudendImg,
  ImageWithText,
  DesktopImageText,
  ImgEspacofestas,
  SectionImg,
  EspacoFestas,
  ImageWithTextContainer,
  Reserve,
  MobileLastPage,
  DesktopLastPage,
  Footer,
  MidleDiv,
  ButtonImg,
  ButtonImgDiv,
  JustForStyle,
  WhatIsLastPage,
  BotaoFixo,
} from "./styles.ts"

import mesaDeJogos from "../assets/imagens/Mesas-de-jogos.jpg"
import mesaRefeitorio from "../assets/imagens/Mesas-refeitorio.jpg"
import espacoPrivativo from "../assets/imagens/Espaços-privativos.jpg"
import pacotesEspeciais from "../assets/imagens/pacotes-especiais.jpg"
import espacoFestas from "../assets/imagens/espaço-de-festas.jpg"
import instagram from "../assets/imagens/instagram.png"
import facebook from "../assets/imagens/Facebook.png"
import whatzapp from "../assets/imagens/Whatapp.jpg"
import logo from "../assets/imagens/logo.jpg"
import whatsappcanto from "../assets/imagens/wppdecanto.png"
//import { Carousel } from "../components/slideImg/index.tsx"

///const images = [logo, whatsappcanto, whatsappcanto]

export function Home() {
  return (
    <Container>
      {/* <Header>
        <Section>
          <HorariosDeServico>
            <div>
              <h2>18 às 23h</h2>
            </div>

            <BoxShadow>
              <h2>Seg à sext</h2>
            </BoxShadow>
          </HorariosDeServico>
        </Section>
      </Header> */}

      <main>
        <Section>
          <MobileHomePage>
            <DesktopHomePage>
              <WhatIs>
                <h3>Buffet infantil Temático em Osasco</h3>
                <h1>Espaço Galático</h1>
                <h1>Onde a Magia Acontece!</h1>

                <h3>
                  No Espaço Galático, transformamos sonhos em festas infantis
                  inesquecíveis! Click no botão abaixo e saiba mais.
                </h3>
              </WhatIs>

              <RoudendImg>
                <div>
                  <img src={logo} alt="Imagem de um garoto sorrindo" />
                </div>
              </RoudendImg>
            </DesktopHomePage>

            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5511960767865/?text=urlencodedtex",
                  "_blank"
                )
              }
            >
              Fale conosco e peça seu orçamento
            </Button>

            <ImgLogos id="socialMediaSection">
              <h3>Siga-nos nas mídias</h3>
              <ButtonImgDiv>
                <a
                  href="https://www.instagram.com/buffetespacogalatico?igsh=MjRwNmFtamMyZ280"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonImg>
                    <img src={instagram} alt="WhatsApp" />
                  </ButtonImg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091516518753"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonImg>
                    <img src={facebook} alt="WhatsApp" />
                  </ButtonImg>
                </a>
                <a
                  href="https://wa.me/5511960767865/?text=urlencodedtex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonImg>
                    <img src={whatzapp} alt="WhatsApp" />
                  </ButtonImg>
                </a>
              </ButtonImgDiv>
            </ImgLogos>
          </MobileHomePage>
        </Section>

        <DesktopImageText>
          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={mesaDeJogos} alt="Mesas de jogos" />
              </Img>

              <h3>Brinquedos e Atividades</h3>

              <p>
                Contamos com uma vasta seleção de brinquedos, incluindo labamba,
                brinquedão com enorme piscina de bolinhas, cama elástica,
                multijogos, tombo legal, air game, space game e muito mais. Além
                disso, nossas recreadoras promovem jogos e atividades
                interativas e criativas para manter a criançada sempre
                entretida.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img
                  src={mesaRefeitorio}
                  alt="Mesas de um refeitorio infantil"
                />
              </Img>

              <h3>Cardápio Variado</h3>
              <p>
                Nossa cozinha prepara um cardápio diversificado e saudável, com
                opções que vão de feijoada, strogonoff a massas, com salgadinhos
                deliciosos e doces irresistíveis. Tudo pensado para agradar
                crianças e adultos.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={espacoPrivativo} alt="" />
              </Img>

              <h3>Espaços</h3>

              <p>
                Oferecemos um espaço temático encantador, com variedade de
                atrações e brinquedos, uma equipe treinada e motivada, além da
                estrutura com ar condicionados, lindas decorações, iluminação e
                entrada especial para o parabéns, proporcionando todo o conforto
                e organização necessários para que sua festa seja incrivel.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={pacotesEspeciais} alt="" />
              </Img>

              <h3>Pacotes Especiais</h3>

              <p>
                Confira nossos pacotes personalizados, que incluem tudo o que
                você precisa para uma festa completa, desde a decoração até o
                buffet. Temos opções para diferentes tamanhos de festas e
                orçamentos.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>
        </DesktopImageText>

        <MidleDiv>
          <SectionImg>
            <EspacoFestas>
              <h3>Agende sua visita e conheça o nosso espaço!</h3>

              <Button
                onClick={() => {
                  const element = document.getElementById("socialMediaSection")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Veja nossas redes!
              </Button>
            </EspacoFestas>
          </SectionImg>

          <ImgEspacofestas>
            <img src={espacoFestas} alt="" />
          </ImgEspacofestas>

          <Reserve>
            <h3>Oque os nossos clientes dizem ..</h3>

            <p>
              "O Buffet Infantil Alegria transformou a festa do meu filho em um
              dia mágico! A equipe foi incrível em transformar nossas ideias em
              realidade. A decoração, atividades e comida foram impecáveis.
              Obrigada por tornar o aniversário do meu filho inesquecível!"
            </p>
          </Reserve>
        </MidleDiv>

        <Section>
          <MobileLastPage>
            <DesktopLastPage>
              <JustForStyle>
                <WhatIsLastPage>
                  <h3>Buffet infantil Temático em Osasco</h3>
                  <h1>Espaço Galático</h1>
                  <h1>Onde a Magia Acontece!</h1>
                </WhatIsLastPage>
              </JustForStyle>

              <h3>Venha viver essa experiência!</h3>
            </DesktopLastPage>
          </MobileLastPage>
        </Section>

        <BotaoFixo
          href="https://wa.me/5511960767865/?text=urlencodedtex"
          target="_blank"
        >
          <img src={whatsappcanto} alt="Botão para whatsapp" />
        </BotaoFixo>
      </main>

      {/* <div className="App">
        <h1>Image Carousel</h1>
        <Carousel images={images} />
      </div> */}

      <Footer>
        <p>
          Endereço: Av. Pref. Hirant Sanazar, 274 - Umuarama, Osasco - SP,
          06030-095
        </p>
        <a href="https://maps.app.goo.gl/vxUyHoxKyLb4xnux9" target="_blank">
          Nosso Endereço no Google Maps
        </a>
        <div>
          <h6>Espaço Galático 2024</h6>
        </div>
      </Footer>
    </Container>
  )
}
