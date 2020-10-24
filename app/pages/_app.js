import '../styles/globals.css'
import {GlobalProvider} from "../state/global-context";

function MyApp({ Component, pageProps }) {
  return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
      )
}

export default MyApp
