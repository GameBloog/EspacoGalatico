import {
  DesktopLastPage,
  JustForStyle,
  MobileLastPage,
  WhatIsLastPage,
} from "./styles"

export function LastPage() {
  return (
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
  )
}
