import {
  Header,
  Section,
  RotasDeNav,
  MobileHomePage,
  WhatIs,
  CallToAction,
  Container,
  Img,
  RoudendImg,
  ImageWithText,
  ImgItalia,
  SectionImg,
} from "./styles.ts"

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
              <img
                src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
                alt="Um garoto sorrindo em um playground"
              />
            </RoudendImg>

            <button>Veja nossas promoções!</button>
          </MobileHomePage>
        </Section>

        <ImageWithText>
          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </Img>
          <p>
            Nosso cardápio é variado e conta com toda a variedade da cozinha
            Italiana, para que você tenha uma experiência completa.
          </p>
        </ImageWithText>

        <ImageWithText>
          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </Img>
          <p>
            Nosso cardápio é variado e conta com toda a variedade da cozinha
            Italiana, para que você tenha uma experiência completa.
          </p>
        </ImageWithText>

        <ImageWithText>
          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </Img>
          <p>
            Nosso cardápio é variado e conta com toda a variedade da cozinha
            Italiana, para que você tenha uma experiência completa.
          </p>
        </ImageWithText>

        <ImageWithText>
          <Img>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </Img>
          <p>
            Nosso cardápio é variado e conta com toda a variedade da cozinha
            Italiana, para que você tenha uma experiência completa.
          </p>
        </ImageWithText>

        <SectionImg>
          <h1>Com fidelidade a cozinha Italiana</h1>
          <ImgItalia>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />
          </ImgItalia>

          <p>
            Cheff Peter trás direto da Itália, os melhores pratos com toda a
            fidelidade ás tradições do país.
          </p>

          <button>Acesse nosso cardápio agora !</button>
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

            <button>Acesse nosso cardápio agora !</button>
          </Img>
        </Section>

        <Section>
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

          <Img>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </Img>

          <div>
            <textarea name="" id=""></textarea>
            <textarea name="" id=""></textarea>
          </div>

          <button>Inscreve-se e receba nossas novidades</button>
        </Section>
      </main>

      <footer>Restaurante Cheff Petter 2023</footer>
    </Container>
  )
}
