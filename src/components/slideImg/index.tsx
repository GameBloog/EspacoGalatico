import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css"
import SwiperCore from "swiper"
import Modal from "react-modal"
import mesaDeJogos from "../../assets/imagens/Mesas-de-jogos.jpg"
import mesaRefeitorio from "../../assets/imagens/Mesas-refeitorio.jpg"
import espacoPrivativo from "../../assets/imagens/Espaços-privativos.jpg"
import pacotesEspeciais from "../../assets/imagens/pacotes-especiais.jpg"
import { Images, CloseButton, ImageModal } from "./styles"
import { Autoplay, Pagination } from "swiper/modules"

// Instale os módulos necessários no Swiper
SwiperCore.use([Autoplay, Pagination])

Modal.setAppElement("#root")

export function Carousel() {
  const data = [
    { id: "1", image: mesaDeJogos },
    { id: "2", image: mesaRefeitorio },
    { id: "3", image: espacoPrivativo },
    { id: "4", image: pacotesEspeciais },
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
              <img
                src={item.image}
                alt="slider"
                style={{ cursor: "pointer" }}
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
            background: "#004d36",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "80%",
            maxHeight: "80%",
            width: "45rem",
            height: "auto",
            zIndex: 1001,
          },
        }}
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        {selectedImage && (
          <ImageModal>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "40rem",
              }}
            />
          </ImageModal>
        )}
      </Modal>
    </div>
  )
}
