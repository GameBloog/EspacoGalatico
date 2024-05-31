// import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <>
      <header>
        <section className="rotas-de-nav">
          
          {/* <div>
            <Link to="/">Pagina 1</Link>
          </div> */}

          <div>
            <h2>18 às 23h</h2>
          </div>

          <div>
            <h2>Seg à sext</h2>
          </div>

        </section>

      </header>

      <main>
        <section className="pagina-inicial-mobile">
          <div>
            <p>Buffet infantil</p>
            <h1>Espaço Galático</h1>
            <h1>Experimente</h1>

            <p>
              Venha viver uma experiência gastronômica sem igual. Click no botão
              abaixo e reserve a sua mesa.
            </p>

            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <button>Acesse nosso cardápio agora !</button>
          </div>
        </section>

        <section className="caixa-de-informações-mobile">
          <div>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <p>
              Nosso cardápio é variado e conta com toda a variedade da cozinha
              Italiana, para que você tenha uma experiência completa.
            </p>
          </div>
        </section>

        <section className="pagina-cozinha-italiana">
          <div>
            <h1>Com fidelidade a cozinha Italiana</h1>

            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <p>
              Cheff Peter trás direto da Itália, os melhores pratos com toda a
              fidelidade ás tradições do país.
            </p>

            <button>Acesse nosso cardápio agora !</button>
          </div>
        </section>

        <section className="tipos-de-pratos">
          <h1>Tipos de pratos que vamos trazer da Itália</h1>

          <div>
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
          </div>
        </section>

        <section className="feedback-clientes">
          <p>
            Realmente uma experiencia gastronômica sem igual. Eu amo a
            gastronomia Italiana e já visitei o país. Foi uma das melhores
            refeições que ja comi. Me sentí de volta à Itália.
          </p>

          <div>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <h3>Angela Vargas</h3>
            <p>Empreendedora</p>
          </div>
        </section>

        <section className="faca-seu-pedido">
          <h1>Faça seu pedido e receba no conforto da sua casa !</h1>

          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
            alt=""
          />

          <div>
            <img
              src="https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg"
              alt=""
            />

            <p>
              Baixe nosso app na loja Play Store. instale e faça o seu cadastro.
            </p>

            <button>Acesse nosso cardápio agora !</button>
          </div>
        </section>

        <section className="login">
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

          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

          <div>
            <textarea name="" id=""></textarea>
            <textarea name="" id=""></textarea>
          </div>

          <button>Inscreve-se e receba nossas novidades</button>
        </section>
      </main>

      <footer>Restaurante Cheff Petter 2023</footer>
    </>
  )
}
export default Home
