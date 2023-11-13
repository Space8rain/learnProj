import '../styles/globals.css';
import Head from 'next/head';
import { GlobalStyle, AppWrapper } from '../components/globalStyle/GlobalStyle';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Test betboom</title>
        <meta name="description" content="test task" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}

export default MyApp
