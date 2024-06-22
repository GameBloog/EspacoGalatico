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
import whatsappcanto from "../assets/imagens/wppdecantoV2.png"
import { Carousel } from "../components/slideImg/index.tsx"
//import whatsappcanto from "../assets/imagens/wppdecanto.png"
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
                  Aqui no Buffet, transformamos sonhos em festas inesquecíveis!
                  Click abaixo e venha nos conhecer e fazer um orçamento.
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
                Venha conhecer a grande variedade de comidinhas deliciosas que
                estão inclusas dentro dos nossos menus, são eles:
                {/* 
                  //TEXTO COMENTADO POIS ESTA QUEBRANDO O DESKTOP, DA UMA OLHADA
                
                <br />
                <br />
                <strong>Marte</strong> nosso menu tradicionalíssimo de{" "}
                <strong>Massa</strong>.
                <br />
                <br />
                <strong>Saturno</strong> nosso menu reforçado de{" "}
                <strong>Strogonoff</strong> de frango.
                <br />
                <br />
                <strong>Terra</strong> nosso menu queridinho e especial de{" "}
                <strong>Feijoada</strong>.
                <br />
                <br />
                Acompanhados das entradinhas, salgados fritos na hora, saladinha
                e é claro nossa grande variedade de bolos deliciosos e docinhos.
                As bebidas não alcoólicas também ficam por nossa conta,
                refrigerantes 1ª linha, sucos e água.
                <br />
                Tudo isso incluso e a vontade na sua festa, para deixar todos os
                seus convidados felizes. */}
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={espacoPrivativo} alt="" />
              </Img>

              <h3>Espaço</h3>

              <p>
                Espaço totalmente temático, ótimo para tirar aquelas fotos
                incríveis para as redes socias, comporta até 70 pessoas.
                Contamos com uma equipe completa, motivada e treinada, além da
                estrutura com ar condicionados, muitos brinquedos,
                proporcionando todo conforto e organização necessárias para que
                sua festa seja incrível.
              </p>
            </ImageWithText>
          </ImageWithTextContainer>

          {/*
          //DIV DAS FRASES SOLTAS

          <SingleWords>
            <h3>
              Temos opções para diferentes tamanhos de festas e orçamentos.{" "}
            </h3>
          </SingleWords> */}

          <ImageWithTextContainer>
            <ImageWithText>
              <Img>
                <img src={pacotesEspeciais} alt="" />
              </Img>

              <h3>Decorações</h3>

              <p>
                Contamos com um espaço determinado para a montagem da decoração,
                temos inúmeros temas disponíveis e a montagem da decoração está
                inclusa em seu pacote. Na hora dos parabéns fazemos uma entrada
                muito especial com música, iluminação e máquina de fumaça.
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

      <div>
        <Carousel />
      </div>

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
