import '../app/styles/app.css'
import '../app/configs/axiosConfig'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
