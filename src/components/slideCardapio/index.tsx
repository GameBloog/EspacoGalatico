import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import SwiperCore from "swiper"
import Modal from "react-modal"
import mesaDeJogos from "../../assets/imagens/Mesas-de-jogos.jpg"
import mesaRefeitorio from "../../assets/imagens/Mesas-refeitorio.jpg"
import espacoPrivativo from "../../assets/imagens/Espaços-privativos.jpg"
import pacotesEspeciais from "../../assets/imagens/pacotes-especiais.jpg"
import { SlideWithText } from "./SlideWithText"
import { Autoplay, Pagination } from "swiper/modules"
import { Images } from "./styles"

// Instale os módulos necessários no Swiper
SwiperCore.use([Autoplay, Pagination])

Modal.setAppElement("#root")

export function CarouselwithText() {
  const data = [
    {
      id: "1",
      image: mesaDeJogos,
      title: "Mesa de Jogos",
      description:
        "Contamos com uma vasta seleção de brinquedos, incluindo labamba, brinquedão com enorme piscina de bolinhas, cama elástica, multijogos, tombo legal, air game, space game e muito mais.",
    },
    {
      id: "2",
      image: mesaRefeitorio,
      title: "Mesa de Refeitório",
      description:
        "Nossa cozinha prepara um cardápio diversificado e saudável, com opções que vão de feijoada, strogonoff a massas, com salgadinhos deliciosos e doces irresistíveis. Tudo pensado para agradar crianças e adultos.",
    },
    {
      id: "3",
      image: espacoPrivativo,
      title: "Espaço Privativo",
      description:
        "Oferecemos um espaço temático encantador, com variedade de atrações e brinquedos, uma equipe treinada e motivada, além da estrutura com ar condicionados, lindas decorações, iluminação e entrada especial para o parabéns.",
    },
    {
      id: "4",
      image: pacotesEspeciais,
      title: "Pacotes Especiais",
      description:
        "Confira nossos pacotes personalizados, que incluem tudo o que você precisa para uma festa completa, desde a decoração até o buffet. Temos opções para diferentes tamanhos de festas e orçamentos.",
    },
  ]

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const swiperRef = useRef<SwiperCore | null>(null)

  const openModal = (image: string) => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop()
    }
    setSelectedImage(image)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    if (swiperRef.current) {
      swiperRef.current.autoplay.start()
    }
    setSelectedImage(null)
  }

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Images onClick={() => openModal(item.image)}>
              <SlideWithText
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Images>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "80%",
            maxHeight: "80%",
            width: "auto",
            height: "auto",
            zIndex: 1001,
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "white",
            zIndex: 1002,
          }}
        >
          &times;
        </button>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "40rem",
            }}
          />
        )}
      </Modal>
    </div>
  )
}
