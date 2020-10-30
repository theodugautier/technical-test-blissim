import '../styles/globals.css'
import { GlobalProvider } from "../state/global-context";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme"

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default MyApp
