import '../app/styles/global.css'
import '../app/configs/axiosConfig'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
