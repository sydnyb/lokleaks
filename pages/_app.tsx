// pages/_app.tsx
import '../styles/globals.css'
import { AppProps } from 'next/app'
import i18n from '../i18n'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default i18n(MyApp)