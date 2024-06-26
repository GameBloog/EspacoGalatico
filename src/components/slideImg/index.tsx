import { useRef, useState } from "react"
import Modal from "react-modal"
import SwiperCore from "swiper"
import "swiper/css"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { CloseButton, ImageModal, Images } from "./styles"
import { XCircle } from "phosphor-react"

// Instale os módulos necessários no Swiper
SwiperCore.use([Autoplay, Pagination])

Modal.setAppElement("#root")

export interface ImageData {
  id: string
  image: string
}

interface CarouselProps {
  images: ImageData[]
}

export function Carousel({ images }: CarouselProps) {
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
        // centeredSlides
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
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((item: ImageData) => (
          <SwiperSlide key={item.id} style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
            <Images onClick={() => openModal(item.image)}>
              <img
                src={item.image}
                alt="slider"
                style={{ cursor: "pointer", objectFit: 'contain' }}
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
        id="modal"
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
        <CloseButton onClick={closeModal}><XCircle size={32} color="black"/></CloseButton>
        {selectedImage && (
          <ImageModal>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </ImageModal>
        )}
      </Modal>
    </div>
  )
}
