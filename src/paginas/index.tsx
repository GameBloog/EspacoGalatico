import {
  Header,
  Section,
  HorariosDeServico,
  MobileHomePage,
  WhatIs,
  CallToAction,
  Container,
  Img,
  ImgLogos,
  RoudendImg,
  ImageWithText,
  ImgItalia,
  PratosItalia,
  SectionImg,
  EspacoFestas,
  ImageWithTextContainer,
  Reserve,
  MobileLastPage,
  BoxShadow,
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
            <WhatIs>
              <p>Buffet infantil</p>
              <h1>Espaço Galático</h1>
              <h1>Onde a Magia Acontece!</h1>
            </WhatIs>

            <CallToAction>
              No Espaço Galático, transformamos sonhos em festas infantis
              inesquecíveis! Click no botão abaixo e saiba mais.
            </CallToAction>

            <RoudendImg>
              <div>
                <img src={logo} alt="Imagem de um garoto sorrindo" />
              </div>
            </RoudendImg>

            <button>Veja nossas promoções!</button>
          </MobileHomePage>
        </Section>

        <ImageWithTextContainer>
          <ImageWithText>
            <Img>
              <img src={mesaDeJogos} alt="Mesas de jogos" />
            </Img>

            <h3>Brinquedos e Atividades</h3>

            <p>
              Contamos com uma vasta seleção de brinquedos, incluindo
              playground, piscina de bolinhas, cama elástica, e muito mais. Além
              disso, nossos recreadores promovem atividades interativas e
              oficinas criativas para manter a criançada sempre entretida.
            </p>
          </ImageWithText>
        </ImageWithTextContainer>

        <ImageWithTextContainer>
          <ImageWithText>
            <Img>
              <img src={mesaRefeitorio} alt="Mesas de um refeitorio infantil" />
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
              conforto e exclusividade. Perfeito para festas mais intimistas ou
              eventos especiais.
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
              Confira nossos pacotes personalizados, que incluem tudo o que você
              precisa para uma festa completa, desde a decoração até o buffet.
              Temos opções para diferentes tamanhos de festas e orçamentos.
            </p>
          </ImageWithText>
        </ImageWithTextContainer>

        <SectionImg>
          <EspacoFestas>
            <h3>Agende sua visita e conheça o nosso espaço!</h3>

            <ImgItalia>
              <img src={espacoFestas} alt="" />
            </ImgItalia>

            <p>
              Oferecemos um espaço temático encantador, com diversas opções de
              brinquedos e atividades, um cardápio delicioso e saudável, além de
              uma equipe dedicada e experiente para tornar cada festa única e
              especial.
            </p>

            <button>Veja nossas redes!</button>
          </EspacoFestas>
        </SectionImg>

        <SectionImg>
          <PratosItalia>
            <h3>Tipos de pratos que vamos trazer da Itália</h3>

            <ImgItalia>
              <img
                src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
                alt=""
              />
            </ImgItalia>

            <p>
              A gastronomia italiana é famosa em todo o mundo por sua variedade
              de pratos deliciosos e autênticos. Entre as maravilhas culinárias
              que se destacam, a pizza certamente ocupa um lugar de destaque.
              Com sua origem na pitoresca cidade de Nápoles, a pizza italiana se
              tornou uma paixão global, sendo apreciada por milhões de pessoas.
            </p>

            <button>Acesse nosso cardápio agora !</button>
          </PratosItalia>
        </SectionImg>

        <Reserve>
          <h3>Faça seu pedido e receba no conforto da sua casa !</h3>
          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </Img>

          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </Img>

          <p>
            Baixe nosso app na loja Play Store. instale e faça o seu cadastro.
          </p>

          <button>Acesse nosso cardápio agora!</button>
        </Reserve>

        <Section>
          <MobileLastPage>
            <WhatIs>
              <p>Buffet infantil</p>
              <h1>Espaço Galático</h1>
              <h1>Onde a Magia Acontece!</h1>
            </WhatIs>

            <HorariosDeServico>
              <div>
                <h2>18 às 23h</h2>
              </div>

              <BoxShadow>
                <h2>Seg à sext</h2>
              </BoxShadow>
            </HorariosDeServico>

            <p>Venha viver essa experiência !</p>

            <h2>Siga-nos nas mídias</h2>

            <ImgLogos>
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={whatzapp} alt="Whatapp" />
            </ImgLogos>

            <button>Inscreve-se e receba nossas novidades</button>
          </MobileLastPage>
        </Section>
      </main>

      <footer>Restaurante Cheff Petter 2023</footer>
    </Container>
  )
}
