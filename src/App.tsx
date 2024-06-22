import { BrowserRouter } from "react-router-dom"
import Rotas from "./Routes.jsx"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.js"
import { GlobalStyle } from "./styles/global.js"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
