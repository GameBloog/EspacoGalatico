import {
  Header,
  Section,
  RotasDeNav,
  MobileHomePage,
  WhatIs,
  CallToAction,
  Container,
  Img,
  ImgLogos,
  RoudendImg,
  ImageWithText,
  ImgItalia,
  SectionImg,
} from "./styles.ts"

import garoto from "../assets/imagens/garoto-playground.jpg"
import mesaDeJogos from "../assets/imagens/Mesas-de-jogos.jpg"
import mesaRefeitorio from "../assets/imagens/Mesas-refeitorio.jpg"
import espacoPrivativo from "../assets/imagens/Espaços-privativos.jpg"
import pacotesEspeciais from "../assets/imagens/pacotes-especiais.jpg"
import espacoFestas from "../assets/imagens/espaço-de-festas.jpg"
import instagram from "../assets/imagens/instagram.png"
import tiktok from "../assets/imagens/tiktok.png"
import whatzapp from "../assets/imagens/Whatapp.jpg"


export function Home() {
  return (
    <Container>
      <Header>
        <Section>
          {/* <div>
            <Link to="/">Pagina 1</Link>
          </div> */}

          <RotasDeNav>
            <div>
              <h2>18 às 23h</h2>
            </div>

            <div>
              <h2>Seg à sext</h2>
            </div>
          </RotasDeNav>
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
                <img src={garoto} alt="Imagem de um garoto sorrindo" />
              </div>
            </RoudendImg>

            <button>Veja nossas promoções!</button>
          </MobileHomePage>
        </Section>

        <ImageWithText>
          <Img>
            <img src={mesaDeJogos} alt="Mesas de jogos" />
          </Img>

          <h3>Brinquedos e Atividades</h3>

          <p>
            Contamos com uma vasta seleção de brinquedos, incluindo playground,
            piscina de bolinhas, cama elástica, e muito mais. Além disso, nossos
            recreadores promovem atividades interativas e oficinas criativas
            para manter a criançada sempre entretida.
          </p>
        </ImageWithText>

        <ImageWithText>
          <Img>
            <img src={mesaRefeitorio} alt="Mesas de um refeitorio infantil" />
          </Img>

          <h2>Cardápio Variado</h2>
          <p>
            Nossa cozinha prepara um cardápio diversificado e saudável, com
            opções que vão desde salgadinhos deliciosos até doces irresistíveis.
            Tudo pensado para agradar crianças e adultos.
          </p>
        </ImageWithText>

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

        <SectionImg>
          <div>
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
          </div>
        </SectionImg>

        <Section>
          <h1>Tipos de pratos que vamos trazer da Itália</h1>

          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <p>
              A gastronomia italiana é famosa em todo o mundo por sua variedade
              de pratos deliciosos e autênticos. Entre as maravilhas culinárias
              que se destacam, a pizza certamente ocupa um lugar de destaque.
              Com sua origem na pitoresca cidade de Nápoles, a pizza italiana se
              tornou uma paixão global, sendo apreciada por milhões de pessoas.
            </p>

            <button>Acesse nosso cardápio agora !</button>
          </Img>
        </Section>

        <Section>
          <p>
            Realmente uma experiencia gastronômica sem igual. Eu amo a
            gastronomia Italiana e já visitei o país. Foi uma das melhores
            refeições que ja comi. Me sentí de volta à Itália.
          </p>

          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <h3>Angela Vargas</h3>
            <p>Empreendedora</p>
          </Img>
        </Section>

        <Section>
          <h1>Faça seu pedido e receba no conforto da sua casa !</h1>
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

            <p>
              Baixe nosso app na loja Play Store. instale e faça o seu cadastro.
            </p>

            <button>Acesse nosso cardápio agora!</button>
          </Img>
        </Section>

        <Section>
          <div>
            <div>
              <p>Buffet infantil</p>
              <h1>Espaço Galático</h1>
              <h1>Experimente</h1>
            </div>

            <div>
              <h2>18 às 23h</h2>
            </div>

            <div>
              <h2>Seg à sext</h2>
            </div>

            <p>Venha viver essa experiência !</p>

            <h2>Siga-nos nas mídias</h2>

            <ImgLogos>
              <img src={instagram} alt="instagram" />
              <img src={tiktok} alt="tiktok" />
              <img src={whatzapp} alt="Whatapp" />
            </ImgLogos>

            <div>
              <textarea name="" id=""></textarea>
              <textarea name="" id=""></textarea>
            </div>

            <button>Inscreve-se e receba nossas novidades</button>
          </div>
        </Section>
      </main>

      <footer>Restaurante Cheff Petter 2023</footer>
    </Container>
  )
}
