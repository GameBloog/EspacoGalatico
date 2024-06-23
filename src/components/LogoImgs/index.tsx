import { ButtonImg, ButtonImgDiv, ImgLogo } from "./styles"

import instagram from "../../assets/imagens/instagram.png"
import facebook from "../../assets/imagens/Facebook.png"
import whatzapp from "../../assets/imagens/Whatapp.jpg"

export function ImgLogos() {
  return (
    <ImgLogo id="socialMediaSection">
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
    </ImgLogo>
  )
}
