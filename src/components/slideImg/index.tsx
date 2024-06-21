// // Carousel.tsx
// import React, { useState } from "react"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import { Modal } from "../modal" // Verifique se o caminho para o Modal está correto

// interface CarouselProps {
//   images: string[]
// }

// export const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)

//   const openModal = (imageUrl: string) => {
//     setSelectedImage(imageUrl)
//   }

//   const closeModal = () => {
//     setSelectedImage(null)
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: false, // Adicionado para evitar pausas ao passar o mouse
//     pauseOnFocus: false,
//     arrows: false,
//   }

//   return (
//     <div>
//       <Slider {...settings}>
//         {images.map((imageUrl, index) => (
//           <div key={index} onClick={() => openModal(imageUrl)}>
//             <img
//               src={imageUrl}
//               alt={`Image ${index}`}
//               style={{ width: "100%", cursor: "pointer" }}
//             />
//           </div>
//         ))}
//       </Slider>

//       {selectedImage && (
//         <Modal imageUrl={selectedImage} closeModal={closeModal} />
//       )}
//     </div>
//   )
// }

//Testar swiperjs