import Head from 'next/head'
import '../styles/base.css'
import Store from '../state/store'

export default function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Component {...pageProps} />
    </Store>
  )
}
