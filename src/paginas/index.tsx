import {
  Header,
  Section,
  HorariosDeServico,
  MobileHomePage,
  DesktopHomePage,
  Button,
  WhatIs,
  // CallToAction,
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
  DesktopMidPage,
  MobileLastPage,
  DesktopLastPage,
  BoxShadow,
  Footer,
} from "./styles.ts"

// import garoto from "../assets/imagens/garoto-playground.jpg" Se n usarmos iremos apagar está linha

import mesaDeJogos from "../assets/imagens/Mesas-de-jogos.jpg"
import mesaRefeitorio from "../assets/imagens/Mesas-refeitorio.jpg"
import espacoPrivativo from "../assets/imagens/Espaços-privativos.jpg"
import pacotesEspeciais from "../assets/imagens/pacotes-especiais.jpg"
import espacoFestas from "../assets/imagens/espaço-de-festas.jpg"
import instagram from "../assets/imagens/instagram.png"
import facebook from "../assets/imagens/Facebook.png"
import whatzapp from "../assets/imagens/Whatapp.jpg"
import logo from "../assets/imagens/logo.jpg"

export function Home() {
  return (
    <Container>
      <Header>
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
      </Header>

      <main>
        <Section>
          <MobileHomePage>
            <DesktopHomePage>
              <WhatIs>
                <p>Buffet infantil</p>
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

            <Button>Entre em contato conosco!</Button>
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
                Contamos com uma vasta seleção de brinquedos, incluindo
                playground, piscina de bolinhas, cama elástica, e muito mais.
                Além disso, nossos recreadores promovem atividades interativas e
                oficinas criativas para manter a criançada sempre entretida.
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

              <h2>Cardápio Variado</h2>
              <p>
                Nossa cozinha prepara um cardápio diversificado e saudável, com
                opções que vão desde salgadinhos deliciosos até doces
                irresistíveis. Tudo pensado para agradar crianças e adultos.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={espacoPrivativo} alt="" />
              </Img>

              <h2>Espaços Privativos</h2>

              <p>
                Oferecemos salas privativas para que você possa celebrar com
                conforto e exclusividade. Perfeito para festas mais intimistas
                ou eventos especiais.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={pacotesEspeciais} alt="" />
              </Img>

              <h2>Pacotes Especiais</h2>

              <p>
                Confira nossos pacotes personalizados, que incluem tudo o que
                você precisa para uma festa completa, desde a decoração até o
                buffet. Temos opções para diferentes tamanhos de festas e
                orçamentos.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>
        </DesktopImageText>

        <DesktopMidPage>
          <SectionImg>
            <EspacoFestas>
              <h3>Agende sua visita e conheça o nosso espaço!</h3>

              <p>
                Oferecemos um espaço temático encantador, com diversas opções de
                brinquedos e atividades, um cardápio delicioso e saudável, além
                de uma equipe dedicada e experiente para tornar cada festa única
                e especial.
              </p>

              <Button>Veja nossas redes!</Button>
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
        </DesktopMidPage>

        <Section>
          <MobileLastPage>
            <DesktopLastPage>
              <HorariosDeServico>
                <div>
                  <h2>18 às 23h</h2>
                </div>

                <BoxShadow>
                  <h2>Seg à sext</h2>
                </BoxShadow>
              </HorariosDeServico>

              <WhatIs>
                <p>Buffet infantil</p>
                <h1>Espaço Galático</h1>
                <h1>Onde a Magia Acontece!</h1>
              </WhatIs>

              <p>
                <strong>Venha viver essa experiência!</strong>
              </p>
            </DesktopLastPage>

            <ImgLogos>
              <h3>Siga-nos nas mídias</h3>
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={whatzapp} alt="Whatapp" />
            </ImgLogos>

            <Button>Inscreve-se e receba nossas novidades</Button>
          </MobileLastPage>
        </Section>
      </main>

      <Footer>
        <p>
          Endereço: Av. Pref. Hirant Sanazar, 274 - Umuarama, Osasco - SP,
          06030-095
        </p>
        <a href="https://maps.app.goo.gl/vxUyHoxKyLb4xnux9" target="_blank">
          Nosso Endereço no Google Maps
        </a>
        <h6>Restaurante Cheff Petter 2023</h6>
      </Footer>
    </Container>
  )
}
